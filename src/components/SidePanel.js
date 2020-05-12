import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faSearch, faFilter, faCaretUp, faCaretDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function SidePanel() {
    return (
        <>
           <div className="side-panel">
                <FontAwesomeIcon icon={faSearch}  /> <br /><br />
                <FontAwesomeIcon icon={faFilter} /> <br /><br />
                <FontAwesomeIcon icon={faCaretUp} /> <br />
                <FontAwesomeIcon icon={faCaretDown} /> <br />
                <FontAwesomeIcon icon={faAngleLeft} className="angle-left fa-2x" />

           </div> 
        </>
    )
}

export default SidePanel
