import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { AppStyled, Title, SubTitle } from './PhoneBook.styled.jsx';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import { getFilter } from 'redux/filterSlice';
import { getFilteredContacts, getState } from 'redux/contactsSelector';

export const App = () => {
  const contacts = useSelector(getFilteredContacts);
  const { isLoading, error } = useSelector(getState);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const haveDuplicates = ({ name, number }) => {
  //   const result = contacts.some(
  //     contact => contact.name === name && contact.number === number
  //   );
  //   return result;
  // };

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
      <Form />
      <SubTitle>Contacts</SubTitle>
      <Filter filter={filter} />
      <Contacts items={contacts} />
      {isLoading && <p>...loading</p>}
      {error && <p>oops, something went wrong</p>}
    </AppStyled>
  );
};
