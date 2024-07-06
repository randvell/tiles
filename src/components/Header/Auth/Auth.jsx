import style from './Auth.module.css';
import {ReactComponent as AuthError} from './img/user-error.svg';

import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchAuth} from '../../../store/auth/action';
import {authString} from '../../../api/auth';
import {ClipLoader} from 'react-spinners';

export const Auth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const token = useSelector((state) => state.token.value);

  useEffect(() => {
    if (auth.status === 'idle' && token) {
      dispatch(fetchAuth());
    }
  }, [dispatch, auth.status, token]);

  if (!token || auth.status === 'idle') {
    return (
      <div className={style.auth}>
        <a href={authString}>Login</a>
      </div>
    );
  }

  if (auth.status === 'loading') {
    return <ClipLoader size="30" />;
  }

  if (auth.status === 'failed') {
    return <AuthError className={style.profileImg} />;
  }

  return (
    <div className={style.auth}>
      <span className={style.username}>{auth.data.name}</span>
      <img
        className={style.profileImg}
        src={auth.data.profile_image.small}
      ></img>
    </div>
  );
};
