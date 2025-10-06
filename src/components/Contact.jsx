import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/operations';
import toast from 'izitoast';
import css from './Contact.module.css';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';

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
            <div className={css.contactInfo}>
                <span className={css.contactName}><FaUser /> {contact.name}: </span>
                <span className={css.contactPhone}><FaPhoneAlt /> {contact.number}</span>
            </div>
            <button onClick={handleDelete} className={css.button}>Delete</button>
        </div>
    )
}

export default Contact
