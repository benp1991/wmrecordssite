import React from 'react';

function AllRecordsTable({CurrentRecords}) {
    const tableHeaders = ['Equipment','Class', 'Age', 'Lift','Weight (kg)','Name','Date', 'Location', 'History'];
    const tableHeadersJSX = tableHeaders.map(header =>
        {
            if(header === "Name"){
                return (<th key = {header} className="name_cell"> {header}</th>)
            } else if(header === "Location"){
                return (<th key = {header} className="location_cell"> {header}</th>)
            } else {
                return (<th key = {header} className="default_cell"> {header}</th>)
            }
                
        }
         
    );
    let tablebodyJSX;
    console.log(CurrentRecords);
    if (CurrentRecords){
        tablebodyJSX = CurrentRecords.map(rowitem =>
            {
                let Lift = "";
                let Equipment = "";
                const lifts = {S: 'Squat', B: 'Bench', D: 'Deadlift', Total: 'Total'};
                if (rowitem.Record_Type !== 'Full Power' ){
                    Lift = lifts[rowitem.Lift]+' A/C';
                } else {
                    Lift = lifts[rowitem.Lift];
                }
                if (rowitem.Equipment !== 'Sleeves' ){
                    Equipment = 'Equipped';
                } else {
                    Equipment = 'Classic';
                }

                return(
                    <tr key={rowitem.Primary_Sort_Key}>
                        <td>{Equipment}</td>
                        <td>{rowitem.Class}</td>
                        <td>{rowitem.Age_Class}</td>
                        <td>{Lift}</td>
                        <td>{rowitem.Weight}</td>
                        <td>{rowitem.Full_Name}</td>
                        <td>{rowitem.Date}</td>
                        <td>{rowitem.Location}</td>
                        <td>View History</td>
                    </tr>
                )
            }
        );
    } else {
        tablebodyJSX = (
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        )
    }
    
    return (
        <div className="record_table">
            <table id="CurrentRecords">
                <thead>
                    <tr>
                        {tableHeadersJSX}
                    </tr>
                </thead>
                <tbody>
                    {tablebodyJSX}
                </tbody>
            </table>

        </div>
    );
}

export default AllRecordsTable;