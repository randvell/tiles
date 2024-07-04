import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {prepareTokenRequest} from '../../api/auth';

export const fetchAccessToken = createAsyncThunk(
  'auth/fetchAccessToken',
  async (_, {getState, rejectWithValue}) => {
    const state = getState();
    const code = state.secret.value;
    if (!code) {
      rejectWithValue('Client code not found');
    }

    const requestData = prepareTokenRequest();
    requestData.code = code;

    const response = await axios.post(
      'https://unsplash.com/oauth/token',
      requestData
    );

    const {access_token: accessToken} = response.data;
    localStorage.setItem('access_token', accessToken);

    return response.data;
  }
);
