import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

const fetchContacts = () => {
  return axios
    .get('/contacts')
    .then(response => response.data)
    .catch(error => error);
};

const postContact = contact => {
  return axios
    .post('/contacts', contact)
    .then(({ data }) => data)
    .catch(error => error);
};

const deleteContact = contactId => {
  return axios
    .delete(`/contacts/${contactId}`)
    .then(({ data }) => data)
    .catch(error => error);
};

export default {
  fetchContacts,
  postContact,
  deleteContact,
};
