import './RecordUpdate.css';
import { useState , useEffect } from 'react';
import RecordSelector from "./RecordSelector";
import RecordsTable from './RecordsTable';
import RecordUpdater from './RecordUpdater';
import RecordsUpdateFooter from './RecordsUpdateFooter';
import GetRecordsFunct from '../../functions/GetRecordsFunct';

export default function RecordsUpdatePage() {
    const [currentRecords, setCurrentRecords] = useState([]);
    const [maleClassicPDFRecords, setMaleClassicPDFRecords] = useState([]);
    const [maleEqPDFRecords, setMaleEqPDFRecords] = useState([]);
    const [femaleClassicPDFRecords, setFemaleClassicPDFRecords] = useState([]);
    const [femaleEqPDFRecords, setFemaleEqPDFRecords] = useState([]);

    async function DownloadPDFData(gender, equipment, RecordSetter) {
        if (gender ==="" || equipment === ""){
            alert("Missing Parameters: \n gender and equipment required");
    
        } else {
             // using built in JSON utility package turn object to string and store in a variable
            const url = "https://fhxpckid16.execute-api.eu-west-2.amazonaws.com/dev"
            const raw = JSON.stringify({"Gender":gender,"Equipment":equipment});
            console.log(raw)
            // make API call with parameters and use promises to get response
            const RecordItems = await GetRecordsFunct(url, raw);
    
            RecordSetter(RecordItems);
            return RecordItems;
        }
    }

    useEffect(() => {
            DownloadPDFData("Male", "Sleeves", setMaleClassicPDFRecords);
            DownloadPDFData("Male", "Single-Ply", setMaleEqPDFRecords);
            DownloadPDFData("Female", "Sleeves", setFemaleClassicPDFRecords);
            DownloadPDFData("Female", "Single-Ply", setFemaleEqPDFRecords);
        }, []);

    return (
        <div>
            <div className='Page-Header-Container'>
                    <h1 className='Page-Header'>Update Records</h1>
            </div>
            <div className="Records-Page">
                
                <RecordSelector RecordSetter ={setCurrentRecords} />
                <RecordsTable CurrentRecords = {currentRecords} />
                <RecordUpdater />  
            </div>
            <RecordsUpdateFooter MCPDFRecords = {maleClassicPDFRecords} MEPDFRecords = {maleEqPDFRecords} FCPDFRecords = {femaleClassicPDFRecords} FEPDFRecords = {femaleEqPDFRecords}/>
        </div>
    );
}