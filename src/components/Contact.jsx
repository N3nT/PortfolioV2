import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Form from '../components/Form';

const Contact = ({setContactActive}) => {
    const { ref, inView } = useInView({threshold: [0.70]});

    useEffect(() => {
        setContactActive(inView);
    }, [inView]);
    

    return(
        <section className='flex flex-col items-center text-white' ref={ref}>
            <h2 className="text-white text-3xl text-center my-15">Kontakt</h2>
            <Form/>
        </section>
    )
}

export default Contact;