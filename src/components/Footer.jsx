import linkedin from '../assets/linkedin-app-white-icon.svg';
import github from '../assets/github-white-icon.svg';
import mail from '../assets/mail.svg';
import discord from '../assets/discord.svg';

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
    return(
        <footer className="border-t-[1px] border-stone-400 flex justify-center items-center text-white">
            <div className="w-full max-w-[1000px] flex justify-between items-center p-5 md:text-lg">
                <p>&copy; <span>{year}</span> Bartosz Widlak</p>
                <div className='flex items-center w-[150px] justify-between *:hover:opacity-70 *:transition-opacity space-x-3'>
                    <a href="https://www.linkedin.com/in/bartosz-widlak-06a316313/" target='_blank'><img src={linkedin} alt="" className='w-[55px]' aria-label="link do linkedin"/></a>
                    <a href="https://github.com/N3nT" target='_blank'><img src={github} alt="" className='w-[55px]' aria-label="link do githuba"/></a>
                    <a href="https://discord.com/users/419910814112153610" target='_blank'><img src={discord} alt="" className='w-[70px]' aria-label="link do profilu discord"/></a>
                    <a href="mailto:bartosz.widlak@op.pl" target='_blank'><img src={mail} alt="" className='w-[60px]' aria-label="link do maila"/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;