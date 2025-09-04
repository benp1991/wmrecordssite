import { usefulInformationLinks } from '../../static/dataitems/usefullinfolinks';

export default function UsefulInformationTable(){

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
    )
}