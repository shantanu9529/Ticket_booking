import React, { useEffect, useState } from "react";
import Card from "../Homepage/Card";
import axios from "axios";
import SessionData from "../SessionData/SessionData";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";


function User_movies() {

    const [formData, setFormData]= useState([]);

    useEffect(()=>{ // useEffect is run on opening page 
        //console.log (SessionData.getId());
        //console.log(SessionData.getId());
        const fetchUserMovie = async ()=>
            {
               
                try{
                    //console.log(SessionData.getId());
                    const response = await axios.get('http://localhost:5000/fetch_movies');
                    setFormData(response.data); 
                    //console.log(response.data);
                    
                }
                catch(error)
                {
                    console.log("Error fetching user movies",error);
                }
                
            };

            if(SessionData.getId)
                {
                    fetchUserMovie();
                }
            
      },[])


  return (
          <div className="d-flex row m-0  ">
            
            {formData.map((item,index)=>(
                <div class="card col-sm-3 mx-3" style={{ "width": "18rem"}}>
                <img class="card-img-top" src={`assets/movies/photos/${item.movie_poster}`} alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">{item.movie_name}</h5>
                  <p class="card-text">{item.price}</p>
                  <p>{item.start}</p>
                  <p>{item.end}</p>
                  <Link to = {`/Ticket_save?movie_id=${item._id}`} class="btn btn-primary">Book</Link>
                </div>
              </div>
            ))}
              
        </div>
        
  )};
export default User_movies;
