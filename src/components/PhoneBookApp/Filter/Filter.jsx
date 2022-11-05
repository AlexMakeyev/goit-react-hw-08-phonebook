import React from 'react';
import { setFilter } from 'redux/filterSlice';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { FilterList, FilterTitle, FilterInput } from './Filter.styled';

const Filter = ({ filter }) => {
  const dispatch = useDispatch();
  const onChangeFilter = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };
  const filterID = nanoid();

  return (
    <FilterList>
      <FilterTitle htmlFor={filterID}>Find contact by name</FilterTitle>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      ></FilterInput>
    </FilterList>
  );
};

export default Filter;

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
