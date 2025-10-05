import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import toast from 'izitoast';
import css from './Contact.module.css';

const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
        toast.info({
            title: 'Deleted',
            message: 'Contact deleted!',
            position: 'topRight',
        });
    };
    if (!contact) {
        return null;
    }
    return (
        <div className={css.contact}>
            {/* // react icon ekle */}
            <span className={css.contactName}>{contact.name}: {contact.number}</span>
            <button onClick={handleDelete} className={css.button}>Delete</button>
        </div>
    )
}

export default Contact
