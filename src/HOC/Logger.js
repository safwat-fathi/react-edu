import React, { useEffect } from "react";

// function returns a component
const Logger = (WrappedComponent) => {
  const Proxy = (props) => {
    useEffect(() => {
      console.log(props);
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Proxy;
};

export default Logger;
