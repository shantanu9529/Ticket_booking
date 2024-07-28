import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import SessionData1 from "../SessionData/SessionData1";
import { Link } from "react-router-dom";

function User_booking()
{
    const [searchParams, setSearchParams] = useSearchParams();

      const navigate = useNavigate();
      const [formData, setFormData]= useState([]);
    

      useEffect(()=>{
         const movie_id = SessionData1.getId();
         console.log(movie_id);
         //console.log(searchParams.get("_id"));
        //  console.log(searchParams.get("movie_id"));
        const fetchUserBookings = async ()=>   
          {   
            try { 
                  const response = await axios.get(`http://localhost:5000/fetch_user_booking`); 
                  console.log(response)
                  setFormData(response.data);    
              }
            catch(error)
              {
                  console.log("Error fetching User Detail",error);
              }   
          };
        
              fetchUserBookings();
            
          },[])
    return(
        <div className=" ml-4 bg login" >
        <Sidebar/>
      <div className="col-sm-1">
      </div>
      <div className="col-sm-8 mx-auto d-block">
      <table className="table border-top-0 mt-5 ">
        <thead className="table-dark">
          <tr>
            <th>Movie Name</th>
            <th>Date </th>
            <th>Tickets</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody className="table-secondary">
            {formData.map((item,index)=>(
              <tr key={item.id}>
                <td> {item.movie_name}</td>
                <td> {item.start}</td>
                <td> {item.t_quantity}</td>
                <td> {item.t_quantity*item.price}</td>
                {/* <Link to = {`/User_booking?movie_id=${item._id}`}></Link> */}
              </tr>
            ))}
          {/* <tr>
            <td>Raj</td>
            <td>50</td>
            <td>25</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Raj</td>
            <td>50</td>
            <td>25</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Raj</td>
            <td>50</td>
            <td>25</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Raj</td>
            <td>50</td>
            <td>25</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Raj</td>
            <td>50</td>
            <td>25</td>
            <td>25</td>
          </tr> */}
        </tbody>
      </table>
      </div>
    </div>
    );
}
export default User_booking;