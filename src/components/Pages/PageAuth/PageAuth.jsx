import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {getSecret} from '../../../api/auth';
import {setSecret} from '../../../store/secret/action';

export const PageAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const secret = getSecret();
    if (secret) {
      dispatch(setSecret(secret));
    }
  }, [dispatch]);

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  });
};
