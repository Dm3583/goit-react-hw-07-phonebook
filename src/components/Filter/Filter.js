import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/phonebook/contacts-actions';
import PropTypes from 'prop-types';
import './Filter.scss';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input
        className="Filter__input"
        type="text"
        onChange={onChange}
        name="filter"
        value={value}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
