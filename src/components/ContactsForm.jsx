import React from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'izitoast/dist/css/iziToast.min.css';
import toast from 'izitoast';
import css from './ContactsForm.module.css';
import * as Yup from 'yup';

const ContactsForm = () => {
    const dispatch = useDispatch();
    const initialValues = {
        name: '',
        number: '',
    };
    const handleSubmit = (values, actions) => {
        console.log(values);
        const newContact = {
            id: nanoid(),
            name: values.name.trim(),
            number: values.number.trim(),
        }
        dispatch(addContact(newContact));
        toast.success({
            title: 'Success',
            message: 'Contact added successfully!',
            position: 'topRight',
        });
        actions.resetForm();
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required!'),
        number: Yup.number().required('Number is required!'),
    })
    return (
        <div className={css.formContainer}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                <Form className={css.form}>
                    <Field name="name" placeholder="Name" />
                    <ErrorMessage name="name" component="div" className={css.error} />
                    <Field name="number" placeholder="Number" />
                    <ErrorMessage name="number" component="div" className={css.error} />
                    <button type="submit">Add Contact</button>
                </Form>
            </Formik>
        </div>
    )
}

export default ContactsForm;
