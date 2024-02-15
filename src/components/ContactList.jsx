import Contact from './Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';

export default function ContactList() {
  const contacts = useSelector(getContacts);

  return (
    <div>
      <h2>Contact List</h2>
      <ul className={css.list}>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
