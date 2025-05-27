import React, { useState, useEffect } from 'react';
import RecordsTypeSwitch from './RecordTypeSwitch';
import AllRecordsTable from './AllRecordsTable';
import GetRecordsFunct from '../../functions/GetRecordsFunct';

export default function RecordsUpdatePage() {
    const [currentRecords, setCurrentRecords] = useState(null);
    const [recordGenderType, setRecordGenderType] = useState('Male');

    async function handleGetRecords (url, raw) {
        const RecordItems = await GetRecordsFunct(url, raw);
        setCurrentRecords(RecordItems);
        return RecordItems
    }

    useEffect(() => {
        const url = "https://2jdd2l8dra.execute-api.eu-west-2.amazonaws.com/prod"
        const raw = JSON.stringify({"Lift":"Squat","Gender":recordGenderType,"WeightClass":"53kg","Equipment":"Sleeves"});
        console.log(raw);
        handleGetRecords(url, raw);
    },[recordGenderType]);

    return (
        <div className="Records-Page">
            <p>Records</p>
            <p>{recordGenderType}</p>
            <RecordsTypeSwitch typesetter = {setRecordGenderType}/>
            <AllRecordsTable CurrentRecords = {currentRecords}/>
        </div>
    );
}