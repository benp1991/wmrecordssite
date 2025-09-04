import './UsefulInformation.css';
import Footer from '../Footer/Footer';
import UsefulInformationTable from './UsefulInformationTable';

export default function UsefulInformation(){

    return(
        <div>
            <div >
                <div className='Page-Header-Container'>
                    <h1 className='Page-Header'>USEFUL INFORMATION</h1>
                </div>
                <div className='UsefulInfo-Page'>
                    <UsefulInformationTable />
                </div>
            </div>
            <Footer />
        </div>
    )
}