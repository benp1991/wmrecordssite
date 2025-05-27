import React from 'react';
import GetRecordsFunct from '../../functions/GetRecordsFunct';

async function GetRecords(props) {
    if (props.lift ==="" || props.gender==="" || props.weightClass==="" ||props.equipment===""){
        alert("Missing Parameters: \nLift: "+props.lift+"\nGender: "+props.gender+"\nWeightClass: "+props.weightClass+"\nEquipment: "+props.equipment);

    } else {
        // using built in JSON utility package turn object to string and store in a variable
        const url = "https://2jdd2l8dra.execute-api.eu-west-2.amazonaws.com/prod"
        const raw = JSON.stringify({"Lift":props.lift,"Gender":props.gender,"WeightClass":props.weightClass,"Equipment":props.equipment});
        console.log(raw);
        // make API call with parameters and use promises to get response
        const RecordItems = await GetRecordsFunct(url, raw);

        props.RecordSetter(RecordItems)
    }
}

function GetRecordsButton(props) {
    return (
        <button type="button" onClick={() => GetRecords(props)}>Get Records</button>
    );
    
}

export default GetRecordsButton;