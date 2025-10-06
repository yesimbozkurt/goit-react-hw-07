import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../redux/contactsSlice';
import Contact from './Contact';
import css from './ContactsList.module.css';
import { LuLoaderCircle } from 'react-icons/lu';

const ContactsList = () => {
    const contacts = useSelector(selectFilteredContacts);
    const { isLoading } = useSelector(state => state.contacts);

    return (
        <div className={css.contactsList}>
            {isLoading && <LuLoaderCircle className='loader' />}
            <ul className={css.list}>
                {contacts.map(contact => (
                    <li key={contact.id} className={css.listItem}>
                        <Contact contact={contact} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactsList;
