import React from "react";

const Input = props => {
  const onChange = e => {
    props.onChange(e.target.value);
  };

  return (
    <input
      className="input text"
      type="text"
      id={props.id}
      placeholder="Enter number of tries"
      onChange={onChange}
    />
  );
};
export default Input;
