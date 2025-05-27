import React, { useState }from 'react';
import UploadCSVButton from './UploadCSVButton';

function UploadCSV() {
    const [csvFile, setCSVFile] = useState();
    return (
        <div className="section_footer">
            <label htmlFor='RecordsCSV'> Upload CSV</label>
            <input type="file" id="RecordsCSV" accept=".csv" onChange={e => setCSVFile(e.target.files[0])}/>
            <UploadCSVButton csvFile={csvFile}/>
        </div>
    );
}

export default UploadCSV;