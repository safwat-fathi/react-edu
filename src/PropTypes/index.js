import React from "react";
import PropTypes from "prop-types";

// function returns a component
const Foo = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
};

Foo.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Foo;
