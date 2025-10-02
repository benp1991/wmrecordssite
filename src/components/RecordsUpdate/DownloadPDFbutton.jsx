import React from 'react';
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import createTable from './PDFTable.jsx';


const styles = StyleSheet.create(
    {
        page: {
            flexDirection: 'column',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    }
);

const data = [
    {weightClass:"53kg", records:[{age:"U16", squat:"50kg",bench:"20kg",dead:"70kg"},{age:"U18", squat:"55kg",bench:"25kg",dead:"75kg"},{age:"U23", squat:"60kg",bench:"30kg",dead:"80kg"}]},
    {weightClass:"59kg", records:[{age:"U16", squat:"55kg",bench:"25kg",dead:"75kg"},{age:"U18", squat:"60kg",bench:"30kg",dead:"80kg"},{age:"U23", squat:"65kg",bench:"35kg",dead:"85kg"}]},
];

let records = data.map(dataitem => {
    return (
        <View>
            <Text>{dataitem.weightClass}</Text>
            {createTable(dataitem.records)}
        </View> 
    )
});

// Create Document Component
const MaleRecords = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>West Midlands Powerlifting Divisional Records - MEN - CLASSIC </Text>
      </View>
      <View style={styles.section}>
        <Text>29/09/2025</Text>
      </View>
      <View>
        {records}
      </View>
    </Page>
  </Document>
);

const FemaleRecords = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);



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

function DownloadPDFButton(props) {

    return (
        <div>
            <PDFDownloadLink document={<MaleRecords />} fileName="WMRecordsMale.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                Download Male Records PDF
            </PDFDownloadLink>
            <PDFDownloadLink document={<FemaleRecords />} fileName="WMRecordsFemale.pdf">
                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                Download Female Records PDF
            </PDFDownloadLink>
        </div>
    );
    
}

export default DownloadPDFButton;