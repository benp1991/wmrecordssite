export default function TimeLineContent({ rowItem, isOpen, setIsOpen }) {

    const handleMoreClick = () => {
        setIsOpen((prev) => !prev);
    };

    const entriesOpenDate = new Date(rowItem.entriesopen);
    const entriesCloseDate = new Date(rowItem.entriesclose);
    const guestEntryDate = new Date(rowItem.guestentry);
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return(
        <div>
            <h2>{rowItem.competition}</h2>
            <p>
                Entries available : {rowItem.entriesavailable}<br />
                Entries open : {entriesOpenDate.toLocaleDateString(undefined, options)}<br />
                Entries close : {entriesCloseDate.toLocaleDateString(undefined, options)}<br />
                Initally open to West Midlands Lifters Only<br />
                Guest entry : {guestEntryDate.toLocaleDateString(undefined, options)}
            </p>
            {!isOpen ? (
                <a href="#" onClick={handleMoreClick}>Show More</a>
              ) : (
                <a href="#" onClick={handleMoreClick}>Show Less</a>
              )}
        </div>
    );
}