import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { AppStyled, Title, SubTitle } from './PhoneBook.styled.jsx.jsx';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

import { getFilter } from 'redux/filter/filterSlice';
import { getFilteredContacts, getState } from 'redux/contacts/contactsSelector';

export const PhoneBook = () => {
  const contacts = useSelector(getFilteredContacts);
  const { isLoading, error } = useSelector(getState);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppStyled>
      <div>
        <Title>Phonebook</Title>
        <Form />
      </div>
      <div>
        <SubTitle>Contacts</SubTitle>
        <Filter filter={filter} />
        <Contacts items={contacts} />
        {isLoading && <p>...loading</p>}
        {error && <p>oops, something went wrong</p>}
      </div>
    </AppStyled>
  );
};
