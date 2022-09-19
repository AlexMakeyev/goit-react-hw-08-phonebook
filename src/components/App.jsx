import React from "react";
import { Form } from "./Form/Form";

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
    


  render() {

    return (<div>
      <h1>Phonebook</h1>
      <Form submit ={this.submitHandler} />
      <h2>Contacts</h2>
      



    </div>)
  }
};
