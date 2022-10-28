import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/items/items-slice';
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
//     })
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };
//   return (
//     <ContactList>
//       {contacts.map(({ name, number, id }) => (
//         <ContactsItem
//           key={id}
//           id={id}
//           name={name}
//           number={number}
//           deleteBtn={onDelete}
//         />
//       ))}
//     </ContactList>
//   );
// };

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ),
//   onDelete: PropTypes.func.isRequired,
// };
