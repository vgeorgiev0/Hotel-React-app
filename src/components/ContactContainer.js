import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import { Trans } from 'react-i18next';
import swal from 'sweetalert';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import Title from './Title';
import image from '../images/contact.jpg';

export default function ContactContainer() {
  const [enableButton, setEnableButton] = useState(true);
  const [recaptchaToken, setReCaptchaToken] = useState();
  const form = useRef();
  const reRef = useRef();
  const captchaKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  const contactTitle = <Trans i18nKey='contactTitle'></Trans>;
  const contactName = <Trans i18nKey='contactName'></Trans>;
  const contactEmail = <Trans i18nKey='contactEmail'></Trans>;
  const contactMessage = <Trans i18nKey='contactMessage'></Trans>;
  const tel = <Trans i18nKey='phone'></Trans>;
  const submitBtn = <Trans i18nKey='submitBtn'></Trans>;

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (
      data.name.length > 0 &&
      data.phone.length > 0 &&
      data.message.length > 0
    ) {
      swal(
        'Thank you!',
        'You have successfully sent a message. We will contact you soon.',
        'success'
      );
      setTimeout(function () {
        history.push('/');
      }, 1000);
      emailjs
        .sendForm(
          'service_sm8euqc',
          'template_ptw2yva',
          form.current,
          'user_75ark42trFqSYlJvDbd5v'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      swal('Oops..', 'Something went wrong', 'error');
    }
    reset({ name: '', email: '', phone: '', message: '' });
  };

  const updateRecaptchaToken = (token) => {
    setReCaptchaToken(token);
    setEnableButton(false);
    console.log(recaptchaToken);
  };

  return (
    <div>
      <div sx={{ minWidth: 320 }} className='container'>
        <div className='wrapper'>
          <section className='columns'>
            <div className='column'>
              <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                <Title title={contactTitle} />
                <TextField
                  id='name'
                  label={contactName}
                  type='text'
                  className='input'
                  style={{ marginBottom: '20px' }}
                  {...register('name', {
                    required: 'Name is Required',
                  })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  variant='standard'
                />
                <br />
                {errors.name && (
                  <span style={{ fontSize: 12, color: 'red' }}>
                    {errors.name.message}
                  </span>
                )}
                <TextField
                  id='input-with-icon-textfield'
                  label={contactEmail}
                  type='email'
                  className='input'
                  {...register('email', {
                    required: 'Email Address is Required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid Email Address',
                    },
                  })}
                  style={{ marginBottom: '20px' }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant='standard'
                />

                <TextField
                  id='phone'
                  label={tel}
                  type='tel'
                  className='input'
                  style={{ marginBottom: '20px' }}
                  {...register('phone', {
                    required: 'Contact Number is Required',
                    pattern: {
                      value:
                        /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                      message: 'Invalid Contact Number',
                    },
                  })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <PhoneIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant='standard'
                />
                <br />
                {errors.contactNumber && (
                  <span style={{ fontSize: 12, color: 'red' }}>
                    {errors.contactNumber.message}
                  </span>
                )}
                <TextField
                  id='message'
                  label={contactMessage}
                  type='text'
                  multiline
                  rows={2}
                  className='input'
                  style={{ marginBottom: '20px' }}
                  {...register('message', {
                    required: 'Message is Required',
                  })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <MessageIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant='standard'
                />
                <br />
                {errors.message && (
                  <span style={{ fontSize: 12, color: 'red' }}>
                    {errors.message.message}
                  </span>
                )}
                <ReCAPTCHA
                  className='captcha'
                  ref={reRef}
                  sitekey={captchaKey}
                  onChange={updateRecaptchaToken}
                />
                <div className='form-button'>
                  <Button
                    variant='outlined'
                    endIcon={<SendIcon />}
                    disabled={enableButton}
                    className='form-submit'
                    type='submit'
                  >
                    {submitBtn}
                  </Button>
                </div>
              </form>
            </div>
            <div className='column'>
              <center>
                <img src={image} alt='Contact Us' />
              </center>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
