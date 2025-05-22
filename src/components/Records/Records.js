import React, { useState, useEffect } from 'react';
import RecordsTypeSwitch from './RecordTypeSwitch';
import AllRecordsTable from './AllRecordsTable';

export default function RecordsUpdatePage() {
    const [currentRecords, setCurrentRecords] = useState([]);
    const [recordGenderType, setRecordGenderType] = useState('Male');

    useEffect(() => {
        alert('Requested data from server...');
        get(forecastType).then((response) => {
          alert('Response: ' + JSON.stringify(response,'',2));
          setData(response.data);
        });
      },[forecastType]);

    return (
        <div className="Records-Page">
            <p>Records</p>
            <p>{recordGenderType}</p>
            <RecordsTypeSwitch typesetter = {setRecordGenderType}/>
            <AllRecordsTable CurrentRecords = {currentRecords}/>
        </div>
    );
}