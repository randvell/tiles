import {configureStore} from '@reduxjs/toolkit';
import secretReducer from './secret/reducer';
import authReducer from './auth/reducer';
import tokenReducer from './token/reducer';

const store = configureStore({
  reducer: {
    secret: secretReducer,
    token: tokenReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
