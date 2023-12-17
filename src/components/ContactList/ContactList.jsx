import { useDispatch } from 'react-redux';
import { ContactItem, DeleteBtn } from './ContactList.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  selectVisibleContacts,
} from '../../redux/selector';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = selectVisibleContacts(contacts, filter);
  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} id={contact.id}>
          {contact.text.name}: {contact.text.number}
          <DeleteBtn
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </DeleteBtn>
        </ContactItem>
      ))}
    </ul>
  );
};
