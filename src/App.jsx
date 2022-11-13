import UserRoutes from './UserRoutes';
import { current } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getLoadingUserStatus } from 'redux/auth/authSelector';
import ButtonAppBar from 'components/ButtonAppBar/ButtonAppBar';
import CircularProgress from '@mui/material/CircularProgress';

const App = () => {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(getLoadingUserStatus);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <div>
      {isLoadingUser ? (
        <CircularProgress />
      ) : (
        <>
          <ButtonAppBar />
          <UserRoutes />
        </>
      )}
    </div>
  );
};
export default App;
