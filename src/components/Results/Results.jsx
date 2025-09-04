import './Results.css';
import Footer from '../Footer/Footer';
import ResultsLive from './ResultsLive';

export default function Results(){

    return(
        <div>
            <div className='Page-Header-Container'>
                    <h1 className='Page-Header'>Results</h1>
            </div>
            <div className="Results-Page">
                <ResultsLive />
            </div>
            <Footer />
        </div>
        
    )
}