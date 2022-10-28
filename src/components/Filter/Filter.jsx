import React from 'react';

import PropTypes from 'prop-types';
import { FilterList, FilterTitle, FilterInput } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <FilterList>
      <FilterTitle>Find contact by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      ></FilterInput>
    </FilterList>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
