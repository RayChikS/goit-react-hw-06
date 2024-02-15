import { setFilter } from './actions';

const initialState = {
  filter: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case setFilter:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
