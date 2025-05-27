export default async function GetRecordsFunct(url, jsonString) {
    let RecordItems = ""
    console.log(jsonString);
    if (url ==="" || jsonString===""){
        return RecordItems;
    } else {
        // instantiate a headers object
        let myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");

        // create a JSON object with parameters for API call and store in a variable
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: jsonString,
            redirect: 'follow'
        };
        console.log(requestOptions);
        // make API call with parameters and use promises to get response
        let Responsebody = await fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => JSON.parse(result).body)
        .catch(error => console.log('error', error));
        RecordItems = JSON.parse(Responsebody).Items;
        console.log(RecordItems);

        return RecordItems;
    };
};