import React from "react";
import DropdownComponent from "./Dropdown";
import "../css/Selectors.css";

export interface selectorProps {
  rules: [];
  onDelete: Function;
}

const Selectors = ({ rules, onDelete }: selectorProps) => {
  return (
    <>
      {rules.map((element, index) => {
        return (
          <div className="selectors">
            <DropdownComponent />
            <DropdownComponent />
            <DropdownComponent />
            <div className="delete" onClick={() => onDelete(index)}>
              <i className="icon icon--Delete"></i>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Selectors;
