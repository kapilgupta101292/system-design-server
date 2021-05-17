import logo from './logo.svg';
import './App.css';
import MyNavbar from "./components/MyNavbar"
import Sidebar from "./components/Sidebar"
import Container from "react-bootstrap/Container"
import Jumbotron from "./components/Banner"
import { Col, Row } from 'react-bootstrap';
import MySidebar from './components/MySidebar';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container fluid className="p-0">
        <MyNavbar/>
        <Row noGutters={true}> 
        <Col xs={2} p={0}>
        <MySidebar/>
        </Col>
        <Col xs={10}></Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
