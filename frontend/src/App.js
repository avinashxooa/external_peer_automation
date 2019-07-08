import React from 'react';
import './App.css';
import {Button, Container, Row, Col, ModalBody} from "react-bootstrap";
// import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './xooa_logo.png';
import { Label, FormGroup, CustomInput } from 'reactstrap';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter'
import  { Redirect } from 'react-router-dom';
import axios from 'axios';
// import Modal from 'react-bootstrap/Modal';
import { Modal } from 'semantic-ui-react'
var URL = 'http://localhost:3001/';
var BE_URL = 'http://localhost:3001/';
const shell = require('shelljs');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {  
    // alert(this.state.value)
    axios.post(URL, {data: {
      'token': this.state.value, // This is the body part
      'service':'aws',
    }})
      .then((response) => {
        console.log("response", response);
        if (response.data.success){
          axios.post(URL, {data:{'success':'success'}})
        }
        this.setState({
          token_response: response.data
        });
        })
      .catch( (error) => {
        console.log(error);
      });  
    event.preventDefault();
  } 
  render() {
      return (
      // <Modal show={this.state.show}>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <div style={{width: '30%'}}>
          <Container>
          {/* <Modal>
            <ModalHeader text="Modal Header" />
            <ModalBody>
               */}

            <form onSubmit={this.handleSubmit}>
                <div info style = {{flexDirection: 'column',textAlign:"center", justifyContent: 'center', alignItems: 'center'}} >
                <img info style = {{ width: 160, height: 46}} src={logo} alt="logo" />
                </div>
                  <Col> 
                  <Row>
                    <br></br>
                    <h5>Provide Your Token</h5>
                  </Row>    
                  <Row info style = {{justifyContent: 'center'}}>
                      <input type = "text" value={this.state.value} onChange={this.handleChange} maxLength='200' size="50"/>
                      <br></br  >
                    </Row>
                  <Row info style = {{justifyContent: 'center'}}>
                    <Button type="submit" value="Submit" > Submit  </Button>
                    {/* <Button type="submit" value="Submit" /> */}
                  </Row>  
                </Col>            
            </form>
            {/* </ModalBody>
            <ModalFooter>
              <Button type="primary">Modal Footer</Button>
              <Button type="link-cancel">Button</Button>
            </ModalFooter>
          </Modal> */}
            </Container>
          </div>
      </div>
          // </Modal>
      );
  }
}

export default App;
