import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Header from "../Head/Header";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import SessionData from '../SessionData/SessionData';

function Login() {

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
      const response = await axios.post('http://localhost:5000/user_login',formData)
      //console.log("login successfull:",response.data);
      //console.log(response.data.message);
      if(response.data.message == "0")
        {
          //alert("Valid User");
          //console.log(response.data.user_id)
          SessionData.setId(response.data.user_id);
          navigate ('/user_dashboard');
          
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


  return (
    <div className="bg-dark login">
      <Header />
      <Container className="bg-secondary pb-5 ">
        <Row className="justify-content-md-center mt-5">
          <Col md="6">
            <div className="login-container p-4">
              <h2 className="text-center mb-4">Login</h2>
              {/* <Form onSubmit={(e)=>{e.preventDefault(); showData()}}> */}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicText">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name="user_name"
                    type="text"
                    placeholder="Enter username"
                    value={formData.user_name}
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
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
export default Login;
