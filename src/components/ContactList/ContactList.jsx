import { useDispatch, useSelector } from 'react-redux';
import { ContactsList } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';


export const ContactList = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter)

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ContactsList>
      {filteredContacts?.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ContactsList>
  );
};

