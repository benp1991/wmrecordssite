import { useState, useEffect } from 'react';
import GetLiveResultsFunct from '../../functions/GetLiveResultsFunct';
import ResultsFlight from './ResultsFlight';


export default function ResultsLive(){
    const [currentMeet, setCurrentMeet] = useState(null);
    const [displayFlight, setDisplayFlight] = useState('A');

    async function handleGetRecords (url) {
        console.log("Getting Live Results")
        const RecordItems = await GetLiveResultsFunct(url);
        setCurrentMeet(RecordItems);
        return RecordItems;
    }

    useEffect(() => {
        const url = "https://wdc1cc3tef.execute-api.eu-west-2.amazonaws.com/dev"
        handleGetRecords(url);
        /*const intervalCall = setInterval(() => {
            handleGetRecords(url);
        }, 5000);
        return () => clearInterval(intervalCall);*/
    }, []);

    let resultsJSX = "";
    let flightsJSX = "";
    let meetdetails = "";
    //console.log(currentMeet);
    if (currentMeet){
        meetdetails = currentMeet.Meet.name + " - " + currentMeet.Meet.date;
        resultsJSX = Object.entries(currentMeet.flights).map(flight =>
            {
                if (flight[0] !== displayFlight){
                    return null
                }  
                else {
                    return(
                        <div>
                            <ResultsFlight flightdetails={flight[1]} />
                        </div>
                        
                    )
                }
            }
        );
        flightsJSX = Object.entries(currentMeet.flights).map(flightOption => {
            return (
                <option value={flightOption[0]}>Flight {flightOption[0]}</option>
            )
        });
    }

    return(
        <div className="results-live-main">
            <div className='results-live-header'>
                <h2>{meetdetails}</h2>
                <h2>Flight :</h2>
                <select name="Equipment" id="Equipment" value={displayFlight} onChange={e => setDisplayFlight(e.target.value)}>
                    {flightsJSX}
                </select>
            </div>
            {resultsJSX}
        </div>
    );
}