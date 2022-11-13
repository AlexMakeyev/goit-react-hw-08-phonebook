import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { getUser } from 'redux/auth/authSelector';
import { useNavigate, useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaSmile } from 'react-icons/fa';

export default function ButtonAppBarUser() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toContacts = location.state?.from ?? '/contacts';
  const toMyContacts = () => navigate(toContacts);
  const user = useSelector(getUser);

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logout"
        sx={{ mr: 2 }}
        onClick={toMyContacts}
      >
        <FaSmile color="inherit" size="30" />
      </IconButton>

      {'   '}
      {`Welcome, ${user.name}`}
      {'   '}
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logout"
        sx={{ mr: 2 }}
        onClick={onLogout}
      >
        <FaSignOutAlt />
      </IconButton>
    </div>
  );
}
