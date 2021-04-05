import React from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactsList from './ContactsList';

// localStorage.setItem(
//   'contacts',
//   JSON.stringify([
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ]),
// );
// localStorage.removeItem('contacts')

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
