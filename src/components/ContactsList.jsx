import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../redux/contactsSlice';
import Contact from './Contact';
import css from './ContactsList.module.css';
import { LuLoaderCircle } from 'react-icons/lu';
import { fetchContacts } from '../redux/operations';

const ContactsList = () => {
    const contacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector(state => state.contacts);
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={css.contactsList}>
            {isLoading ? (<LuLoaderCircle className={css.loader} />) : error ? (
                <p style={{ color: 'red' }}>Error: {error}</p>) : contacts.length > 0 ? (
                    <ul className={css.list}>
                        {contacts.map(contact => (
                            <li key={contact.id} className={css.listItem}>
                                <Contact contact={contact} />
                            </li>
                        ))}
                    </ul>) : (<p className={css.noContacts}>No contacts found.</p>
            )}
        </div>
    );
};

export default ContactsList;
