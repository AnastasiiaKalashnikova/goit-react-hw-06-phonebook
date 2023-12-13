import { Formik, Field, ErrorMessage } from 'formik';
import { AddBtn, StyledForm } from './AddForm.styled';
import * as Yup from 'yup';

const Schema = Yup.object().shape({
  name: Yup.string().min(2).required('must be filled'),
  number: Yup.number('not a number').required('must be filled'),
});

export const AddForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Schema}
      onSubmit={(value, actions) => {
        onSubmit(value);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label htmlFor="name">Name</label>
        <Field name="name" />
        <ErrorMessage name="name" />

        <label htmlFor="number">Number</label>
        <Field type="tel" name="number" />
        <ErrorMessage name="number" />

        <AddBtn type="submit">Add Contact</AddBtn>
      </StyledForm>
    </Formik>
  );
};
