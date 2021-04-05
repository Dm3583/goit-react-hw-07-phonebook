import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

const {
  changeFilter,
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} = actions;

const addContact = (contactsList, contactToAdd) => {
  const { name } = contactToAdd;
  if (
    contactsList.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    )
  ) {
    alert(`${name} is already in contacts`);
    return contactsList;
  } else {
    return [...contactsList, contactToAdd];
  }
};

const items = createReducer([], {
  [addContactSuccess]: (state, { payload }) => addContact(state, payload),
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [fetchContactsSuccess]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loader = createReducer(false, {
  [addContactSuccess]: () => false,
  [addContactRequest]: () => true,
  [addContactError]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loader,
});
