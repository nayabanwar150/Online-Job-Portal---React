import React from 'react';
import { Card, Button, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faIdCard, faBriefcase, faCalendarMinus, faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons';
import Data from './data.json';

const JobsCard = (props) => {
  
  return (
    <>
    {Data.map((JobData, index) => {
        return(
            <>
                <Card className="card">
                    <CardBody>
                    <FontAwesomeIcon icon={faImage} className="fa-2x" />
                    <CardTitle className="job-title ">{JobData.jobTitle}</CardTitle>
                    <CardText className="company-name ">{JobData.companyName}</CardText>
                    <CardText className="company-location ">{JobData.location} <hr /></CardText>
                    <CardText>
                        <Row>
                            <Col className="text-small"><FontAwesomeIcon icon={faIdCard} />&nbsp; {JobData.views}</Col>
                            <Col className="text-small"><FontAwesomeIcon icon={faBriefcase} />&nbsp;{JobData.experience}</Col>
                        </Row>
                        <Row className="mt-3">
                            <Col className="text-small"><FontAwesomeIcon icon={faCalendarMinus} />&nbsp;{JobData.jobType}</Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col className="text-small"><FontAwesomeIcon icon={faUser} />&nbsp; {JobData.candiates} </Col>
                            <Col className="text-small"><FontAwesomeIcon icon={faMoneyBill} />&nbsp;{JobData.ctc}</Col>
                        </Row>
                    </CardText>
                    <Row>
                        <Col><Button className="btn btn-md card-btn">Accept</Button></Col>
                        <Col><Button className="btn btn-md card-btn">Reject</Button></Col>
                    </Row>
                    
                    </CardBody>
                </Card>
            </>
        )
    })}
    </>
  );
};

export default JobsCard;