import React from 'react';

async function GetRecords(props) {
    if (props.lift ==="" || props.gender==="" || props.weightClass==="" ||props.equipment===""){
        alert("Missing Parameters: \nLift: "+props.lift+"\nGender: "+props.gender+"\nWeightClass: "+props.weightClass+"\nEquipment: "+props.equipment);

    } else {
        // instantiate a headers object
        let myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");

        // using built in JSON utility package turn object to string and store in a variable
        const raw = JSON.stringify({"Lift":props.lift,"Gender":props.gender,"WeightClass":props.weightClass,"Equipment":props.equipment});
        //console.log(raw);
        // create a JSON object with parameters for API call and store in a variable
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        //console.log(requestOptions);

        // make API call with parameters and use promises to get response
        let Responsebody = await fetch("https://2jdd2l8dra.execute-api.eu-west-2.amazonaws.com/prod", requestOptions)
        .then(response => response.text())
        .then(result => JSON.parse(result).body)
        .catch(error => console.log('error', error));
        //console.log(Responsebody);
        let RecordItems = JSON.parse(Responsebody).Items;
        //console.log(RecordItems);

        props.RecordSetter(RecordItems)
    }
}

function GetRecordsButton(props) {
    return (
        <button type="button" onClick={() => GetRecords(props)}>Get Records</button>
    );
    
}

export default GetRecordsButton;