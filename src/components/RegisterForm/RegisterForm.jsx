import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/operations';
import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import fields from './fields';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Form, Label, Container } from './RegisterForm.styled';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const nameId = useMemo(() => nanoid(), []);
  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  const onInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const onRegister = data => {
    const action = signup(data);
    dispatch(action);
  };
  const onSubmitForm = event => {
    event.preventDefault();
    onRegister({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Form onSubmit={onSubmitForm}>
        <Label htmlFor={nameId}>
          <TextField
            variant="outlined"
            id={nameId}
            value={name}
            onChange={onInputChange}
            {...fields.name}
          />
        </Label>
        <Label htmlFor={emailId}>
          <TextField
            variant="outlined"
            id={emailId}
            value={email}
            onChange={onInputChange}
            {...fields.email}
          />
        </Label>
        <Label htmlFor={passwordId}>
          <TextField
            variant="outlined"
            id={passwordId}
            value={password}
            onChange={onInputChange}
            {...fields.password}
          />
        </Label>
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}
