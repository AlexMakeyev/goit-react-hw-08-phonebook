import React from 'react';
import PropTypes from 'prop-types';

export const ContactsItem = ({ id, name, number, deleteBtn }) => {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => deleteBtn(id)}>
        Delete
      </button>
    </li>
  );
};



ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteBtn: PropTypes.func.isRequired,
};