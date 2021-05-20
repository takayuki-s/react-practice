import React from "react";

const ColorfulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fonsSize: "18px"
  };
  return <p style={contentStyle}>{props.message}</p>;
};

export default ColorfulMessage;
