import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_xefkf2p', 'template_6ijbul9', form.current, {
          publicKey: 'xE4xaewGCD7dTintw',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
      <form ref={form} onSubmit={sendEmail} className='text-black flex flex-col w-3/4 mb-10 max-w-[600px]'>
        <label className='text-white text-lg'>Imię:</label>
        <input type="text" name="user_name" className='bg-white p-2' placeholder='Twoje imię'/>
        <label className='text-white text-lg'>Email</label>
        <input type="email" name="user_email" className='bg-white p-2' placeholder='Twój email'/>
        <label className='text-white text-lg'>Wiadomość</label>
        <textarea name="message" className='bg-white p-2' placeholder='Treść wiadomości' rows={5}/>
        <input type="submit" value="Send" className='bg-green-400 hover:bg-green-700 text-white p-5'/>
      </form>
    );
  };

export default Form;