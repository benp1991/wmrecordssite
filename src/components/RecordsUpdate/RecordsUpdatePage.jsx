import './RecordUpdate.css';
import { useState } from 'react';
import RecordSelector from "./RecordSelector";
import RecordsTable from './RecordsTable';
import RecordUpdater from './RecordUpdater';
import UploadCSV from './UploadCSV';

export default function RecordsUpdatePage() {
    const [currentRecords, setCurrentRecords] = useState([]);

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
            <UploadCSV />
        </div>
    );
}