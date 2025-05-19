import React from 'react';

function RecordsTable() {
    function handleClick() {
        alert('Submission Successful.');
    }
    return (
        <div className="record_table">
            <table id="CurrentRecords">
                <tr>
                    <th className="default_cell">
                        Class
                    </th>
                    <th className="default_cell">
                        Age
                    </th>
                    <th className="default_cell">
                        Lift
                    </th>
                    <th className="default_cell">
                        Date
                    </th>
                    <th className="name_cell">
                        Name
                    </th>
                    <th className="location_cell">
                        Location
                    </th>
                    <th className="default_cell">
                        Equipment
                    </th>
                    <th className="default_cell">
                        Record Type
                    </th>
                    <th className="default_cell">
                        Weight (kg)
                    </th>
                    <th className="default_cell">
                        History
                    </th>
                </tr>
            </table>

        </div>);
}

export default RecordsTable;

//
  //          <div id="RecordHistory" class="w3-modal" role="dialog">
    //            <div class="w3-modal-content">
      //              <div class="w3-container">
        //                <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
          //              <p>Some text in the modal.</p>
            //        </div>
            //    </div>
           // </div>