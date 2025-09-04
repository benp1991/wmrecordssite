import { eventitems } from '../../static/dataitems/events';
import TimeLineItem from './TimeLineItem';

export default function EventTimeLine(){
    const numberOfEvents = eventitems.length;
    
    const timelineJSX = eventitems.map((rowitem, i) =>
        {
            return(
                <TimeLineItem key={i} rowItem={rowitem} logo={rowitem.logo} />
            );
        }
    );

    return(
        <ul className="Event-Time-Line">
            {timelineJSX}
        </ul>
    );
}