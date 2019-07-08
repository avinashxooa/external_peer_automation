import React from 'react';
import {Button, Container, Row, Col} from "react-bootstrap";

class Radiobutton extends React.Component {  
    setService(event) {
      alert(event.target.value);
      console.log(event.target.value);
    }
    render() {
      return ( 
        <div onChange={this.setService.bind(this)}>
          
          <Row>
          <input type="radio" value=" Azure" name="service"/> Azure
          </Row>
  
          <Row>
          <input type="radio" value=" Google" name="service"/> Google
          </Row>
          
          <Row>
          <input type="radio" value=" Aws" name="service"/> Aws
          </Row>
        </div>
       )
    }
  }


export default Radiobutton;