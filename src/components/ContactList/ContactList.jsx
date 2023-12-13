import { ContactItem, DeleteBtn } from './ContactList.styled';

export const ContactList = ({ list, onDelete }) => {
  return (
    <ul>
      {list.map(contact => (
        <ContactItem key={contact.id} id={contact.id}>
          {contact.name}: {contact.number}
          <DeleteBtn type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </DeleteBtn>
        </ContactItem>
      ))}
    </ul>
  );
};
