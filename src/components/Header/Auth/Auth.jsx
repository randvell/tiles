// import style from './Auth.module.css';

import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchAuth} from '../../../store/auth/action';
import {authString} from '../../../api/auth';

export const Auth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    if (auth.status === 'idle' && token.value) {
      dispatch(fetchAuth());
    }
  }, [dispatch, auth.status, token.value]);

  if (auth.status === 'idle') {
    return (
      <div>
        <a href={authString}>Login</a>
      </div>
    );
  }
  if (auth.status === 'loading') {
    return <div>Loading...</div>;
  }

  if (auth.status === 'failed') {
    return <div>Error: {auth.error}</div>;
  }

  return (
    <div>
      <span>{auth.data.name}</span>
      <img src={auth.data.profile_image.small}></img>
    </div>
  );
};
