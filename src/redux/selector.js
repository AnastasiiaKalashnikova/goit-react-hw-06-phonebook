export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.text.name.toLowerCase().includes(filter.toLowerCase())
  );
};
