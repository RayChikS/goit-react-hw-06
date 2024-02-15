import { setFilter } from './actions';
import { combineReducers } from 'redux';

const contactsInitialState = [];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/deleteContact':
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};

const filtersInitialState = {
  filters: {
    name: '',
  },
};

export const filtersReducer = (state = filtersInitialState, action) => {
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

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
