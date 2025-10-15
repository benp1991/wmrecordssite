import { PDFDownloadLink, Page, Text, View, Document } from '@react-pdf/renderer';
import createTable from './PDFTable.jsx';
import { styles } from './PDFStyles.jsx';

function DownloadPDFButton(props) {
    const today = new Date();
    const month = today.getMonth()+1;
    const year = today.getFullYear();
    const date = today. getDate();
    const currentDate = date + "/" + month + "/" + year;

    let MCRecords = props.MCPDFRecords.map(dataitem => {
        return (
            <View style={styles.recordset}>
                {createTable(dataitem.records, dataitem.weightClass)}
            </View> 
        )
    });

    let FCRecords = props.FCPDFRecords.map(dataitem => {
        return (
            <View style={styles.recordset}>
                {createTable(dataitem.records, dataitem.weightClass)}
            </View> 
        )
    });

    // Create Document Component
    const MaleClassicRecords = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.headerSection}>
                <Text>West Midlands Powerlifting Divisional Records - MEN - CLASSIC </Text>
                <Text>{currentDate}</Text>
            </View>
            <View>
                {MCRecords}
            </View>
        </Page>
    </Document>
    );

    const FemaleClassicRecords = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.headerSection}>
                <Text>West Midlands Powerlifting Divisional Records - WOMEN - CLASSIC </Text>
                <Text>{currentDate}</Text>
            </View>
            <View>
                {FCRecords}
            </View>
        </Page>
    </Document>
    );

    
    return (
        <div>
            {props.MCPDFRecords.length < 1 ? 
                <p>Loading Male Classic Records</p>:
                <PDFDownloadLink document={<MaleClassicRecords />} fileName="WMRecordsMaleClassic.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                    Download Male Classic Records PDF
                </PDFDownloadLink>
            }
            {props.FCPDFRecords.length < 1 ? 
                <p>Loading Female Classic Records</p>:
                <PDFDownloadLink document={<FemaleClassicRecords />} fileName="WMRecordsFemaleClassic.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                    Download Female Classic Records PDF
                </PDFDownloadLink>
            }
            
            
        </div>
    );
    
}

export default DownloadPDFButton;