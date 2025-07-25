import { eventitems } from '../../static/dataitems/events';
import { useState } from 'react';

export default function EventTimeLine(){
    const numberOfEvents = eventitems.length;
    
    const tablebodyJSX = eventitems.map((rowitem, i) =>
        {
            const timelineConentJSX = 
            <div>
                <h2>{rowitem.competition}</h2>
                <p>Entries available : {rowitem.entriesavailable}</p>
                <p>Entries open : {rowitem.entriesopen}</p>
                <p>Entries close : {rowitem.entriesclose}</p>
                <p>Initally open to West Midlands Lifters Only</p>
                <p>Guest entry : {rowitem.guestentry}</p>
                <p>
                    To ensure a place in this and any West Midlands Competitions, please sign up and contribute through our Volunteer Program via our Linktree.<br />
                    Anyone who has volunteered at one of our competitions is entitled to early entry to a competition of their choice (please note this is for the volunteer only, not by proxy).<br />
                    Anyone wishing to claim priority entry must do so one week before entries open via the google form in our linktree.<br />
                    After purchasing a ticket for one of our competitions please remember to fill out the google form linked in our linktree and the ticket as this is mandatory for all lifters.
                </p>
            </div>;

            const timelineOpConentJSX = 
            <div>
                <h2>{rowitem.date}</h2>
                <p style={{whiteSpace: "pre-wrap"}}>{rowitem.location}</p>
                <p>{rowitem.entrycost}</p>
            </div>;

            const [image, setImage] = useState("");
       
            import(`../../static/images/eventLogos/${rowitem.logo}`).then(
                (image)=> setImage(image.default)
            );

            if (numberOfEvents === i+1){
                return(
                    <li className="Event-Time-Line-Item">
                        <div className='Event-Time-Line-Item-Secondary'>{timelineOpConentJSX}</div>
                        <div className='Event-Time-Line-Item-Separator'>
                            <img className="Event-Time-Line-Item-Logo" src={image} />
                        </div>
                        <div className='Event-Time-Line-Item-Primary'>{timelineConentJSX}</div>
                    </li>
                )
            } else {
                return(
                    <li className="Event-Time-Line-Item">
                        <div className='Event-Time-Line-Item-Secondary'>{timelineOpConentJSX}</div>
                        <div className='Event-Time-Line-Item-Separator'>
                            <img className="Event-Time-Line-Item-Logo"src={image} />
                            <span className="Event-Time-Line-Item-Connector"></span>
                        </div>
                        <div className='Event-Time-Line-Item-Primary'>{timelineConentJSX}</div>
                    </li>
                )
            }
        }
    );

    return(
        <ul className="Event-Time-Line">
            {tablebodyJSX}
        </ul>
    );
}