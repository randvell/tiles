import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export const PageAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  });
};
