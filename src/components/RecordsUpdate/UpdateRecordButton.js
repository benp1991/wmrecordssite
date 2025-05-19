import React from 'react';

function UpdateRecord(props) {
    if (props.lift ==="" || props.gender==="" || props.weightClass==="" ||props.equipment==="" || props.lifterName==="" || props.ageClass==="" || props.weightLifted==="" || props.recordType==="" || props.date===""|| props.competition===""){
        alert("Missing Parameters: \nName: "+ props.lifterName+"\nLift: "+props.lift+"\nAge Class: "+props.ageClass+"\nGender: "+props.gender+"\nWeightClass: "+props.weightClass+"\nWeight Lifted: "+props.weightLifted+"\nRecord Type: "+props.recordType+"\nDate: "+props.date+"\nCompetition: "+props.competition+"\nEquipment: "+props.equipment);

    } else {
        // instantiate a headers object
        let myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");

        // using built in JSON utility package turn object to string and store in a variable
        const raw = JSON.stringify({"Lift":props.lift,"Gender":props.gender,"AgeClass":props.ageClass,"WeightClass":props.weightClass,"Equipment":props.equipment,"Name":props.lifterName,"Date":props.date,"Competition":props.competition,"WeightLifted":props.weightLifted, "RecordType":props.recordType});
        console.log(raw)
        // create a JSON object with parameters for API call and store in a variable
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        //console.log(requestOptions);

        // make API call with parameters and use promises to get response
        fetch("https://zz0a3ds1ge.execute-api.eu-west-2.amazonaws.com/dev", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
    }
}

function UpdateRecordButton(props) {
    return (
        <button type="button" onClick={() => UpdateRecord(props)}>Update Record</button>
    );
    
}

export default UpdateRecordButton;