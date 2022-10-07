import { Switch } from "@visualbi/bifrost-ui/dist/react/forms/Switch";
import Button from "./components/Button";
import { Radio } from "@visualbi/bifrost-ui/dist/react/forms/Radio";
import React, { useState } from "react";
import "./css/App.css";
import { PopupComponent } from "./components/PopupComponent";
import DropdownComponent from "./components/Dropdown";

export interface IAppProps {
  children?: any;
}

function App({ children }: IAppProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <div className="App">
      <Switch
        value={true}
        className="filter-persist"
        label="Disable all"
        onChange={() => null}
      />
      <Button text="Advanced" />
      <Radio
        label="And"
        value={isEnabled}
        onChange={() => setIsEnabled(!isEnabled)}
      />
      <i className="icon icon--Delete"></i>
      <i className="icon icon--Add"></i>
      <DropdownComponent />
      <PopupComponent />
    </div>
  );
}

export default App;
