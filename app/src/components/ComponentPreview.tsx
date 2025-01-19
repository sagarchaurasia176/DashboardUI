import React, { useEffect, useState } from "react";
import { AgCharts } from "ag-charts-react";
import { AdditionalList } from "../utils/ComponentsList";
import "ag-charts-enterprise";
import DOMPurify from "dompurify";

type DynamicComponentProps = {
  componentName: string;
};

const ComponentPreview: React.FC<DynamicComponentProps> = ({
  componentName,
}) => {
  const [options, setOptions] = useState(null);
  const [Component, setComponent] = useState(null);

  const component = componentName.replace(/\s/g, "");
  console.log(component);

  const isAdditionalComponent = AdditionalList.some((obj) => {
    const name = obj.name.replace(/\s/g, "");
    return name === component;
  });

  const sanitizedHtmlContent =
    Component !== null ? DOMPurify.sanitize(Component) : "";

  let importedComponent;
  useEffect(() => {
    const getComponent = async () => {
      importedComponent = (await import(`../playground/${component}.ts`))
        .default;
      if (isAdditionalComponent) {
        setOptions(() => null);
        console.log("Additional");
        const code = importedComponent.code
          .split(` => {`)[1]
          .split("};")[0]
          .replace(/(\w+):(?=[^/])/g, '"$1":')
          .replace(/,(\s*[\]}])/g, "$1");
        console.log(code);
        setComponent(() => code);
      } else {
        console.log("Not additional");
        setComponent(() => null);
        const code = importedComponent.code
          .split(` = useState({\n`)[1]
          .split("});");
        const json = `{${code[0]}}`
          .replace(/(\w+):/g, '"$1":')
          .replace(/,(\s*[\]}])/g, "$1");
        const parsedJSON = JSON.parse(json);
        setOptions(() => parsedJSON);
      }
    };
    getComponent();
    console.log(options);
  }, [componentName]);

  return (
    <div>
      {options && <AgCharts options={options} />}
      {Component !== null && (
        <div dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }} />
      )}
    </div>
  );
};

export default ComponentPreview;
