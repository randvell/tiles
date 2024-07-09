import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API_URL} from '../../api/const';
import {handleResponseError} from '../../api/response';
import {clientId} from '../../api/auth';

export const fetchPhotos = createAsyncThunk(
  'photos/fetch',
  async (_, {getState, rejectWithValue, dispatch}) => {
    const state = getState();
    const token = state.token.value;

    const currentPage = state.photos.page;

    try {
      const response = await axios.get(
        `${API_URL}/photos?per_page=30&page=${currentPage + 1}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}}` : `Client-ID ${clientId}`,
          },
        }
      );

      return response.data;
    } catch (e) {
      const errorData = handleResponseError(e, dispatch);
      return rejectWithValue(errorData || {error: {message: e.toString()}});
    }
  }
);

export const changeLike = createAsyncThunk(
  'photos/like',
  async ({id, isLiked}, {getState, rejectWithValue, dispatch}) => {
    const state = getState();
    const token = state.token.value;
    if (!token) {
      return rejectWithValue('Token not found');
    }

    try {
      const method = isLiked ? 'post' : 'delete';
      const response = await axios({
        method,
        url: `${API_URL}/photos/${id}/like`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (e) {
      const errorData = handleResponseError(e, dispatch);
      return rejectWithValue(errorData || {error: {message: e.toString()}});
    }
  }
);
