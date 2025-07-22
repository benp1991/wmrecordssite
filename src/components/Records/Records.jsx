import './Records.css';
import { useState, useEffect } from 'react';
import RecordsTypeSwitch from './RecordTypeSwitch';
import AllRecordsTable from './AllRecordsTable';
import GetRecordsFunct from '../../functions/GetRecordsFunct';
import RecordsPageDescriptionText from './RecordsPageDescriptionText';
import RecordsClaim from './RecordClaim';
import Footer from '../Footer/Footer';

export default function RecordsUpdatePage() {
    const [currentRecords, setCurrentRecords] = useState(null);
    const [recordGenderType, setRecordGenderType] = useState('');
    const [weightClass, setWeightClass] = useState('');
    const [equipment, setEquipment] = useState('');

    async function handleGetRecords (url, raw) {
        const RecordItems = await GetRecordsFunct(url, raw);
        setCurrentRecords(RecordItems);
        return RecordItems
    }

    useEffect(() => {
        const url = "https://2jdd2l8dra.execute-api.eu-west-2.amazonaws.com/prod"
        const raw = JSON.stringify({"Lift": "","Gender":recordGenderType,"WeightClass":weightClass,"Equipment":equipment});
        console.log(raw);
        if (weightClass !== "" && equipment !== "") {
            handleGetRecords(url, raw);
        } else {
            setCurrentRecords(null);
        }

    },[recordGenderType, weightClass, equipment]);

    return (
        <div>
            <div className='Page-Header-Container'>
                <h1 className='Page-Header'>Records</h1>
            </div>
            <div className="Records-Page">
                <RecordsPageDescriptionText />
                <RecordsTypeSwitch genderType = {recordGenderType} typeSetter = {setRecordGenderType} weightClass = {weightClass} classSetter = {setWeightClass} equipment = {equipment} setEquipment = {setEquipment}/>
                <AllRecordsTable CurrentRecords = {currentRecords}/>
                <RecordsClaim />
            </div>
            <Footer />
        </div>
    );
}