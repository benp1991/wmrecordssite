export default function TimeLineOppContent({ rowItem  }) {
    const eventDate = new Date(rowItem.date);
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return(
        <div>
            <h2>{eventDate.toLocaleDateString(undefined, options)}</h2>
                <p style={{whiteSpace: "pre-wrap"}}>{rowItem.location}</p>
                <p>{rowItem.entrycost}</p>
        </div>
    );
}