import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { nanoid } from 'nanoid';
import { LabelName, LabelPhone, ContactsForm, Container } from './Form.styled';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const onAddContact = contact => {
    const action = addContact(contact);
    dispatch(action);
  };
  const nameId = nanoid();
  const numberId = nanoid();

  const onInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmitForm = event => {
    event.preventDefault();
    onAddContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <ContactsForm onSubmit={onSubmitForm}>
        <LabelName htmlFor={nameId}>
          Name:
          <TextField
            variant="outlined"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onInputChange}
          />
        </LabelName>
        <LabelPhone htmlFor={numberId}>
          Number:
          <TextField
            variant="outlined"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onInputChange}
          />
        </LabelPhone>
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </ContactsForm>
    </Container>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};

// const initialValues = {
//     name: '',
//     number: '',

// };
// const schema = yup.object().shape({
//     name: yup.string().required(),
//     number: yup.number().required().positive().integer(),

// })
// export class FormPhone extends React.Component {

//     handleSubmit = (values, actions) => {

//         const id = nanoid(10);
//         const contact = {
//           id,
//           ...values,
//         };
//         this.props.submit(contact);
//         console.log(values);
//         console.log(actions);
//         actions.resetForm();

//     };
//     // static propTypes = {
//     //     onSubmit: PropTypes.func.isRequired,
//     //   };

//       render() {

//         return (<div>
//             <Formik
//                 initialValues={initialValues}
//                 onSubmit ={this.handleSubmit}
//                 validationSchema={schema}>
//             <ContactsForm >
//                 <LabelName>Name:
//                     <Input
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                         placeholder="Please enter name"
//                         autocomplete="off"
//                         />
//                         <Error component="div" name="name" />

//                 </LabelName>

//                 <LabelPhone>Number:
//                     <Input
//                         type="tel"
//                         name="number"
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                         placeholder="Please enter number"
//                         autocomplete="off"
//                         />
//                         <Error component="div" name="number" />
//                 </LabelPhone>
//                 <AddButton type="submit">Add contact
//                 </AddButton>
//             </ContactsForm>

//         </Formik>
//         </div>)

//       }
// };
