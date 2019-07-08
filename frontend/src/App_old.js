import React from 'react';
import './App.css';
import {Button, Container, Row, Col, ModalBody} from "react-bootstrap";
// import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './xooa_logo.png';

import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio, AvCheckboxGroup, AvCheckbox } from 'availity-reactstrap-validation';
import { Label, FormGroup, CustomInput } from 'reactstrap';
import Modal from './Modal1.js';
import ModalHeader from 'react-bootstrap/ModalHeader';



class App extends React.Component {
  test (){
    alert('This is abc');
    
  }
  constructor(props) {
    super(props);
    this.state = {
         data: 'Please Provide Token.'
    }

    
    // this.updateState = this.updateState.bind(this);
  };
  // updateState(e) {
  //     this.setState({data: e.target.value});  
  // }


  render() {
      return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <div style={{width: '30%'}}>
          <Container>
            <form>
                <div info style = {{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                <img info style = {{ width: 160, height: 46 }} src={logo} alt="logo" />
                </div>
                  <Col>
                  <Row>
                    <h4>Please Select Service Provider</h4>
                  </Row>    
                  
                  <Row info style = {{justifyContent: 'center'}}>
                      <input type = "text" placeholder = {this.state.data} maxLength='200' size="50"/>
                      <br></br  >
                    </Row>
                  <Row info style = {{justifyContent: 'center'}}>
                    <Button onClick={this.test}> Submit  </Button>
                  </Row>  
                </Col>            
          </form>
            </Container>
          </div>
      </div>
      );
  }
}

export default App;
