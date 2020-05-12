import React from 'react'

function JobCard() {
    return (
        <>
            <div className="job-card-box">
                <div className="job-card">
                    <h4 className="job-title">Job title</h4>
                    <p className="company-details">Company Name, Deparment</p>
                    <p className="company-location">Loaction</p>
                    <hr />
                    <div className="company-data">
                        123453 <span>7-10yrs</span> <span>Full Time</span>
                    </div>
                    <div className="candidates-packages">
                        3 candidates <span>23 - 25 Lakhs</span>
                    </div>
                    <div className="accept-reject-button">
                        <button>Accept</button>
                        <button>Reject</button>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default JobCard
