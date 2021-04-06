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

const items = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [fetchContactsSuccess]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items,
  filter,
});

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

export const loader = createReducer(false, {
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
