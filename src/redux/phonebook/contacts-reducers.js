import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

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
  [actions.addContact]: (state, { payload }) => addContact(state, payload),
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
