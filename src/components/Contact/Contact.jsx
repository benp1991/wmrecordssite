import './Contact.css';
import Footer from '../Footer/Footer';
import ContactInfo from './ContactInfo';

export default function Contact(){

    return(
        <div>
            <div className='Page-Header-Container'>
                <h1 className='Page-Header'>contact</h1>
            </div>
            <div className="Contact-Page">
                <ContactInfo />
            </div>
            <Footer />
        </div>
    )
}