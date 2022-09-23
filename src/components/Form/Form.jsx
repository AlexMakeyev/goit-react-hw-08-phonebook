import React from "react";
// import PropTypes from 'prop-types';
import{Input, LabelName, LabelPhone, ContactsForm, Error, AddButton } from './Form.styled'
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { Formik } from 'formik';
const initialValues = {
    name: '',
    number: '',

};
const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required().positive().integer(),

})
export class FormPhone extends React.Component {
   
    
    handleSubmit = (values, actions) => {
        
        const id = nanoid(10);
        const contact = {
          id,
          ...values,
        };
        this.props.submit(contact);
        console.log(values);
        console.log(actions);
        actions.resetForm();
        
        
      
    };
    // static propTypes = {
    //     onSubmit: PropTypes.func.isRequired,
    //   };
   
    
      render() {

        return (<div>
            <Formik 
                initialValues={initialValues} 
                onSubmit ={this.handleSubmit} 
                validationSchema={schema}>
            <ContactsForm >
                <LabelName>Name:
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        placeholder="Please enter name" 
                        autocomplete="off"
                        />
                        <Error component="div" name="name" />
                    
                </LabelName>

                <LabelPhone>Number:
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        placeholder="Please enter number" 
                        autocomplete="off"
                        />
                        <Error component="div" name="number" />
                </LabelPhone>
                <AddButton type="submit">Add contact
                </AddButton>
            </ContactsForm>
        
    
    
        </Formik>
        </div>)
        
      }
};
