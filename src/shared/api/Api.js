
import instance from './Auth';


export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/contacts', data);
  return result;
};

export const deleteContact = async contactId => {
  const { data } = await instance.delete(`/contacts/${contactId}`);
  return data;
};