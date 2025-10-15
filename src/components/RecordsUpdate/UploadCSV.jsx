import React, { useState }from 'react';
import UploadCSVButton from './UploadCSVButton';
import DownloadCSVButton from './DownloadCSVButton';

function UploadCSV() {
    const [csvFile, setCSVFile] = useState();
    return (
        <div>
            <label htmlFor='RecordsCSV'> Upload CSV</label>
            <input type="file" id="RecordsCSV" accept=".csv" onChange={e => setCSVFile(e.target.files[0])}/>
            <UploadCSVButton csvFile={csvFile}/>
            <DownloadCSVButton />
        </div>
    );
}

export default UploadCSV;