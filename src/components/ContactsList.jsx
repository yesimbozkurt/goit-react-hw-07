import React from 'react'
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/contactsSlice';
import Contact from './Contact';
import css from './ContactsList.module.css';
import { selectNameFilter } from '../redux/filtersSlice';
const ContactsList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const filteredContacts = contacts
        .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    return (
        <div className={css.contactsList}>
            <ul className={css.list}>
                {filteredContacts.map(contact => (
                    <li key={contact.id} className={css.listItem}>
                        <Contact contact={contact} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactsList
