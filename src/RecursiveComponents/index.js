import React from "react";

const Recursive = ({ page }) => {
  // recursion
  const nestedPages = (Object.entries(page.children) || []).map(
    ([pageID, pageData]) => {
      return <Recursive key={pageID} page={pageData} />;
    }
  );

  console.log("page: ", page);

  return (
    <ul>
      <li key={page.pageID}>{page.title}</li>
      {nestedPages}
    </ul>
  );
};

export default Recursive;
