import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

function Book_ticket(){
        const [movie,setMovie] =useState("");
        const [date,setDate] =useState("");
        const [show,setShow] =useState("");
        const [quantity,setQuantity] =useState("");
        const [price,setPrice] =useState("");
    
        function showData()
        {
            console.log("Movie Name :" +movie);
            console.log("Date :" +date);
            console.log("Show Time :" +show);
            console.log("Quantity :" +quantity);
            console.log("Price :" +price);
            //console.log("student class" +student.class);
        } 
        function handleSelectChange()
        {
          console.log("handle");
        }

    return(
        <div className='form1 login pt-3'>
        <Container className='form  w-50 '>
        <Row className="justify-content-md-center mt-5">
          <Col md="6">
            <div className="login-container p-4">
              <h2 className="text-center mb-4">Book Tickets</h2>
              <Form onSubmit={(e)=>{e.preventDefault(); showData()}}>

                <Form.Group controlId="formBasicText" className="mt-3">
                  <Form.Label><h5>Movie Name</h5></Form.Label>
                  {/* <Form.Control name="movie" type="dropdown" value={movie} required onChange={(e) => setMovie(e.target.value)} /> */}
                  <select class="form-select" onChange={handleSelectChange}> 
                  <option selected value={movie} >Aavesham</option>
                  <option value={movie} >Leo</option>
                  <option value={movie} >Salaar</option>
                  <option value={movie} >Shaitaan</option>
                  </select>
                </Form.Group>

                <Form.Group controlId="formBasicText " className="mt-3">
                  <Form.Label><h5>Date</h5></Form.Label>
                  <Form.Control name="date" type="date" value={date} required onChange={(e) => setDate(e.target.value)} />
                </Form.Group>
  
                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label><h5>Show Time</h5></Form.Label>
                  <Form.Control name='show' type="time" value={show} required onChange={(e) => setShow(e.target.value)} />
                </Form.Group> <br/>

                <Form.Group controlId="formBasicPassword" >
                  <Form.Label><h5>Quantity</h5></Form.Label>
                  <Form.Control name='quantity' type="number" value={quantity} required onChange={(e) => setQuantity(e.target.value)} />
                </Form.Group> <br/>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label><h5>Price</h5></Form.Label>
                  <Form.Control name='price' type="number" value={price} required onChange={(e) => setPrice(e.target.value)} />
                </Form.Group> <br/><br/>
  
                <Button className=' btn-secondary mx-auto d-block' variant="primary" type="submit" >
                  Save
                </Button>

              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    );
}
export default Book_ticket;