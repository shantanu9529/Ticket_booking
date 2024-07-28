import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add_movies() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    movie_name: "",
    price: "",
    quantity:"",
    start:"",
    end:"",
    movie_poster:null
  });

  const handleChange = (e)=> {
    const {name, value, files } = e.target;
    setFormData(prevState =>
      (
        {
        ...prevState,
        [name]: files ? files[0] : value
        }
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // to stop reloading
    try{
      // const response = await axios.post('http://localhost:5000/movie_data',formData)
      // console.log("login successfull:",response.data);
      const response = await axios.post('http://localhost:5000/movie_data',formData,{headers:{'Content-type':'multipart/form-data'}})
      console.log("Movie added successfully:",response.data);
    }
    catch(error)
    {
      console.log("error while login: ",error);
    }
  };

  const goBack = () =>
    {
    navigate('/all_movies');
   }

  const showData = () =>
    {
      console.log(formData);
    }

    return(
        <div className='form1 login pt-3'>
        <Container className='form  w-50 '>
        <Row className="justify-content-md-center mt-5">
          <Col md="6">
            <div className="login-container p-4">
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={handleSubmit}>

                <Form.Group controlId="formBasicText" className="mt-3">
                  <Form.Label><h5>Movie Poster</h5></Form.Label>
                  <Form.Control name="movie_poster" type="file" required onChange={handleChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicText" className="mt-3">
                  <Form.Label><h5>Movie Name</h5></Form.Label>
                  <Form.Control name="movie_name" type="text" value={formData.movie_name} required onChange={handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicText " className="mt-3">
                  <Form.Label><h5>Ticket Price</h5></Form.Label>
                  <Form.Control name="price" type="number" value={formData.price} required onChange={handleChange} />
                </Form.Group>
  
                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label><h5>Quantity</h5></Form.Label>
                  <Form.Control name='quantity' type="number" value={formData.quantity} required onChange={handleChange} />
                </Form.Group> <br/><br/>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label><h5>Start From</h5></Form.Label>
                  <Form.Control name='start' type="date" value={formData.start} required onChange={handleChange} />
                </Form.Group> <br/><br/>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label><h5>End To</h5></Form.Label>
                  <Form.Control name='end' type="date" value={formData.end} required onChange={handleChange} />
                </Form.Group> <br/><br/>
  
                <Button className=' btn-secondary float-start mb-3' variant="primary" type="submit" >
                  Save
                </Button>

                <Button className="btn-secondary float-end mb-3" type="submit" onClick={()=>goBack()}>Back</Button>

              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    );
}
export default Add_movies;