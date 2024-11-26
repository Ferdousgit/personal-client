import React from "react";
import * as FontIcon from "react-icons/fa";

const Icon = ({ iconName }: { iconName: keyof typeof FontIcon }) => {
  return React.createElement(FontIcon[iconName]);
};

export default Icon;
