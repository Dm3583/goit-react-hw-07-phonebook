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

const error = createReducer(null, {
  [addContactRequest]: () => null,
  [addContactSuccess]: () => null,
  [addContactError]: (_, { payload }) => payload,
  [fetchContactsRequest]: () => null,
  [fetchContactsSuccess]: () => null,
  [fetchContactsError]: (_, { payload }) => payload,
  [deleteContactRequest]: () => null,
  [deleteContactSuccess]: () => null,
  [deleteContactError]: (_, { payload }) => payload,
});

const loader = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
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
  error,
});
