export const getContacts = store => store.contacts;
export const getFilteredContacts = ({ contacts }) => {
    const { items, filter } = contacts;
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  };