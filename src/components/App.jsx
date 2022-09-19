import React from "react";
import { Form } from "./Form/Form";

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
    
  };

  submitHandler = data =>{
    console.log(data);

  }
    


  render() {

    return (<div>
      <h1>Phonebook</h1>
      <Form submit ={this.submitHandler} />
      <h2>Contacts</h2>
      



    </div>)
  }
};
