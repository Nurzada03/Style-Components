import React from "react";




import { StyleLabel, StyleInput } from "./FormInputStyle";

const FormInput = ({
  id,
  styleLabel,
  labelName,
  inputType,
  placeholder,
  styleInput,
  ...rest
}) => {
  return (
    <form>
      <StyleLabel>{labelName}</StyleLabel>
      <br />
      <StyleInput
        type={inputType}
        placeholder={placeholder || "..."}
        id={id}
        {...rest}
      />
    </form>
  );
};




export default FormInput;
