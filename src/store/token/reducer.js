import {createSlice} from '@reduxjs/toolkit';
import {fetchAccessToken} from './action';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    value: localStorage.getItem('access_token') || '',
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessToken.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAccessToken.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value = action.payload.access_token;
      })
      .addCase(fetchAccessToken.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default tokenSlice.reducer;
