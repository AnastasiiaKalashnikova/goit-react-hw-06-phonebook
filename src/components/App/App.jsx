import { AddForm } from 'components/AddForm/AddForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Wrapper } from './App.styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selector';

//const savedContacts = window.localStorage.getItem('contactList');
const selectVisibleContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.text.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = selectVisibleContacts(contacts, filter);
  //const filteredContacts = useSelector(selectVisibleContacts);
  //console.log(filteredContacts);

  //const filteredContacts = contacts.filter(contact => {
  //  const arr = contact.name.toLowerCase().includes(filter.toLowerCase());
  //  return arr;
  //});

  //const addContact = contact => {
  //  //перевірка на наявність
  //  if (
  //     contacts.find(
  //      item => item.name.toLowerCase() === contact.name.toLowerCase()
  //     )
  //  ) {
  //    return alert(`${contact.name} is already in cintacts`);
  //  }
  //   //якщо контакту ще немає
  //   setContacts(prevState => [...prevState, { ...contact, id: nanoid() }]);
  // };

  //const deleteContact = contactId => {
  //  setContacts(prevState =>
  //    prevState.filter(contact => contact.id !== contactId)
  //  );
  //};

  //const toFilter = value => {
  //  setFilter(value);
  //};

  // useEffect(() => {
  //   if (savedContacts !== null) {
  //     setContacts(JSON.parse(savedContacts));
  //   }
  // }, []);

  // useEffect(() => {
  //   if (savedContacts.length !== contacts.length) {
  //     window.localStorage.setItem('contactList', JSON.stringify(contacts));
  //   }
  // }, [contacts]);

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
