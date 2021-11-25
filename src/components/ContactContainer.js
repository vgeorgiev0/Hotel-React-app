import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Trans } from 'react-i18next';
import Title from './Title';
// import axios from 'axios';
// import ReCAPTCHA from 'react-google-recaptcha';

const ContactLogo = () => {
  return (
    <span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='ml-4 h-12 transform rotate-45'
        viewBox='1 -2 22 23'
        fill='currentColor'
      >
        <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' />
      </svg>
    </span>
  );
};

const ContactContainer = () => {
  const [phoneInputValue, setPhoneInputValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
      phone: phoneInputValue,
    });
  };

  const contactTitle = <Trans i18nKey='contactTitle'></Trans>;
  const contactName = <Trans i18nKey='contactName'></Trans>;
  const contactEmail = <Trans i18nKey='contactEmail'></Trans>;
  const contactMessage = <Trans i18nKey='contactMessage'></Trans>;
  const submitBtn = <Trans i18nKey='submitBtn'></Trans>;

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Title title={contactTitle} />
        <Avatar sx={{ width: 80, height: 80, m: 3, bgcolor: 'secondary.main' }}>
          <ContactLogo />
        </Avatar>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            name='name'
            label={contactName}
            type='name'
            id='name'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label={contactEmail}
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='message'
            label={contactMessage}
            type='message'
            id='message'
            multiline
          />
          <PhoneInput
            country='rs'
            regions={'europe'}
            containerClass={'material'}
            margin='normal'
            required
            fullWidth
            value={phoneInputValue}
            enableSearch={true}
            onChange={setPhoneInputValue}
          />
          <Button
            className='btn-primary'
            type='submit'
            fullWidth
            variant='outlined'
            sx={{ mt: 5, mb: 5 }}
          >
            {submitBtn}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default ContactContainer;
