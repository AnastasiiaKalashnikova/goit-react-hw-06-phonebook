import { AddForm } from 'components/AddForm/AddForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Wrapper } from './App.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selector';

const selectVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.text.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = selectVisibleContacts(contacts, filter);

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <AddForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList list={filteredContacts} />
    </Wrapper>
  );
};
