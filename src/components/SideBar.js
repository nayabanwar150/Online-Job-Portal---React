import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

function SideBar() {
    return (
        <>
          <div className="side-bar">
            <p className="side-bar-title">Navigations</p>
            <ul>
                <li><FontAwesomeIcon icon={faImage} /> &nbsp;Dashboard</li>
                <li><FontAwesomeIcon icon={faImage} /> &nbsp;Dashboard</li>
                <hr />
            </ul>

            <p className="side-bar-title">Jobs</p>
            <ul>
                <li><FontAwesomeIcon icon={faImage} /> &nbsp;Live Jobs</li>
                <li><FontAwesomeIcon icon={faImage} /> &nbsp;Accepted Jobs</li>
                <li><FontAwesomeIcon icon={faImage} /> &nbsp;Rejected Jobs</li>
                <hr />
            </ul>

            <p className="side-bar-title">Support</p>
            <ul>
                <li><FontAwesomeIcon icon={faImage} /> &nbsp;Help Desk</li>
                <li><FontAwesomeIcon icon={faImage} /> &nbsp;Tutorial</li>
                <li><FontAwesomeIcon icon={faImage} /> &nbsp;FeedBack</li>
            </ul>
          </div>  
        </>
    )
}

export default SideBar
