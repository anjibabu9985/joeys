import React, { Component } from 'react';
import './Css/Second.css'
import room from './Img/room.jpg'
import './Css/Third.css';
export class Second extends Component {


    openNav() {


        document.getElementById('mySidenav').style.width = "100%"
    }
    closeNav() {
        document.getElementById('mySidenav').style.width = "0%";
    }

    render() {



        const search = {
            backgroundColor: "#1D68BB",

            height: "80px",
        }


        const leftdiv = {
            marginTop: "13px",
            border: "1px solid #eee",
            boxShadow: "0 0 5px #888",
            webkitBoxShadow: "0 0 5px#888",
            boxShadow: "0 0 5px #888",
        }

        const anyClass = {
            height: "450px",
            overflowY: "scroll",
            overflowX: 'hidden',

        }
        const searchButton = {
            width: "70px",
            alignItems: "center",
            position: "absolute",
            right: 0,
            top: 5,
            height: "100%",
            background: "transparent",
            border: 0,
            padding: 0,
            cursor: "pointer",
            display: "flex",
            border: "none",
            outline: "none",
            justifyContent: "center"

        }

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
                                <a class="nav-link" href="#">CONTACT US</a>
                            </li>




                        </ul>


                        <form class="form-inline my-2 my-lg-0 ml-auto">
                            <button class="btn btn-primary btn-md my-2 my-sm-0 ml-3" type="submit">SIGNIN</button>
                            <button class="btn btn-primary btn-md my-2 my-sm-0 ml-3" type="submit">HOSTING WITH US</button>
                        </form>
                    </div>

                </nav>
                <div className="container-fluid" >
                    <div className="row" >

                        <div class="col-md-3" style={search}>
                            <label className="text-white" >LOCATION</label>
                            <input type="text" id="soruce" class="form-control" placeholder="Hyderabad,India" name="sourcePlace" autocomplete="off" />
                            <button type="submit" class="searchButton" style={searchButton}>
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                        <div class="col-md-3" style={search}>
                            <label className="text-white">CHECK IN</label>
                            <input type="date" id="datepicker" class="form-control" name="sourcePlace1" autocomplete="off" />
                        </div>
                        <div class="col-md-3" style={search}>
                            <label className="text-white">CHECK OUT</label>
                            <input type="date" id="soruceLocation" class="form-control" name="sourcePlace1" autocomplete="off" />
                        </div>
                        <div class="col-md-3" style={search}>
                            <label className="text-white">GUESTS</label>
                            <select id="soruceLocation" class="form-control" placeholder="" name="sourcePlace" autocomplete="off">
                                <option>1 Guest</option>
                                <option>2 Guests </option>
                                <option>3 Guests</option>
                            </select>
                        </div>
                    </div>
                </div>
                <br />

                <br />
                <div className="container-fluid">
                    <div className="row" >
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-md-3">

                                    <button class=" btn btn-default form-control" type="button"> <i className="fas fa-filter"></i>Filter</button>


                                </div>
                                <div className="col-md-3">

                                    <button class=" btn btn-default form-control" type="button"><i class="fas fa-sort"></i>Sort</button>


                                </div>
                                <div className="col-md-6">

                                    <select id="soruceLocation" class="form-control " placeholder="Search By Area" name="sourcePlace" autocomplete="off">

                                        <option value='0'>Search By Area</option>
                                        <option value='1'>Kukatpally</option>
                                        <option value='2'>SR Nagar</option>
                                        <option value='3'>Ammerpet</option>
                                    </select>



                                </div>

                            </div>
                            <br />
                            <div style={anyClass} className="scroll"  >
                                <div class="card" >
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div class="card-body">

                                                <img class="card-img-top" src={room} alt="Card image cap" />

                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Borra lakshmi nilayam 201</h5>
                                                <p class="card-text">Shared room in 3BHK independent house in Hakimpet.</p>
                                                <button type="submit" class="btn btn-primary">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" >
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div class="card-body">

                                                <img class="card-img-top" src={room} alt="Card image cap" />

                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Borra lakshmi nilayam 201</h5>
                                                <p class="card-text">Shared room in 3BHK independent house in Hakimpet.</p>
                                                <button type="submit" class="btn btn-primary">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" >
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div class="card-body">

                                                <img class="card-img-top" src={room} alt="Card image cap" />

                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Borra lakshmi nilayam 201</h5>
                                                <p class="card-text">Shared room in 3BHK independent house in Hakimpet.</p>
                                                <button type="submit" class="btn btn-primary">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>     <div class="card" >
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div class="card-body">

                                                <img class="card-img-top" src={room} alt="Card image cap" />

                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Borra lakshmi nilayam 201</h5>
                                                <p class="card-text">Shared room in 3BHK independent house in Hakimpet.</p>
                                                <button type="submit" class="btn btn-primary">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" >
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div class="card-body">

                                                <img class="card-img-top" src={room} alt="Card image cap" />

                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Borra lakshmi nilayam 201</h5>
                                                <p class="card-text">Shared room in 3BHK independent house in Hakimpet.</p>
                                                <button type="submit" class="btn btn-primary">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" >
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div class="card-body">

                                                <img class="card-img-top" src={room} alt="Card image cap" />

                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Borra lakshmi nilayam 201</h5>
                                                <p class="card-text">Shared room in 3BHK independent house in Hakimpet.</p>
                                                <button type="submit" class="btn btn-primary">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card" >
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div class="card-body">

                                                <img class="card-img-top" src={room} alt="Card image cap" />

                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Borra lakshmi nilayam 201</h5>
                                                <p class="card-text">Shared room in 3BHK independent house in Hakimpet.</p>
                                                <button type="submit" class="btn btn-primary">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card" >
                                    <div className="row">
                                        <div className="col-md-4">

                                            <div class="card-body">

                                                <img class="card-img-top" src={room} alt="Card image cap" />

                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Borra lakshmi nilayam 201</h5>
                                                <p class="card-text">Shared room in 3BHK independent house in Hakimpet.</p>
                                                <button type="submit" class="btn btn-primary">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card" >
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div class="card-body">

                                                <img class="card-img-top" src={room} alt="Card image cap" />

                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Borra lakshmi nilayam 201</h5>
                                                <p class="card-text">Shared room in 3BHK independent house in Hakimpet.</p>
                                                <button type="submit" class="btn btn-primary">View</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-8">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15224.687175898136!2d78.38991064999999!3d17.4514897!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1538111178144" allowfullscreen></iframe>
                            </div>


                        </div>
                    </div>

                </div>







            </div >

        );
    }
}
export default Second;
