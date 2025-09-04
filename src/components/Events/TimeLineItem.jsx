import { useState } from 'react';
import TimeLineContent from './TimelineContent';
import TimeLineOppContent from './TimelineOppContent';
import TimeLineMoreContent from './TimeLineMoreContent';

export default function TimeLineItem({ key , rowItem , logo }) {
    const [isOpen, setIsOpen] = useState(false);
   
    const [image, setImage] = useState("");
           
    import(`../../static/images/eventLogos/${logo}.png`).then(
        (image)=> setImage(image.default)
    );
    
    const timelineConentJSX = (
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
                    <TimeLineMoreContent />
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