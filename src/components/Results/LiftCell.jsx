export default function LiftCell(liftdetails) {
    //console.log(liftdetails);
    if (liftdetails.liftdetails.status === "0") {
        return (
            <td>{liftdetails.liftdetails.kg}</td>
        );
    }
    if (liftdetails.liftdetails.status === "1") {
        return (
            <td className="cell-goodlift">{liftdetails.liftdetails.kg}</td>
        );
    }
    if (liftdetails.liftdetails.status === "-1") {
        return (
            <td className="cell-badlift">-{liftdetails.liftdetails.kg}</td>
        );
    }
    
}