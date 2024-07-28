import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Session_data_admin from '../Session_data_admin/Session_data_admin';

function Loginn() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
  });

  const handleChange = (e)=> {
    const {name, value } = e.target;
    setFormData(prevState =>
      (
        {
        ...prevState,
        [name]:value
        }
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // to stop reloading
    try{
      const response = await axios.post('http://localhost:5000/admin_login',formData)
      console.log("login successfull:",response.data);
      //console.log(response.data.message);
      if(response.data.message == "0")
        {
          //alert("Valid User");
          //console.log(response.data.admin_id)
           Session_data_admin.setId(response.data.admin_id);
           navigate ('/dashboard');
          
        }
        else
        {
          alert("Invalid User");
        }
    }
    catch(error)
    {
      console.log("error while login: ",error);
    }
  };

  const showData = () =>
    {
      console.log(formData);
    }
    

    return(  
        <div className='bg-dark login pt-5'>
        <Container className='bg-secondary pb-5'>
        <Row className="justify-content-md-center pt-5">
          <Col md="6">
            <div className="login-container p-4">
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Username</Form.Label>
                  <Form.Control name="user_name" type="text" placeholder="Enter username" value={formData.user_name} required onChange={handleChange} />
                </Form.Group>
  
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name='password' type="password" placeholder="Password" value={formData.password} required onChange={handleChange} />
                </Form.Group> <br/><br/>
  
                <Button className='mx-auto d-block' variant="primary" type="submit" block>
                  Login
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    );

}
export default Loginn;
