import React, { useState } from "react";

import Car from "./Car";

const Cars = () => {
  const [cars, setCars] = useState(["BMW", "Audi", "Tata"]);

  return (
    <>
      {cars.map((car, i) => {
        return <Car key={i} brand={car} />;
      })}
      <button onClick={() => setCars([...cars, prompt("car brand")])}>
        Add a car
      </button>
    </>
  );
};

export default Cars;
