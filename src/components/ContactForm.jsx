import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/actions';

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function ContactForm() {
  const userNameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.username,
      number: values.phone,
    };

    dispatch(addContact(newContact.name, newContact.number));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: '',
        phone: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={userNameId}>Name</label>
        <Field
          className={css.field}
          type="text"
          name="username"
          id={userNameId}
        />

        <label htmlFor={numberId}>Number</label>
        <Field className={css.field} type="phone" name="phone" id={numberId} />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
