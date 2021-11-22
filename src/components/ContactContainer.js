import React, { useState, useRef } from 'react';
import { Trans } from 'react-i18next';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// import axios from 'axios';
// import ReCAPTCHA from 'react-google-recaptcha';

const ContactContainer = () => {
  //   const formId = 'wJqjZePy';
  //   const formSparkUrl = `https://submit-form.com/${formId}`;
  //   const recaptchaKey = '6LfZEkYdAAAAAPadUetEhIjSUuFkToh7AKvKFmWI';
  //   const recaptchaRef = useRef;

  //   const initialFormState = {
  //     email: '',
  //     name: '',
  //     message: '',
  //   };

  //   const [formState, setFormState] = useState(initialFormState);
  //   const [submitting, setSubmitting] = useState(false);
  //   const [message, setMessage] = useState('');
  //   const [recaptchaToken, setReCaptchaToken] = useState('');

  //   const submitForm = async (event) => {
  //     event.preventDefault();
  //     setSubmitting(true);
  //     await postSubmission();
  //     setSubmitting(false);
  //   };

  //   const postSubmission = async () => {
  //     const payload = {
  //       ...formState,
  //       'g-recaptcha-response': recaptchaToken,
  //     };

  //     try {
  //       const result = await axios.post(formSparkUrl, payload);
  //       console.log(result);
  //       setMessage({
  //         class: 'bg-green-500',
  //         text: 'Thanks, someone will be in touch shortly.',
  //       });
  //       setFormState(initialFormState);
  //       recaptchaRef.current.reset();
  //     } catch (error) {
  //       console.log(error);
  //       setMessage({
  //         class: 'bg-red-500',
  //         text: 'Sorry, there was a problem. Please try again or contact support.',
  //       });
  //     }
  //   };

  //   const updateFormControl = (event) => {
  //     const { id, value } = event.target;
  //     const key = id;
  //     const updatedFormState = { ...formState };
  //     updatedFormState[key] = value;
  //     setFormState(updatedFormState);
  //   };

  //   const updateRecaptchaToken = (token) => {
  //     setReCaptchaToken(token);
  //   };
  const contactTitle = <Trans i18nKey='contactTitle'></Trans>;
  const contactName = <Trans i18nKey='contactName'></Trans>;
  const contactEmail = <Trans i18nKey='contactEmail'></Trans>;
  const contactMessage = <Trans i18nKey='contactMessage'></Trans>;
  const submitBtn = <Trans i18nKey='submitBtn'></Trans>;

  return (
    <div className='h-full flex justify-center flex-col p-8'>
      <div className=' w-2/3 m-auto p-8 shadow-lg'>
        <h1 className='text-4xl font-bold flex items-center'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='ml-4 h-12 transform rotate-45'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' />
            </svg>
          </span>
          <span>{contactTitle}</span>
        </h1>

        <form className='flex flex-col  '>
          <div className='my-2 flex flex-col'>
            <label htmlFor='name'>{contactName}</label>
            <input className='border-2 p-2' type='text' id='name' />
          </div>
          <div className='my-2 flex flex-col'>
            <label htmlFor='email'>{contactEmail}</label>
            <input className='border-2 p-2' type='email' id='email' />
          </div>
          <div className='my-2 flex flex-col'>
            <PhoneInput country='rs' regions={'europe'} />
          </div>
          <div className='my-2 flex flex-col'>
            <label htmlFor='message'>{contactMessage}</label>
            <textarea className='border-2 p-2' id='message'></textarea>
          </div>

          <button className='mt-4 my-2 bg-blue-700 text-white w-full p-2 hover:bg-blue-900 transition-colors duration-200'>
            {submitBtn}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactContainer;
