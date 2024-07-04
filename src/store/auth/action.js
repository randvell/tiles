import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from '../../api/const';

export const fetchAuth = createAsyncThunk(
  'user/fetchMe',
  async (_, {getState, rejectWithValue}) => {
    const state = getState();
    const token = state.token.value;
    if (!token) {
      rejectWithValue('Client code not found');
    }

    const response = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);
