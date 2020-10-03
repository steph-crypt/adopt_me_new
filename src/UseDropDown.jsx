import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase}`;

  return (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        placeholder="State"
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={options.length === 0}
      >
        <options>All</options>
        {options.map((item) => {
          <option key={item} value={item}>
            {item}
          </option>;
        })}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
