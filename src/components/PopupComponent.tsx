import { Switch } from "@visualbi/bifrost-ui/dist/react/forms/Switch";
import Popup from "reactjs-popup";
import "../css/PopupComponent.css";
import Button from "./Button";
import Selectors from "./Selectors";
import { useState } from "react";

export const PopupComponent = () => {
  const [addClick, isAddClick] = useState(false);
  return (
    <Popup
      trigger={<button className="button"> Open Modal </button>}
      modal
      nested
    >
      {
        <div className="modal">
          <button
            className="close"
            onClick={() => {
              // eslint-disable-next-line no-restricted-globals
              close();
            }}
          >
            &times;
          </button>
          <div className="header"> Query Builder </div>
          <div className="content">
            <div className="noFilter">No filters applied</div>
            <div className="addIcon">
              <i className="icon icon--Add"></i>
              Add Filter
            </div>
          </div>
          <div>{<Selectors />}</div>
          <div className="separator"></div>
          <div className="actions">
            <div className="switchers">
              <Switch
                value={true}
                className="filter-persist"
                label="Disable all"
                onChange={() => null}
              />
              <Switch
                value={true}
                className="filter-persist"
                label="Persist filters"
                onChange={() => null}
              />
            </div>
            <div className="advanceButton">
              <Button text="Advanced" />
            </div>
          </div>
        </div>
      }
    </Popup>
  );
};
