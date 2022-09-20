import React from "react";
import { Form } from "./Form/Form";
import { Contacts } from "./Contacts/Contacts";
import Filter from "./Filter/Filter";

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
    
  };

  submitHandler = data =>{
    this.setState(({ contacts }) => {
      if (!this.haveDuplicates(contacts, data)) {
        return { contacts: [data, ...contacts] };
      } else {
        alert(`${data.name} is already in contacts`);
      }
    });
  };
  haveDuplicates = (contacts, data) => {
    return contacts.some(contact => contact.name === data.name);
  };
  deleteContact = id => {
    const filteredContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState(() => {
      return { contacts: filteredContacts };
    });
  };

  onChangeFilter = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  returnFilteredContacts() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  }


  render() {

    return (<div>
      <h1>Phonebook</h1>
      <Form submit ={this.submitHandler} />
      <h2>Contacts</h2>
      <Filter value={this.state.filter} onChange={this.onChangeFilter} />
      <Contacts  contacts={this.returnFilteredContacts()}
          onDelete={this.deleteContact} />
      



      </div>)
  }
};
