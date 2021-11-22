import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox (props) {
  const [isChecked, setChecked] = React.useState(false);
  function onChange(event) {
    props.onCheckboxToggle(!isChecked);
    setChecked(event.target.checked);
  }

  return (
    <div className="checkbox">
      <label className="checkbox__container">
        <input
          className="checkbox__input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChange(e)}
        />
        <span className="checkbox__slider" />
      </label>
      <p className="checkbox__text">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;