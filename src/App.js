import React from "react";
// app components
import Recursive from "./RecursiveComponents";
// data
import { pagesData } from "./pagesData";
const App = () => {
  return (
    <>
      {Object.entries(pagesData).map(([pageID, pageData]) => {
        return <Recursive key={pageID} page={pageData} />;
      })}
    </>
  );
};

export default App;
