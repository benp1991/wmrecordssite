import React from 'react';

function RecordsTable(props) {
    const tableHeaders = ['Class', 'Age', 'Lift','Date', 'Name', 'Location','Equipment', 'Record Type', 'Weight (kg)', 'History'];
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
    const tablebodyJSX = props.CurrentRecords.map(rowitem =>
        {
            return(
                <tr key={rowitem.Primary_Sort_Key}>
                    <td>{rowitem.Class}</td>
                    <td>{rowitem.Age_Class}</td>
                    <td>{rowitem.Lift}</td>
                    <td>{rowitem.Date}</td>
                    <td>{rowitem.Full_Name}</td>
                    <td>{rowitem.Location}</td>
                    <td>{rowitem.Equipment}</td>
                    <td>{rowitem.Record_Type}</td>
                    <td>{rowitem.Weight}</td>
                    <td>View History</td>
                </tr>
            )
        }

    );

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

export default RecordsTable;