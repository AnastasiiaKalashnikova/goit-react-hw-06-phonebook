import { AddForm } from 'components/AddForm/AddForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Wrapper } from './App.styled';

const initialContactList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: initialContactList,
    filter: '',
  };

  componentDidMount() {
    const savedContacts = window.localStorage.getItem('contactList');
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }
  addContact = contact => {
    //перевірка на наявність
    if (
      this.state.contacts.find(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${contact.name} is already in cintacts`);
    }
    //якщо контакту ще немає
    this.setState(preventState => {
      return {
        contacts: [...preventState.contacts, { ...contact, id: nanoid() }],
      };
    });
  };

  toFilter = value => {
    this.setState({ filter: value });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      window.localStorage.setItem(
        'contactList',
        JSON.stringify(this.state.contacts)
      );
    }
  }

  render() {
    const { filter, contacts } = this.state;

    const filteredContacts = contacts.filter(contact => {
      const arr = contact.name.toLowerCase().includes(filter.toLowerCase());
      return arr;
    });

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <AddForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter toFilter={this.toFilter} />
        <ContactList list={filteredContacts} onDelete={this.deleteContact} />
      </Wrapper>
    );
  }
}
