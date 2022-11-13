import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { getUser } from 'redux/auth/authSelector';
import Button from '@mui/material/Button';

export default function ButtonAppBarUser() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  console.log(user.name);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {`Welcome, ${user.name}`}{' '}
      <Button onClick={onLogout} color="inherit">
        Logout
      </Button>
    </div>
  );
}
