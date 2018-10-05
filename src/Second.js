import React, { Component } from 'react';
import img1 from './Img/pic1.png';
import img2 from './Img/pic2.png';
import img3 from './Img/pic3.png';
import ImgVar from './Img/home2.jpg'
import Logo from './Img/logo.png'
import { NavLink } from 'react-router-dom'
import './Css/Second.css'

export class Second extends Component {


  openNav() {


    document.getElementById('mySidenav').style.width = "100%"
  }
  closeNav() {
    document.getElementById('mySidenav').style.width = "0%";
  }

  render() {



    const sidenav = {
      height: "100%",
      width: 0,
      position: "fixed",
      zIndex: 1,
      top: 0,
      left: 0,
      backgroundColor: "#1194D3",
      overflowX: "hidden",
      transition: "0.5s",
      paddingTop: "60px",
      textAlign: "center",
    };

    const bg = {

      minHeight: "100%",
      minWidth: "1024px",

      /* Set up proportionate scaling */
      width: "100%",
      height: "auto",

      /* Set up positioning */
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: -1
    };

    const searchButton = {
      width: "10px",

      position: "absolute",
      right: 0,
      top: -2,
      right: '30px',
      background: "transparent",
      border: 0,
      padding: 10,
      border: "none",
      outline: "none",

      justifyContent: "center"

    };

    const masthead = {

      paddingTop: "2rem",

    };


    return (

      <div>

        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
          <a href="index.html">Home</a>
          <a href="second-page.html">Page2</a>
          <a href="third.html">Page3</a>
          <a href="four.html">Page4</a>
        </div>
        <nav class="navbar navbar-expand-sm   justify-content-between" style={{ backgroundColor: 'white' }} >




          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>


          <div class="collapse navbar-collapse" id="basicExampleNav">


            <ul class="navbar-nav mr-auto">
              <li class="navbar-brand">
                <li class="nav-link" style={{ cursor: "pointer" }} onClick={this.openNav}>&#9776; </li>
              </li>

              <li class="navbar-brand">
                <a class="nav-link" href="#">ABOUT US</a>
              </li>
              <li class="navbar-brand">
              <NavLink className="nav-link " to='/fourth'>CONTACT US</NavLink>
              </li>




            </ul>


            <form class="form-inline my-2 my-lg-0 ml-auto">
              <button class="btn btn-primary btn-md my-2 my-sm-0 ml-3" type="submit">SIGNIN</button>
              <button class="btn btn-primary btn-md my-2 my-sm-0 ml-3" type="submit">HOSTING WITH US</button>
            </form>
          </div>

        </nav>
        <img src={ImgVar} style={bg} />

        <header className=" text-white text-center" style={masthead}>

          <div className="container">
            <div className="row">
              <div className="col-md-2 ">
                <input type="text" className="form-control " style={{ borderRadius: "2rem" }} placeholder="Hyderabad" />
                <button type="submit" class="searchButton" style={searchButton}>
                  <i class="fa fa-search"></i>
                </button>
              </div>
              <div className="col-md-8 ">
                <img src={Logo} alt="joey rooms" ></img>

              </div>

            </div>
            <div className="row">


              <div className="col-md-4">
                <img src={img1} className="pic1" />
              </div>
              <div className="col-md-4">
                <img src={img2} className="pic2" />
              </div>
              <div className="col-md-4">
                <img src={img3} className="pic3" />
              </div>


            </div>
          </div>
        </header>
      </div>

    );
  }
}
export default Second;
