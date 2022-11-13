import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { FaBlenderPhone } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from 'shared/hooks/useAuth';
import ButtonAppBarUser from 'components/ButtonAppBar/ButtonAppBarUser';

export default function ButtonAppBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const toSignIn = location.state?.from ?? '/register';
  const signIn = () => navigate(toSignIn);
  const toLogIn = location.state?.from ?? '/login';
  const logIn = () => navigate(toLogIn);
  const goHome = location.state?.from ?? '/';
  const goBack = () => navigate(goHome);
  const isLogin = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={goBack}
          >
            <FaBlenderPhone />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PhoneBook
          </Typography>
          {!isLogin && (
            <Button onClick={signIn} color="inherit">
              SignUp
            </Button>
          )}
          {!isLogin && (
            <Button onClick={logIn} color="inherit">
              Login
            </Button>
          )}
          {isLogin && <ButtonAppBarUser />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
