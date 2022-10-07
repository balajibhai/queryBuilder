import React, { useState } from "react";
import { Dropdown } from "@visualbi/bifrost-ui/dist/react/forms/DropDown";

const DropdownComponent = () => {
  const [value, setValue] = useState("");
  const getValue = (e: any) => {
    setValue(e.label);
  };
  return (
    <div className="dropdown">
      <Dropdown
        classNamePrefix={"react-select"}
        className=""
        placeholder={"Select data field"}
        isSearchable={false}
        value={value}
        options={["name", "balaji"]}
        onChange={getValue}
      />
    </div>
  );
};

export default DropdownComponent;
