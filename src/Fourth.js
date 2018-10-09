import React, { Component } from 'react';
import './Css/tabs.css'
import './Css/Fourth.css'

import room from './Img/room.jpg'

import { NavLink } from 'react-router-dom';

export class Third extends Component {


    openNav() {


        document.getElementById('mySidenav').style.width = "100%"
    }
    closeNav() {
        document.getElementById('mySidenav').style.width = "0%";
    }




    render() {
        const span = {
            fontSize: "10px"
        }



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
                        <form class="form-inline my-2 my-lg-0 ml-auto" >
                            <button class="btn btn-primary btn-md my-2 my-sm-0 ml-3" type="submit">SIGNIN</button>
                            <button class="btn btn-primary btn-md my-2 my-sm-0 ml-3" type="submit">HOST WITH US</button>
                        </form>


                    </div>

                </nav>

                <div className="container-fluid">
                    <div className="row" >
                        <div className="col-md-6">


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
                            <div class="row">


                                <div class="card" >
                                    <ul class="nav nav-tabs" role="tablist" >
                                        <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">  <span>HOTEL</span></a></li>
                                        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"> <span>REVIEWS</span></a></li>
                                        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">  <span>AVAILABILITY</span></a></li>
                                        <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab"> <span>PRICE</span></a></li>
                                        <li role="presentation"><a href="#extra" aria-controls="settings" role="tab" data-toggle="tab">  <span>TERMS & CONDITIONS</span></a></li>
                                        <li role="presentation"><a href="#extra" aria-controls="settings" role="tab" data-toggle="tab">  <span>SIMILAR LISTINGS</span></a></li>
                                    </ul>


                                    <div class="tab-content">
                                        <div role="tabpanel" class="tab-pane active" id="home">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                                        <div role="tabpanel" class="tab-pane" id="profile">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                                        <div role="tabpanel" class="tab-pane" id="messages">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                                        <div role="tabpanel" class="tab-pane" id="settings">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage..</div>
                                        <div role="tabpanel" class="tab-pane" id="extra">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage..</div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        {/* <div className="col-md-6" >
                            <section class="design-process-section" id="process-tab">



                                <div class="tab-content" style={{ border: 'none' }}>
                                    <div role="tabpanel" class="tab-pane active" id="discover">
                                        <div class="design-process-content">
                                            <div class="embed-responsive embed-responsive-16by9">
                                                <img class="img-responsive" src="http://agasthyaapplabs.com/joey/images/page3/room.jpg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" class="tab-pane" id="strategy">
                                        <div class="design-process-content">
                                            <div class="embed-responsive embed-responsive-16by9">

                                                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Iff08KpP2vY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" class="tab-pane" id="optimization">
                                        <div class="design-process-content">
                                            <div class="embed-responsive embed-responsive-16by9">

                                                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Iff08KpP2vY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" class="tab-pane" id="content">
                                        <div class="design-process-content">
                                            <div class="embed-responsive embed-responsive-16by9">

                                                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Iff08KpP2vY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" class="tab-pane" id="reporting">
                                        <div class="design-process-content">
                                            <div class="embed-responsive embed-responsive-16by9">

                                                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Iff08KpP2vY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="nav nav-tabs process-model more-icon-preocess" role="tablist">
                                        <li role="presentation" class="active"><a href="#discover" aria-controls="discover" role="tab" data-toggle="tab"><i class="fa fa-search" aria-hidden="true"></i>

                                        </a></li>
                                        <li role="presentation"><a href="#strategy" aria-controls="strategy" role="tab" data-toggle="tab"><i class="fa fa-send-o" aria-hidden="true"></i>

                                        </a></li>
                                        <li role="presentation"><a href="#optimization" aria-controls="optimization" role="tab" data-toggle="tab"><i class="fa fa-qrcode" aria-hidden="true"></i>

                                        </a></li>
                                        <li role="presentation"><a href="#content" aria-controls="content" role="tab" data-toggle="tab"><i class="fa fa-newspaper-o" aria-hidden="true"></i>

                                        </a></li>
                                        <li role="presentation"><a href="#reporting" aria-controls="reporting" role="tab" data-toggle="tab"><i class="fa fa-clipboard" aria-hidden="true"></i>

                                        </a></li>
                                    </ul>
                                </div>



                            </section>

                        </div> */}

                    </div>

                </div>

            </div>










        );
    }
}
export default Third;
