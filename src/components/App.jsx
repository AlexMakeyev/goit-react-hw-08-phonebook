import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { AppStyled, Title, SubTitle } from './App.styled';
// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from 'redux/contacts/items/items-slice';
import { setFilter } from 'redux/contacts/filter/filter-slice';
import { getFilter } from 'redux/contacts/filter/filter-selectors';
import { getFilteredContacts } from 'redux/contacts/items/items-selectors';

export const App = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  // const [contacts, setContacts] = useState(() => {
  //   const value = JSON.parse(localStorage.getItem('contacts'));
  //   return value ?? [];
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const onAddContact = contact => {
    if (haveDuplicates(contact)) {
      return alert(`${contact.name} is already in contacts`);
    }
    const action = addContact(contact);
    dispatch(action);
    // setContacts(prev => {
    //   const newContact = {
    //     id: nanoid(10),
    //     ...contact,
    //   };
    //   return [...prev, newContact];
    // });
  };

  const onDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
    // const newContacts = contacts.filter(item => item.id !== id);
    // return setContacts(newContacts);
  };

  const haveDuplicates = ({ name, number }) => {
    const result = contacts.some(
      contact => contact.name === name && contact.number === number
    );
    return result;
  };

  const onChangeFilter = event => {
    const { value } = event.target;
    dispatch(setFilter(value));

    // setFilter(value);
  };

  // const getFilteredContacts = () => {
  //   if (!filter) {
  //     return contacts;
  //   }

  //   const normalizedFilter = filter.toLowerCase();
  //   const visibleContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  //   return visibleContacts;
  // };
  // const filteredContacts = getFilteredContacts();

  return (
    <AppStyled>
      <Title>Phonebook</Title>
      <Form onSubmit={onAddContact} />
      <SubTitle>Contacts</SubTitle>
      <Filter value={filter} onChange={onChangeFilter} />
      <Contacts items={contacts} onDelete={onDeleteContact} />
    </AppStyled>
  );
};
