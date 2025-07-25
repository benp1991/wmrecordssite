import './Events.css';
import Footer from '../Footer/Footer';
import EventTimeLine from "./EventTimeLine"

export default function Events(){
    
    return(
        <div>
            <div className='Page-Header-Container'>
                <h1 className='Page-Header'>EVENTS</h1>
            </div>
            <div className='Events-Page'>
                <EventTimeLine />
            </div>
            <Footer />
        </div>
    )
}