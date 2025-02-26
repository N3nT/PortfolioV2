import { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();
    const [successStatus, setSuccessStatus] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [priacyStatus, setPrivacyStatus] = useState(false);

    const handleInputsChange = (setFunc, e) => {
        setFunc(e.target.value)
    }

    const handlePrivacyCheckbox = () => {
      setPrivacyStatus(!priacyStatus);
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
              }, 5200);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
      <form ref={form} onSubmit={sendEmail} className='text-black flex flex-col w-3/4 mb-10 max-w-[600px] md:text-lg'>
        <label className='text-white text-lg md:text-xl'>Imię</label>
        <input type="text" name="user_name" className='bg-white p-2 mb-5' placeholder='Twoje imię' onChange={(e) => {handleInputsChange(setName, e)}} value={name} required/>
        <label className='text-white text-lg md:text-xl'>Email</label>
        <input type="email" name="user_email" className='bg-white p-2 mb-5' placeholder='Twój email' onChange={(e) => {handleInputsChange(setEmail, e)}} value={email} required/>
        <label className='text-white text-lg md:text-xl'>Wiadomość</label>
        <textarea name="message" className='bg-white p-2' placeholder='Treść wiadomości' rows={5} onChange={(e) => {handleInputsChange(setMessage, e)}} value={message} required/>
        <input type="submit" value="Send" className='bg-green-400 hover:bg-green-700 text-white p-5 cursor-pointer transition-colors'/>
        {successStatus ? 
        (<div className='fixed top-10 -translate-x-1/2 left-1/2 bg-stone-950 w-80 h-20 z-10 border-4 border-green-400 rounded-xl text-center flex items-center justify-center flex-col overflow-hidden p-4'>
            <p className='text-white text-xl'>Wiadomość wysłana pomyślnie!</p>
            <div className='w-full overflow-hidden'>
                <div className='w-full h-[2px] bg-green-400 animate-timeRun'></div>
            </div>
        </div>) : 
        null}
        <div className="flex justify-center mt-5">
                <input type="checkbox" className="mx-5 scale-150" required/> 
                <p className="text-white">Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu zwrotnego zgodnie z <Link to="/privacy" className="text-green-400">polityką prywatności</Link></p>
            </div>
      </form>
    );
  };

export default Form;