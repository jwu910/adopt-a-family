import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
  return (
    <select name={props.name} placeholder={props.placeholder}>
      <option value="donator">Donator</option>
      <option value="family">Family</option>
      <option value="test" selected>Test</option>
      <option value="organizer">Organizer</option>
    </select>
  );
};

Select.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string
};

export default Select;