import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Session_data_admin from "../Session_data_admin/Session_data_admin";

export default function All_movies() {
    
      const navigate = useNavigate();
      const [formData, setFormData]= useState([]);

  useEffect(()=>{
    const fetchMovieData = async ()=>
      {
        //console.log(Session_data_admin.getId());
        try { 
              const response = await axios.get(`http://localhost:5000/fetch_movies`); 
              //console.log(Session_data_admin.getId());
              console.log(response)
              setFormData(response.data);    
          }
        catch(error)
          {
              console.log("Error fetching User Detail",error);
          }   
      };
      if(Session_data_admin.getId())
        {
          fetchMovieData();
        }
      },[])
  return (
    <div>
    <div className=" ml-4 pt-3 bg login" >
        <Sidebar/>
      <div className="col-sm-1">
      </div>
      <div className="col-sm-9 mx-auto d-block">
      <Link class="btn btn-primary mx-auto d-grid gap-2 col-1 float-end " to={'/Add_movies'} role="button"> Add </Link> <br/><br/>
      <table className="table border-top-0">
        <thead className="table-dark">
          <tr>
            <th>Sr.No</th>
            <th>Movie Name</th>
            <th>Poster</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody className="table-secondary">
            {formData.map((item,index)=>(
              <tr key={item.id}>
                <td> {index+1}</td>
                <td><img height={100} width={100} src={`assets/movies/photos/${item.movie_poster}`}/> </td>
                <td> {item.movie_name}</td>
                <td> {item.price}</td>
                <td> {item.quantity}</td>
              </tr>
            ))}
          {/* <tr>
            <td> Raj</td>
            <td>50</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Raj</td>
            <td>50</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Raj</td>
            <td>50</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Raj</td>
            <td>50</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Raj</td>
            <td>50</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Raj</td>
            <td>50</td>
            <td>25</td>
          </tr> */}
        </tbody>
      </table>
      </div>
    </div>
    </div>
  );
}
