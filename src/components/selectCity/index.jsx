import React from 'react';

import { cities } from '../../utils/cities';

const SelectCity = ({ actualCity, onChange }) => {
  const handleChange = (props) => {
    onChange(props.target.value);
  };

  return (
    <div className="select-wrapper">
      <select
        className="select"
        name="cityselect"
        id="cityselect"
        value={actualCity}
        onChange={handleChange}
      >
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCity;
