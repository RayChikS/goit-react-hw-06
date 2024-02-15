import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  contacts: [
    { id: 0, name: 'Hello', number: '323237137123' },
    { id: 1, name: 'Zero', number: '3425254654545' },
    { id: 3, name: 'Nero', number: '424242342424' },
  ],
  filters: {
    name: '',
  },
};

const rootReducer = (state = initialState, action) => {
  return state;
};

// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
