import React from "react";
import DropdownComponent from "./Dropdown";
import "../css/Selectors.css";

export interface selectorProps {
  rules: [];
}

const Selectors = ({ rules }: selectorProps) => {
  return (
    <>
      {rules.map((item) => {
        return (
          <div className="selectors">
            <DropdownComponent />
            <DropdownComponent />
            <DropdownComponent />
          </div>
        );
      })}
    </>
  );
};

export default Selectors;
