import React from "react";

import { BtnStyle } from "./ButtonStyle";

const Button = (props) => {
  return (
    <BtnStyle BtnStyle onClick={props.onClick} disabled={props.disabled}>
      {props.title}
    </BtnStyle>
  );
};

export default Button;
