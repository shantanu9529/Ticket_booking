import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../Sidebar/Sidebar.js";
import Card from "../Homepage/Card.js";



function Dashboard()
{
    return(
        <div className="tc p-5 m-5">
        <div className="row ">
            <div className="col-sm-2">
                <Sidebar/>
            </div>
            <div className="col-sm-10">
                <Card/>
            </div>
            </div>   
        </div>
    );
}
export default Dashboard;