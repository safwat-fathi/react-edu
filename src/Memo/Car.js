import React, { memo } from "react";

function Car({ brand }) {
  console.log(`rendring ${brand}`);

  return <p>{brand}</p>;
}

export default memo(Car, (prevProps, nextprops) => {
  if (prevProps === nextprops) return prevProps;
  // console.log(prevProps);
  // console.log(nextprops);
  return nextprops;
});
