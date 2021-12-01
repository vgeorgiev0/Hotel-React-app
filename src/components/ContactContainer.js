// import React, { useRef, useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import emailjs from 'emailjs-com';
// // import axios from 'axios';
// // import ReCAPTCHA from 'react-google-recaptcha';

// const ContactContainer = () => {
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [name, setName] = useState('');

//   const [message, setMessage] = useState('');

//   const [emailErr, setEmailErr] = useState(false);
//   const [phoneErr, setPhoneErr] = useState(false);
//   const form = useRef();

//   const validEmail = new RegExp(
//     '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
//   );
//   const validPhoneNumber = new RegExp(
//     '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'
//   );

//   const validate = () => {
//     if (!validEmail.test(email)) {
//       setEmailErr(true);
//     }
//     if (!validPhoneNumber.test(phone)) {
//       setPhoneErr(true);
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // eslint-disable-next-line no-console
//     console.log({
//       name: data.get('name'),
//       email: data.get('email'),
//       message: data.get('message'),
//       phone: data.get('tel'),
//     });
//     // emailjs
//     //   .sendForm(
//     //     'service_sm8euqc',
//     //     'template_ptw2yva',
//     //     form.current,
//     //     'user_75ark42trFqSYlJvDbd5v'
//     //   )
//     //   .then(
//     //     (result) => {
//     //       console.log(result.text);
//     //     },
//     //     (error) => {
//     //       console.log(error.text);
//     //     }
//     //   );
//   };

//   return (
//     <Container component='main' maxWidth='xs'>
//       <CssBaseline />
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Title title={contactTitle} />
//         <Avatar sx={{ width: 80, height: 80, m: 0, bgcolor: 'secondary.main' }}>
//           <ContactLogo />
//         </Avatar>
//         <Box
//           component='form'
//           ref={form}
//           onSubmit={handleSubmit}
//           noValidate
//           sx={{ mt: 2 }}
//         >
//           <TextField
//             margin='normal'
//             required
//             fullWidth
//             name='name'
//             label={contactName}
//             type='name'
//             id='name'
//           />
//           <TextField
//             margin='normal'
//             fullWidth
//             id='email'
//             label={contactEmail}
//             name='email'
//             autoComplete='email'
//             error
//             helperText='Please enter a valid Email'
//             onChange={setEmail}
//           />
//           <TextField
//             margin='normal'
//             required
//             fullWidth
//             name='message'
//             label={contactMessage}
//             type='message'
//             id='message'
//             multiline
//           />
//           <TextField
//             margin='normal'
//             required
//             fullWidth
//             name='tel'
//             label={tel}
//             type='tel'
//             id='tel'
//             onChange={setPhone}
//           />
//           <Button
//             className='btn-primary'
//             type='submit'
//             fullWidth
//             variant='outlined'
//             sx={{ mt: 5, mb: 5 }}
//           >
//             {submitBtn}
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };
// export default ContactContainer;

import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import { Button } from '@mui/material';
import { Trans } from 'react-i18next';
import swal from 'sweetalert';
import { useForm } from 'react-hook-form';
import Title from './Title';

export default function ContactContainer() {
  const contactTitle = <Trans i18nKey='contactTitle'></Trans>;
  const contactName = <Trans i18nKey='contactName'></Trans>;
  const contactEmail = <Trans i18nKey='contactEmail'></Trans>;
  const contactMessage = <Trans i18nKey='contactMessage'></Trans>;
  const tel = <Trans i18nKey='phone'></Trans>;
  const submitBtn = <Trans i18nKey='submitBtn'></Trans>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password === data.confirmpassword) {
      swal(
        'Good job!',
        'Your data has been successfully registered!',
        'success'
      );
    } else {
      swal('Good job!', 'Please Check Your Password!', 'error');
    }
    console.log(data);
  };

  return (
    <div>
      <div sx={{ minWidth: 275 }} className='container'>
        <div className='wrapper'>
          <section className='columns'>
            <div className='column'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Title title={contactTitle} />
                <TextField
                  id='input-with-icon-textfield'
                  label={contactName}
                  type='text'
                  className='input'
                  style={{ marginBottom: '3px' }}
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
                  style={{ marginBottom: '3px' }}
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
                  id='input-with-icon-textfield'
                  label={tel}
                  type='text'
                  className='input'
                  style={{ marginBottom: '3px' }}
                  {...register('contactNumber', {
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
                  id='input-with-icon-textfield'
                  label={contactMessage}
                  type='text'
                  multiline
                  className='input'
                  style={{ marginBottom: '3px' }}
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

                <div className='form-button'>
                  <Button
                    variant='contained'
                    className='form-submit'
                    type='submit'
                  >
                    {submitBtn}
                  </Button>
                </div>
              </form>
            </div>
            <div className='column'></div>
          </section>
        </div>
      </div>
    </div>
  );
}
