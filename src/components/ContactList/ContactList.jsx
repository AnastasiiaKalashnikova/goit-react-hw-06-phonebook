import { useDispatch } from 'react-redux';
import { ContactItem, DeleteBtn } from './ContactList.styled';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = ({ list }) => {
  const dispatch = useDispatch();
  return (
    <ul>
      {list.map(contact => (
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
