import './Events.css';
import Footer from '../Footer/Footer';
import { eventitems } from '../../static/dataitems/events';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function Events(){
    const tablebodyJSX = eventitems.map(rowitem =>
        {
            return(
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>{rowitem.competition}</TimelineContent>
                </TimelineItem>
            )
        }
    );

    return(
        <div>
            <div>
                <div className='Page-Header-Container'>
                    <h1 className='Page-Header'>EVENTS</h1>
                </div>
                <div className='Events-Page'>
                    <Timeline position="alternate">
                        {tablebodyJSX}
                    </Timeline>
                </div>
            </div>
            <Footer />
        </div>
    )
}
/*
<td className="Link-Button" >{rowitem.date}</td>
                    <td className="Link-Button" >{rowitem.location}</td>    
                    <td className="Link-Button" >{rowitem.entrycost}</td>
                    <td className="Link-Button" >{rowitem.description}</td>
                    <td className="Link-Button"><a target="_blank" href={rowitem.website}>Link</a></td>*/