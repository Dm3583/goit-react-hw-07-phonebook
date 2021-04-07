import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';
import './ContactForm.scss';
import { contactsOperations, contactsSelectors } from '../../redux/phonebook';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  state = {
    ...INITIAL_STATE,
  };

  handleInput = e => {
    const stateField = e.target.name;
    this.setState({ [stateField]: e.target.value });
  };

  isNameExist = (contacts, name) => {
    const normalizedName = name.toLowerCase();
    return contacts.find(
      contact => contact.name.toLowerCase() === normalizedName,
    );
  };

  createContact = (name, number) => {
    return {
      id: uuid(),
      name,
      number,
    };
  };

  handleSubmit = e => {
    e.preventDefault();
    const { allContacts, addContact } = this.props;
    const { name, number } = this.state;

    if (!name || !number) {
      alert(`Complete the form please`);
      return;
    }

    if (!this.isNameExist(allContacts, name)) {
      const contact = this.createContact(name, number);
      addContact(contact);
    } else {
      alert(`${name} is already in contacts`);
    }

    this.clearInput();
  };

  clearInput = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    const { handleInput, handleSubmit } = this;

    return (
      <form onSubmit={handleSubmit} className="ContactForm">
        <label>
          <p className="ContactForm__label">Name</p>
          <input
            className="ContactForm__text-input"
            type="text"
            value={name}
            onChange={handleInput}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>{' '}
        <label>
          <p className="ContactForm__label">Number</p>
          <input
            className="ContactForm__text-input"
            type="tel"
            value={number}
            onChange={handleInput}
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>
        <div className="ContactForm__btnWrapper">
          <button className="ContactForm__btn" type="submit">
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  allContacts: contactsSelectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(contactsOperations.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
