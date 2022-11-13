import React from 'react';
import { setFilter } from 'redux/filter/filterSlice';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
// import PropTypes from 'prop-types';
import { FilterList, FilterTitle } from './Filter.styled';

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
      <TextField
        variant="outlined"
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      ></TextField>
    </FilterList>
  );
};

export default Filter;

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
