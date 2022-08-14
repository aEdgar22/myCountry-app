import React from "react";

export const SearchSelect = ({ setRegion }) => {

  const selectHandler = (e) => {
    const regionName = e.target.value;
    setRegion(regionName);
  };

  return (
    <select defaultValue={'DEFAULT'} className="searchSelect__select-region" onChange={selectHandler}>
      <option value="DEFAULT" disabled className="option">Filter by Region</option>
      <option className="option" value="africa">
        Africa
      </option>
      <option className="option" value="america">
        America
      </option>
      <option className="option" value="asia">
        Asia
      </option>
      <option className="option" value="europe">
        Europa
      </option>
      <option className="option" value="oceania">
        Oceania
      </option>
    </select>
  );
};
