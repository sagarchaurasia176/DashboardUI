import React, { useState, useEffect } from "react";
// sanitize and xss

type DynamicComponentProps = {
  Component?: React.ComponentType<any>;
  ComponentName: string;
  props?: Record<string, any>;
};

// name
const PreviewComponent: React.FC<DynamicComponentProps> = ({
  // Component,
  ComponentName,
  props,
}) => {
  const [Component, setComponent] = useState<React.FC<any> | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const importComponent = async () => {
      let importedComponent: React.FC<any> | null;
      try {
        const component = ComponentName.replace(/\s/g, "");
        const url = `../stories/${component}.stories`;
        importedComponent = (await import(url)).Default;
        setComponent(() => importedComponent);
      } catch (error) {
        console.log("Error loading components");
        setComponent(null);
      } finally {
        setLoading(false);
      }
    };
    importComponent();
  }, [ComponentName]);

  // handle loading
  if (loading) {
    return <div>Loading..</div>;
  }

  if (!Component) {
    <div>No Component provided</div>;
  }

  return Component ? (
    <Component {...props} />
  ) : (
    <div>No Component provided</div>
  );
};

export default PreviewComponent;
