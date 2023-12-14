import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

//працює тільки в самому апі
export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
