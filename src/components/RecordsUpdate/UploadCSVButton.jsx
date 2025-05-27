import React from 'react';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader()
        reader.readAsText(file);
        reader.onload = (event) => {
            console.log(reader.result);
            resolve(reader.result)
        };
        reader.onerror = (error) => {
            console.log('Error: ', error);
            reject(error)
        };
    })
 }


async function UploadCSV(props) {
    if (props.csvFile ==="" || props.csvFile=== null){
        alert("Missing Parameters: \nCSV File Required");

    } else {
        // instantiate a headers object
        console.log(props.csvFile);
        let RecordsCSVText = await getBase64(props.csvFile);
        console.log(RecordsCSVText);
        let myHeaders = new Headers();
        let Base64CSV = btoa(RecordsCSVText);

        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a variable
        const raw = JSON.stringify({"csvfile":Base64CSV});
        console.log(raw)
        // create a JSON object with parameters for API call and store in a variable
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        // make API call with parameters and use promises to get response
        fetch("https://qvn5p1o245.execute-api.eu-west-2.amazonaws.com/dev", requestOptions)
        .then(response => response.text())
        .then(result => alert(JSON.parse(result).body))
        .catch(error => console.log('error', error));
    }
}

function UploadCSVButton(props) {

    return (
        <button type="button" onClick={() => UploadCSV(props)}>Upload CSV</button>
    );
    
}

export default UploadCSVButton;