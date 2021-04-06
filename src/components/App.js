import React from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactsList from './ContactsList';

const App = () => (
  <div>
    <h1>Phonebook</h1>
    <ContactForm />
    <Filter />
    <h2>Contacts</h2>
    <ContactsList />
  </div>
);

export default App;
