import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
// import { ContactsItem } from 'components/ContactsItem/ContactsItem';
import { ContactList, Item, DeleteButton } from './Contacts.styled';
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
        <DeleteButton type="submit" onClick={() => onDeleteContact(id)}>
          Delete
        </DeleteButton>
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
