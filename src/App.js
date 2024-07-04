import {useDispatch, useSelector} from 'react-redux';
import Header from './components/Header';
import Main from './components/Main';
import {Route, Routes} from 'react-router-dom';
import {useEffect} from 'react';
import {fetchAccessToken} from './store/token/action';
import {getSecret} from './api/auth';
import {setSecret} from './store/secret/action';

function App() {
  const dispatch = useDispatch();
  const secret = useSelector((state) => state.secret.value);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    const secret = getSecret();
    if (secret) {
      dispatch(setSecret(secret));
    }
  }, [dispatch]);

  useEffect(() => {
    if (secret && token.status === 'idle') {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, secret, token.status]);

  return (
    <Routes>
      <Route
        path="*"
        element={
          <>
            <Header />
            <Main />
          </>
        }
      />
    </Routes>
  );
}

export default App;
