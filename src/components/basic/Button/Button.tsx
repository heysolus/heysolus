import "./Button.scss";
import { Button as AntButton, ButtonProps } from "antd";
import React, { FunctionComponent } from "react";

const Button: FunctionComponent<ButtonProps> = (props) => {
    return <AntButton {...props} />;
};

export default Button;