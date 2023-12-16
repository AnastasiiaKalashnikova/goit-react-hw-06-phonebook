export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

//export const selectVisibleContacts = createSelector(
//  [selectContacts, selectFilter],
//  (contacts, filter) => {
//    console.log(contacts);
//    console.log(filter);
//    return contacts.filter(contact =>
//      contact.text.name.toLowerCase().includes(filter.toLowerCase())
//    );
//  }
//);
