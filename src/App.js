import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import SidePanel from './components/SidePanel';
import NavBar from './components/NavBar';
import { Container, Row, Col} from 'reactstrap';
import JobsCard from './components/JobsCard';

function App() {
  return (
    <>
      
      <Container fluid={true}>
        <NavBar />
        <Row>
          <Col md="2" className="d-sm-none d-md-block"><SideBar /></Col>
          <Col md="9" sm="12">
            <Row>
              <Col className="card-list">
                  <JobsCard />
              </Col>
            </Row>
          </Col>
          <Col md="1" className="d-sm-none d-md-block"><SidePanel /></Col>
        </Row>
      </Container>
    </>
  )
}

export default App;