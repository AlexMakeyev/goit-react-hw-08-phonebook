import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
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
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
      };
   
    
      render() {

        return (
        <Formik 
                initialValues={initialValues} 
                onSubmit ={this.handleSubmit} 
                validationSchema={schema}>
            <Form >
                <label>Name
                    <Field
                        type="text"
                        name="name"
                        
                        />
                        <ErrorMessage component="div" name="name" />
                    
                </label>

                <label>Number
                    <Field
                        type="tel"
                        name="number"
                        
                        />
                        <ErrorMessage component="div" name="number" />
                </label>
                <button type="submit">Add contact</button>
            </Form>
        
    
    
        </Formik>)
      }
};
