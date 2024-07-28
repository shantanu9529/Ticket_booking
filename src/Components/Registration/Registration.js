import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Header from "../Head/Header";
import axios from 'axios';

function Registration() {
  const [formData, setFormData]= useState({
    full_name:'',
    gender:'',
    user_name:'',
    password:''
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
      const response = await axios.post('http://localhost:5000/add_user',formData)
      console.log("User added successfully:",response.data);
    }
    catch(error)
    {
      console.log("error adding User: ",error);
    }
  };

  
  const showData = () =>
  {
    console.log(formData);
  }

  return (
    
    <div className="bg-dark login">
      <Header />
      <Container className="bg-secondary pb-5 ">
        <Row className="justify-content-md-center mt-5">
          <Col md="6">
            <div className="login-container p-4">
              <h2 className="text-center mb-4">Register Here !</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mt-3">
                  <Form.Label> <h5>FullName</h5></Form.Label>
                  <Form.Control
                    name="full_name"
                    type="text"
                    placeholder="Enter Fullname"
                    value={formData.full_name}
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                
                <Form.Label className="mt-3"><h5>Gender</h5></Form.Label>
                <div className="form-check ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="exampleRadios1"
                    value="male"
                    required
                    onChange={handleChange}
                    
                  />
                  <label className="form-check-label">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="exampleRadios2"
                    value="female"
                    required
                    onChange={handleChange}
                  />
                  <label className="form-check-label">
                    Female
                  </label>
                </div>
                <Form.Group className="mt-3">
                  <Form.Label ><h5>Username</h5></Form.Label>
                  <Form.Control
                    name="user_name"
                    type="text"
                    placeholder="Enter Username"
                    value={formData.user_name}
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label><h5>Password</h5></Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    required
                    onChange={handleChange}
                  />
                </Form.Group>{" "}
                <br />
                <br />
                <Button
                  className="mx-auto d-block"
                  variant="primary"
                  type="submit"
                >
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
export default Registration;
