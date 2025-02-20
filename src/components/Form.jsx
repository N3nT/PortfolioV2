import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();
    const [successStatus, setSuccessStatus] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputsChange = (setFunc, e) => {
        setFunc(e.target.value)
    }

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_xefkf2p', 'template_6ijbul9', form.current, {
          publicKey: 'xE4xaewGCD7dTintw',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setSuccessStatus(true);
            setName('');
            setEmail('');
            setMessage('');

            setTimeout(() => {
                setSuccessStatus(false);
              }, 3000);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
      <form ref={form} onSubmit={sendEmail} className='text-black flex flex-col w-3/4 mb-10 max-w-[600px]'>
        <label className='text-white text-lg'>Imię:</label>
        <input type="text" name="user_name" className='bg-white p-2' placeholder='Twoje imię' onChange={(e) => {handleInputsChange(setName, e)}} value={name}/>
        <label className='text-white text-lg'>Email</label>
        <input type="email" name="user_email" className='bg-white p-2' placeholder='Twój email' onChange={(e) => {handleInputsChange(setEmail, e)}} value={email}/>
        <label className='text-white text-lg'>Wiadomość</label>
        <textarea name="message" className='bg-white p-2' placeholder='Treść wiadomości' rows={5} onChange={(e) => {handleInputsChange(setMessage, e)}} value={message}/>
        <input type="submit" value="Send" className='bg-green-400 hover:bg-green-700 text-white p-5'/>
        {successStatus ? 
        (<div className='fixed top-10 -translate-x-1/2 left-1/2 bg-stone-950 w-80 h-20 z-10 border-4 border-green-400 rounded-xl text-center flex items-center justify-center animate-hiddeModal'>
            <p className='text-white text-xl'>Wiadomość wysłana pomyślnie!</p>
        </div>) : 
        null}
      </form>
    );
  };

export default Form;