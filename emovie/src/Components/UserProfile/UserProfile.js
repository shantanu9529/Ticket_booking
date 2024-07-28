import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../Sidebar/Sidebar.js";
import Card from "../Homepage/Card.js";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Header from "../Head/Header";
import axios from 'axios';
import SessionData from "../SessionData/SessionData.js";

  

function UserProfile()
{
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
        const user_id = SessionData.getId();
        try{
          const response = await axios.put(`http://localhost:5000/update_user/${user_id}`,formData)
          console.log("User Updated successfully:",response.data);
        }
        catch(error)
        {
          console.log("error updating User: ",error);
        }
      };

      useEffect(()=>{ // useEffect is run on opening page 
        console.log (SessionData.getId());
        const fetchUserData = async ()=>
            {
                try{
                    const user_id = SessionData.getId();
                    const response = await axios.get(`http://localhost:5000/fetch_user_data_profile/${user_id}`);
                    setFormData(response.data); 
                    //console.log(response.data);
                    
                }
                catch(error)
                {
                    console.log("Error fetching user Profile",error);
                }
                
            };

            if(SessionData.getId)
                {
                    fetchUserData();
                }
            
      },[])
      
    
    return(
        <div className="row tc p-5">
            <div className="col-sm-2">
                <Sidebar/>
                
            </div>
            <div className="col-sm-10 p-5"> 
            <div>
                <Container className="bg-secondary pb-5 ">
        <Row className="justify-content-md-center mt-5">
          <Col md="6">
            <div className="login-container p-4">
              <h2 className="text-center mb-4">Update</h2>
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
                  Update
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
                </div>
            </div>
            
        </div>
    );
}
export default UserProfile;