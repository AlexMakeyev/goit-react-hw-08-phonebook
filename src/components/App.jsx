
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { AppStyled, Title, SubTitle } from './App.styled';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
export const App = () => {
  
  const [contacts, setContacts] = useState(() => {
    const value = JSON.parse(localStorage.getItem("contacts"));
    return value ?? [];
  });
  const [filter, setFilter] = useState('');



  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    return () => {
      localStorage.removeItem("contacts");
    }
  }, [])

  const addContact = contact => {
    if (haveDuplicates(contact)) {
      return alert(`${contact.name} is already in contacts`);
    }
    setContacts((prev) => {
      const newContact = {
        id: nanoid(10),
        ...contact,
      };
      return [...prev, newContact];
    });
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((item) => item.id !== id);
      return setContacts(newContacts);
  };
  



  const haveDuplicates = ({ name, number }) => {
    const result = contacts.some(
      contact => contact.name === name && contact.number === number
    );
    return result;
  };

  const onChangeFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };
  const filteredContacts = getFilteredContacts();

  return (
    <AppStyled>
      <Title>Phonebook</Title>
      <Form onSubmit={addContact} />
      <SubTitle>Contacts</SubTitle>
      <Filter  value={filter} onChange={onChangeFilter} />
      <Contacts contacts={filteredContacts} onDelete={deleteContact} />
    </AppStyled>
  );
};

