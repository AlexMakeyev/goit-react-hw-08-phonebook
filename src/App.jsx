import UserRoutes from './UserRoutes';
import { current } from 'redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getLoadingUserStatus } from 'redux/auth/authSelector';
import ButtonAppBar from 'components/ButtonAppBar/ButtonAppBar';

const App = () => {
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(getLoadingUserStatus);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <div>
      {isLoadingUser ? (
        <p>Loading ...</p>
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
