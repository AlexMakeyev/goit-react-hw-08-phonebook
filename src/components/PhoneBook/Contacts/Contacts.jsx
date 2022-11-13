import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
// import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactList, Item } from './Contacts.styled';
import { FaTimes } from 'react-icons/fa';
import IconButton from '@mui/material/IconButton';

export const Contacts = ({ items }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  const elements = items.map(({ name, number, id }) => {
    return (
      <Item key={id}>
        {name}: {number}{' '}
        {/* <DeleteButton type="submit" onClick={() => onDeleteContact(id)}>
          Delete
        </DeleteButton> */}
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="logout"
          sx={{ mr: 2 }}
          onClick={() => onDeleteContact(id)}
        >
          <FaTimes />
        </IconButton>
      </Item>
    );
  });
  return <ContactList>{elements}</ContactList>;
};
// Contacts.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };
