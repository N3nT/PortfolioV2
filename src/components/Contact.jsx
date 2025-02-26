import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import Form from '../components/Form';

const Contact = ({setContactActive}) => {
    const { ref, inView } = useInView({threshold: [0.5]});
    useEffect(() => {
        setContactActive(inView);
    }, [inView]);
    

    return(
        <section className='flex flex-col items-center text-white mb-15' ref={ref} id="contact">
            <h2 className="text-white text-3xl sm:text-4xl text-center mb-15">Kontakt</h2>
            <Form/>
        </section>
    )
}

export default Contact;