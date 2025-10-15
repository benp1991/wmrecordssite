import DownloadPDFButton from './DownloadPDFbutton';
import UploadCSV from './UploadCSV';

function RecordsUpdateFooter(props) {
    return (
        <div className="csv_section_footer">
            <UploadCSV />
            <DownloadPDFButton {...props} />
        </div>
    );
}

export default RecordsUpdateFooter;