import Contact from './Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';

const getVisibleTasks = (contacts, filter) => {
  switch (filter) {
    default:
      return contacts;
  }
};

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.filters.name);
  const visibleTasks = getVisibleTasks(contacts, filter);

  const filteredContacts = contacts.filter(contact =>
    contact.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Contact List</h2>
      <ul className={css.list}>
        {visibleTasks.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
