import './UsefulInformation.css';
import Footer from '../Footer/Footer';
import { usefulInformationLinks } from '../../static/dataitems/usefullinfolinks';

export default function UsefulInformation(){

    const tablebodyJSX = usefulInformationLinks.map(rowitem =>
        {
            return(
                <tr key={rowitem.title}>
                    <td className='title-cell'>{rowitem.title}</td>
                    <td><a className="Link-Button" target="_blank" href={rowitem.link}>Link</a></td>
                </tr>
            )
        }
    );

    return(
        <div>
            <div >
                <div className='Page-Header-Container'>
                    <h1 className='Page-Header'>USEFUL INFORMATION</h1>
                </div>
                <div className='UsefulInfo-Page'>
                    <table id="UsefulInfoTable" className='UsefulInfo-Table'>
                        <thead>
                            <tr>
                                <th key = "Resource" className="resource_cell">Resource</th>
                                <th key = "Link" className="link_cell">Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tablebodyJSX}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    )
}