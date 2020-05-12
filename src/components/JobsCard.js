import React from 'react';
import { Card, Button, CardTitle, CardText, CardBody, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faIdCard, faBriefcase, faCalendarMinus, faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons';


const JobsCard = (props) => {
  return (
      <Card className="card">
        <CardBody>
          <FontAwesomeIcon icon={faImage} className="fa-2x" />
          <CardTitle className="job-title ">Job Title</CardTitle>
          <CardText className="company-details ">Company Name, Deparment</CardText>
          <CardText className="company-location ">Location <hr /></CardText>
          <CardText>
            <Row>
                <Col className="text-small"><FontAwesomeIcon icon={faIdCard} />&nbsp; 123453</Col>
                <Col className="text-small"><FontAwesomeIcon icon={faBriefcase} />&nbsp;7-10 yrs</Col>
            </Row>
            <Row className="mt-3">
                <Col className="text-small"><FontAwesomeIcon icon={faCalendarMinus} />&nbsp;Full Time</Col>
            </Row>
            <hr />
            <Row>
                <Col className="text-small"><FontAwesomeIcon icon={faUser} />&nbsp; 3 people </Col>
                <Col className="text-small"><FontAwesomeIcon icon={faMoneyBill} />&nbsp;23 - 25 lacs</Col>
            </Row>
          </CardText>
          <Row>
              <Col><Button className="btn btn-md card-btn">Accept</Button></Col>
              <Col><Button className="btn btn-md card-btn">Reject</Button></Col>
          </Row>
        </CardBody>
      </Card>
  );
};

export default JobsCard;