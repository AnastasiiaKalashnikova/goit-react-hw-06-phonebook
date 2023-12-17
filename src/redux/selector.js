export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  return contacts.filter(contact =>
    contact.text.name.toLowerCase().includes(filter.toLowerCase())
  );
};
