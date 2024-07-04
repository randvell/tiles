import {SET_SECRET} from './action';

const initialState = {
  value: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SECRET:
      return {
        ...state,
        value: action.secret,
      };
    default:
      return state;
  }
};

export default reducer;
