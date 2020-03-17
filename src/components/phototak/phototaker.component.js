import React from 'react'
import "./style.css"
import "./sketch"


const Photo=function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
          <link rel="stylesheet" type="text/css" href="style.css" />
          <title>Selfie App</title>
          {/*  */}
          <nav className="navbar navbar-default navbar-expand-lg navbar-light">
            <div className="navbar-header d-flex col">
              <a className="navbar-brand" href="#">Selfie App</a>
            </div>
          </nav>
          {/*Modal*/}
          <h1>Selfie App</h1>
          <div className="container">
            <div className="row center">
              <div className=" col-lg-4  px-auto py-auto">
                <b>Latitude:</b> <span id="latitude" />°<br />
                <b>Longitude</b>: <span id="longitude" />°
              </div>
              <div className=" col-lg-4  px-auto py-auto">
                <input type="text" placeholder="Enter your Hashtag" id="mood" autoComplete="off" />
                <button className="btn btn-secondary " id="submit">Submit</button>
              </div>
              <div className=" col-lg-4 x py-auto">
                <button className="btn btn-secondary" onclick="window.location.href = '/logs';">Gallery</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  
    export default Photo