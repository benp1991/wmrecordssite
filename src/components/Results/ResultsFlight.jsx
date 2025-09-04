import LiftCell from "./LiftCell";

export default function ResultsFlight(flightdetails){
    const tableHeaders = ['Name','Class', 'Body Weight', 'lot', 'S1','S2','S3','Best S','B1', 'B2', 'B3', 'Best B', 'D1', 'D2', 'D3', 'Best D', 'Total', 'Prognosis'];
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
    tablebodyJSX = flightdetails.flightdetails.entries.map(rowitem =>
            {
                return(
                    <tr key={rowitem.id}>
                        <td>{rowitem.name}</td>
                        <td>{rowitem.team}</td>
                        <td>{rowitem.bodyweightKg}</td>
                        <td>{rowitem.lot}</td>
                        <LiftCell liftdetails= {rowitem.squats[0]} />
                        <LiftCell liftdetails= {rowitem.squats[1]} />
                        <LiftCell liftdetails= {rowitem.squats[2]} />
                        <td>{rowitem.heaviestSquat}</td>
                        <LiftCell liftdetails= {rowitem.benches[0]} />
                        <LiftCell liftdetails= {rowitem.benches[1]} />
                        <LiftCell liftdetails= {rowitem.benches[2]} />
                        <td>{rowitem.heaviestBench}</td>
                        <LiftCell liftdetails= {rowitem.deadlifts[0]} />
                        <LiftCell liftdetails= {rowitem.deadlifts[1]} />
                        <LiftCell liftdetails= {rowitem.deadlifts[2]} />
                        <td>{rowitem.heaviestDead}</td>
                        <td>{rowitem.Total}</td>
                        <td>{rowitem.Prognosis}</td>
                    </tr>
                )
            });

    return(
        <table id="LiveResults">
                <thead>
                    <tr>
                        {tableHeadersJSX}
                    </tr>
                </thead>
                <tbody>
                    {tablebodyJSX}
                </tbody>
        </table>
    );
}