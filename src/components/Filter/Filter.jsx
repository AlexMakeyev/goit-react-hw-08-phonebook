import React from 'react';
import PropTypes from 'prop-types';
import {FilterList, FilterTitle, FilterInput} from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterList>
      <FilterTitle>Find contact by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></FilterInput>
    </FilterList>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};