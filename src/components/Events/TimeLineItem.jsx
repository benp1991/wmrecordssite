import { useState } from 'react';
import TimeLineContent from './TimelineContent';
import TimeLineOppContent from './TimelineOppContent';

export default function TimeLineItem({ key , rowItem , numberOfEvents, i, logo }) {
    const [isOpen, setIsOpen] = useState(false);

    const timelineContentMoreJSX = 
        <div>
            <p>
                To ensure a place in this and any West Midlands Competitions, please sign up and contribute through our Volunteer Program via our Linktree.<br />
                Anyone who has volunteered at one of our competitions is entitled to early entry to a competition of their choice (please note this is for the volunteer only, not by proxy).<br />
                Anyone wishing to claim priority entry must do so one week before entries open via the google form in our linktree.<br />
                After purchasing a ticket for one of our competitions please remember to fill out the google form linked in our linktree and the ticket as this is mandatory for all lifters.
            </p>
        </div>;
    
    const [image, setImage] = useState("");
           
    import(`../../static/images/eventLogos/${logo}.png`).then(
        (image)=> setImage(image.default)
    );
    
    let timelineConentJSX = (
            <div>
                <div className='Event-Time-Line-Item-MainContent'>
                <div className='Event-Time-Line-Item-Secondary'>
                    <TimeLineOppContent rowItem={rowItem} />
                    </div>
                <div className='Event-Time-Line-Item-Separator'>
                    <img className="Event-Time-Line-Item-Logo"src={image} />
                    <span className="Event-Time-Line-Item-Connector"></span>
                </div>
                <div className='Event-Time-Line-Item-Primary'>
                    <TimeLineContent rowItem={rowItem} isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
            </div>
            {!isOpen ? (
                <hr className="Event-Time-Line-Item-Separator"></hr>
            ) : (
                <div className='Event-Time-Line-Item-MoreContent'>
                    {timelineContentMoreJSX}
                    <hr className="Event-Time-Line-Item-Separator"></hr>
                </div>
            )}
            </div>
        );
    

    return(
        <li key={key} className="Event-Time-Line-Item">
            {timelineConentJSX}
        </li>
    );
}