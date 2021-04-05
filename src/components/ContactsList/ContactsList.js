import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/phonebook/contacts-actions';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import './ContactsList.scss';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul className="ContactsList">
      {contacts.map(contact => (
        <ListItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

const getFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  if (allContacts.length > 0) {
    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  } else {
    return allContacts;
  }
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
