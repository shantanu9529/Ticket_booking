import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import SessionData from "../SessionData/SessionData";
import SessionData1 from "../SessionData/SessionData1";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function Ticket_save()
{
    const [searchParams, setSearchParams] = useSearchParams();

    const [formData, setFormData]= useState({
        movie_id:'',
        movie_name:'',  
        quantity:'',
        t_quantity:'',
        price:'',
        total:'',
        start:'',
        end:''
      });

      
      
      //console.log(searchParams.get("movie_name"));
      //console.log(searchParams.get("movie_id"));
    
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
        console.log(formData);       
        try{
          const response = await axios.post('http://localhost:5000/admin_data',formData)
          console.log("Ticket Added successfully:",response.data);
        }
        catch(error)
        {
          console.log("error Adding ticket: ",error);
        }
      };

      useEffect(()=>{ // useEffect is run on opening page 
        const movie_id = searchParams.get("movie_id")
        //console.log(movie_id); 
        const fetchTicketData = async ()=>
            {
                try{
                   // const movie_id = searchParams.get("movie_id");
                    const response = await axios.get(`http://localhost:5000/fetch_movie_name/${movie_id}`);
                    setFormData(response.data);  
                    console.log(response.data);   
                }
                catch(error)
                {
                    console.log("Error fetching Ticket Data",error); 
                }
                
            };

            fetchTicketData();
            
      },[])

    return(
        <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
            <div className="bg-white p-3 rounded w-25">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label> <strong>Movie Name </strong></label>
                        <input type="text" className="form-control rounded-0" value={formData.movie_name} name="movie_name"
                         required onChange={handleChange}></input>
                    </div>

                    <div className="mb-3">
                        <label> <strong> Quantity </strong></label>
                        <input type="number" placeholder="Enter quantity" className="form-control rounded-0" name="t_quantity"
                        required onChange={handleChange}></input>
                    </div>

                    <div className="mb-3">
                        <label> <strong> Price </strong></label>
                        <input type="number" className="form-control rounded-0" value={formData.price * formData.t_quantity}
                        name="total" required onChange={handleChange}></input>
                    </div>
                    <button className="btn btn-success w-25 d-block mx-auto "> Save</button>
                </form>
            </div>
        
        </div>
    )
};