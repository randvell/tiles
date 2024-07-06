import {configureStore} from '@reduxjs/toolkit';
import secretReducer from './secret/reducer';
import authReducer from './auth/reducer';
import tokenReducer from './token/reducer';
import photosReducer from './photos/reducer';

const store = configureStore({
  reducer: {
    secret: secretReducer,
    token: tokenReducer,
    auth: authReducer,
    photos: photosReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
