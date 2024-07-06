import {resetToken} from '../store/token/reducer';
import {AxiosError} from 'axios';

export const handleResponseError = (e, dispatch) => {
  if (!(e instanceof AxiosError)) {
    return null;
  }

  const response = e.response;
  const errors = response.data.errors;

  if (errors && errors.includes('OAuth error: The access token is invalid')) {
    dispatch(resetToken());
    return {error: {message: 'OAuth error: The access token is invalid'}};
  }

  return {error: {message: e.message}};
};
