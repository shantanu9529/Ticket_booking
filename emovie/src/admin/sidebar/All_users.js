import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Session_data_admin from "../Session_data_admin/Session_data_admin";

function All_users() {

      const navigate = useNavigate();
      const [formData, setFormData]= useState([]);
      
      useEffect(()=>{
        const fetchUserData = async ()=>
          {
            //console.log(Session_data_admin.getId());
            try { 
                  const response = await axios.get(`http://localhost:5000/fetch_user_data`); 
                  console.log(Session_data_admin.getId());
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
              fetchUserData();
            }
          },[])
  
  return (
    <div className="bg login ">
        <Sidebar/>
      <div className="col-sm-2">

      </div>
      <div className="table-responsive col-md-9 ">
        <table className="table mt-5">
          <thead className="table-dark">
            <tr> 
              <th>Sr.no.</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Username</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody className="table-secondary">
            {formData.map((item,index)=>(
              <tr key={item.id}>
                <td> {index+1}</td>
                <td> {item.full_name}</td>
                <td> {item.gender}</td>
                <td> {item.user_name}</td>
                <td> {item.password}</td>
              </tr>
            ))}
            {/* <tr>
              <td> Raj</td>
              <td>50</td>
              <td>25</td>
              <td>fail</td>
              <td>fail</td>
            </tr> */}
            

          {/* {
            data.map(
              (user)=>{
                return(
                  <tr>
                  <td>{user.id}</td>
                  <td>{user.Fullname}</td>
                  <td>{user.Mob}</td>
                  <td>{user.Address}</td>
                  <td>{user.Action}</td>
                  </tr>
                )
              }
            )
          } */}
        
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default All_users;
