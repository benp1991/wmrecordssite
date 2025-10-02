import React, { useState }from 'react';
import UploadCSVButton from './UploadCSVButton';
import DownloadCSVButton from './DownloadCSVButton';
import DownloadPDFButton from './DownloadPDFbutton';

function UploadCSV() {
    const [csvFile, setCSVFile] = useState();
    return (
        <div className="csv_section_footer">
            <label htmlFor='RecordsCSV'> Upload CSV</label>
            <input type="file" id="RecordsCSV" accept=".csv" onChange={e => setCSVFile(e.target.files[0])}/>
            <UploadCSVButton csvFile={csvFile}/>
            <DownloadCSVButton />
            <DownloadPDFButton />
        </div>
    );
}

export default UploadCSV;