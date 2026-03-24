import { appAxios } from '@/api/axios';
import Button from '@/common/Button';
import LabelInput from '@/common/LabelInput/LabelInput';
import TextArea from '@/common/TextArea/TextArea';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

interface FormValues {
  source: string;
  fullName: string;
  content: string;
  phoneNumber: string;
  email: string;
  loading: boolean;
}

// Regex for basic phone number validation (supports formats like +1234567890, 123-456-7890, etc.)
const phoneRegExp = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  fullName: yup.string().required('Please enter your full name.'),
  email: yup
    .string()
    .email('Please enter a valid email address.')
    .required('Your email is required so we can get back to you.'),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Please enter a valid phone number.')
    .required('A phone number is required.'),
  content: yup.string().required('Please tell us your feedback.'),
});

const FeedbackForm = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      content: '',
      source: 'web',
      loading: false,
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true);
        const response = await appAxios.post('/feedback/new', values);
        sendFeedback(response.data?.message || 'Feedback submitted successfully!', 'success');
        resetForm();
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    // Use flexbox with gap for consistent spacing and better responsiveness.
    <form
      className='w-full flex flex-col gap-6'
      onSubmit={formik.handleSubmit}
      noValidate // Disable native browser validation to rely solely on Formik/Yup
    >
      <LabelInput
        formik={formik}
        name='fullName'
        label='Full Name'
        placeholder='John Doe'
      />
      <LabelInput
        formik={formik}
        name='email'
        label='Email Address'
        type='email'
        placeholder='you@example.com'
      />
      <LabelInput
        formik={formik}
        name='phoneNumber'
        label='Phone Number'
        type='tel'
        placeholder='+1 (555) 123-4567'
      />

      <TextArea
        formik={formik}
        name='content'
        label='Your Feedback'
        placeholder='Write your feedback here...'
        rows={8} // Slightly reduced rows
      />

      <Button
        type='submit'
        className='mt-4 w-full sm:w-auto sm:self-start' // Responsive width and alignment
        loading={formik.isSubmitting}
      >
        Submit Feedback
      </Button>
    </form>
  );
};

export default FeedbackForm;
