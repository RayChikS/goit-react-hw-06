import { nanoid } from 'nanoid';

export const addContact = (text, phone) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      text,
      phone,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const setFilter = value => {
  return {
    type: 'filters/setFilter',
    payload: value,
  };
};
