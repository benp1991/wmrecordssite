import BritishLogo from '../../static/images/ParentLogos/BritishLogo.png';
import EPALogo from '../../static/images/ParentLogos/EPALogo.png';
import EPFLogo from '../../static/images/ParentLogos/EPFLogo.png';
import IPFLogo from '../../static/images/ParentLogos/IPFLogo.png';

export default function ParentLogos() {
    return(
        <div className='ParentLogos'>
            <img src={BritishLogo}></img>
            <img src={EPALogo}></img>
            <img src={EPFLogo}></img>
            <img src={IPFLogo}></img>
        </div>
    );
}