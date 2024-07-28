import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";
import Slider from "./Slider";
import Header from "../Head/Header";

export default function Homepage() 
{
    return(
        <div className="clr"> 
            <Header/>
            
            <Slider/>
            
            <Card/>
        </div>
    );
}