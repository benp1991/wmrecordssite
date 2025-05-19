import React, { useState } from 'react';
import RecordSelector from "./RecordSelector";
import RecordsTable from './RecordsTable';
import RecordUpdater from './RecordUpdater';
import UploadCSV from './UploadCSV';

export default function RecordsUpdatePage() {
    const [currentRecords, setCurrentRecords] = useState([]);

    return (
        <div className="Records-Page">
            <RecordSelector RecordSetter ={setCurrentRecords} />
            <RecordsTable CurrentRecords = {currentRecords} />
            <RecordUpdater />
            <UploadCSV />
        </div>
    );
}