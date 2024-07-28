import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../sidebar/Sidebar.js";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';
import Session_data_admin from "../Session_data_admin/Session_data_admin.js";

  

function AdminProfile()
{
    const [formData, setFormData]= useState({
        full_name:'',
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
        const admin_id = Session_data_admin.getId();
        try{
          const response = await axios.put(`http://localhost:5000/update_admin/${admin_id}`,formData)
          console.log("Admin Updated successfully:",response.data);
        }
        catch(error)
        {
          console.log("error updating Admin: ",error);
        }
      };

      useEffect(()=>{ // useEffect is run on opening page 
        console.log (Session_data_admin.getId());
        const fetchAdminData = async ()=>
            {
                try{
                    const admin_id = Session_data_admin.getId();
                    const response = await axios.get(`http://localhost:5000/fetch_admin_data_profile/${admin_id}`);
                    setFormData(response.data); 
                    //console.log(response.data);
                    
                }
                catch(error)
                {
                    console.log("Error fetching Admin Profile",error);
                }
                
            };

            if(Session_data_admin.getId)
                {
                    fetchAdminData();
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
              <h2 className="text-center mb-4">Update Admin Details</h2>
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
export default AdminProfile;