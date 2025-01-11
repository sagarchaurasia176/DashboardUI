import React, { useState, useEffect } from "react";
// sanitize and xss

type DynamicComponentProps = {
  ComponentName: string;
  props?: Record<string, any>;
};

const PreviewComponent: React.FC<DynamicComponentProps> = ({
  ComponentName,
  props,
}) => {
  const [Component, setComponent] = useState<React.FC<any> | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const importComponent = async () => {
      let importedComponent: React.FC;
      try {
        // remove whitespaces from component name
        const component = ComponentName.replace(/\s/g, "");
        console.log(component);
        importedComponent = (
          await import(`../stories/${component}.stories.tsx`)
        ).Default;
        setComponent(() => importedComponent);
      } catch (error) {
        console.log(error);
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
