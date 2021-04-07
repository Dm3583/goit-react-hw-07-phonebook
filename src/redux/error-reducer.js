import { createReducer } from '@reduxjs/toolkit';
import { contactsActions } from './phonebook';

const {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} = contactsActions;

export const error = createReducer(null, {
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
