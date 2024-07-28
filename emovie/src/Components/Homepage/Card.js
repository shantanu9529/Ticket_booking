import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div>

<div className="container mt-5">
  <div className="row">
    
    <div className="col-sm-3 mb-4">
      <div className="card">
        <img src="./movie_images/image_2.jpg"  className="card-img-top img" alt="Card image 1"/>
        <div className="card-body">
          <h5 className="card-title text-center">Bhediya</h5>
          <p> </p>
        </div>
      </div>
    </div>
    
    <div className="col-sm-3 mb-4">
      <div className="card">
        <img src="./movie_images/image_1.avif" className="card-img-top img" alt="Card image 2"/>
        <div className="card-body">
          <h5 className="card-title text-center">Shaitaan</h5>
          <p> </p>
        </div>
      </div>
    </div>
    
    <div className="col-sm-3 mb-4">
      <div className="card">
        <img src="./movie_images/image_3.jpg" className="card-img-top img" alt="Card image 3"/>
        <div className="card-body">
          <h5 className="card-title text-center">Thor</h5>
          <p> </p>
         
        </div>
      </div>
    </div>
    
    <div className="col-sm-3 mb-4">
      <div className="card">
        <img src="./movie_images/image_9.jpg" className="card-img-top img" alt="Card image 4"/>
        <div className="card-body">
          <h5 className="card-title text-center">Aavesham</h5>
          <p> </p>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
   
    <div className="col-sm-3 mb-4 ">
      <div className="card">
        <img src="./movie_images/image_4.jpg" className="card-img-top img" alt="Card image 5"/>
        <div className="card-body">
          <h5 className="card-title text-center">Salaar</h5>
          <p> </p>
        </div>
      </div>
    </div>
    
    <div className="col-sm-3 mb-4">
      <div className="card">
        <img src="./movie_images/image_5.jpg" className="card-img-top img" alt="Card image 6"/>
        <div className="card-body">
          <h5 className="card-title text-center">Fighter</h5>
          <p> </p>
        </div>
      </div>
    </div>
    
    <div className="col-sm-3 mb-4">
      <div className="card">
        <img src="./movie_images/image_6.jpg" className="card-img-top img" alt="Card image 7"/>
        <div className="card-body">
          <h5 className="card-title text-center">Leo</h5>
          <p> </p>
          </div>
      </div>
    </div>
    
    <div className="col-sm-3 mb-4">
      <div className="card">
        <img src="./movie_images/image_7.jpg" className="card-img-top img" alt="Card image 8"/>
        <div className="card-body">
          <h5 className="card-title text-center">Joker</h5>
          <p> </p>
          </div>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}
