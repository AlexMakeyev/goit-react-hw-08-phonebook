import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import fields from './fields';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  const onInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
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
  const onLogin = data => {
    const action = login(data);
    dispatch(action);
  };
  const onSubmitForm = event => {
    event.preventDefault();
    onLogin({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor={emailId}>
          Email:
          <input
            id={emailId}
            value={email}
            onChange={onInputChange}
            {...fields.email}
          />
        </label>
        <label htmlFor={passwordId}>
          Password:
          <input
            id={passwordId}
            value={password}
            onChange={onInputChange}
            {...fields.password}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
