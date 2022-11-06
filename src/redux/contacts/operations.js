import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/api/Api';

const haveDuplicates = ({ name, number }, contacts) => {
    const result = contacts.some(
      contact => contact.name === name && contact.number === number
    );
    return Boolean(result);
  };

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkApi) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (haveDuplicates(data, contacts.items)) {
        return alert(`${data.name} - ${data.number} is already exist`);
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);