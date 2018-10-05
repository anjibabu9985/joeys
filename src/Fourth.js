import React, { Component } from 'react';

import room from './Img/room.jpg'
import './Css/tabstyles.css';
import { NavLink } from 'react-router-dom';

export class Third extends Component {


    openNav() {


        document.getElementById('mySidenav').style.width = "100%"
    }
    closeNav() {
        document.getElementById('mySidenav').style.width = "0%";
    }

    function(window) {

        'use strict';

        function extend(a, b) {
            for (var key in b) {
                if (b.hasOwnProperty(key)) {
                    a[key] = b[key];
                }
            }
            return a;
        }

        function CBPFWTabs(el, options) {
            this.el = el;
            this.options = extend({}, this.options);
            extend(this.options, options);
            this._init();
        }

        CBPFWTabs.prototype.options = {
            start: 0
        };

        CBPFWTabs.prototype._init = function () {
            // tabs elems
            this.tabs = [].slice.call(this.el.querySelectorAll('nav > ul > li'));
            // content items
            this.items = [].slice.call(this.el.querySelectorAll('.content-wrap > section'));
            // current index
            this.current = -1;
            // show current content item
            this._show();
            // init events
            this._initEvents();
        };

        CBPFWTabs.prototype._initEvents = function () {
            var self = this;
            this.tabs.forEach(function (tab, idx) {
                tab.addEventListener('click', function (ev) {
                    ev.preventDefault();
                    self._show(idx);
                });
            });
        };

        CBPFWTabs.prototype._show = function (idx) {
            if (this.current >= 0) {
                this.tabs[this.current].className = this.items[this.current].className = '';
            }
            // change current
            this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
            this.tabs[this.current].className = 'tab-current';
            this.items[this.current].className = 'content-current';
        };

        // add to global namespace
        window.CBPFWTabs = CBPFWTabs;

    };

    render() {


        const section = {
            clear: "both",
            paddingTop: "10px",
            display: "none"
        }



        const tab_container = {
            width: "90%",
            margin: "0 auto",
            paddingTop: "70px",
            position: "relative",

        }



        const label = {
            fontWeight: "700",
            fontSize: "18px",
            display: "block",
            float: "left",
            width: "16%",
            height: "60px",
            padding: "1.5em",

            cursor: "pointer",
            textDecoration: "none",
            textAlign: "center",
            background: "#f0f0f0"
        }




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


                        <form class="form-inline my-2 my-lg-0 ml-auto">
                            <button class="btn btn-primary btn-md my-2 my-sm-0 ml-3" type="submit">SIGNIN</button>
                            <button class="btn btn-primary btn-md my-2 my-sm-0 ml-3" type="submit">HOSTING WITH US</button>
                        </form>
                    </div>

                </nav>

                <br />

                <br />
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


                            <div className="container-fluid" >
                                <ul class="nav nav-tabs " style={{ backgroundColor: '#ebebeb' }} >
                                    <li class="active"><a data-toggle="tab" href="#home">HOME</a></li>
                                    <li><a data-toggle="tab" href="#menu1">HOTEL</a></li>
                                    <li><a data-toggle="tab" href="#menu2">REVIEWS</a></li>
                                    <li><a data-toggle="tab" href="#menu3">AVAILABILITY</a></li>
                                    <li><a data-toggle="tab" href="#menu4">PRICE</a></li>
                                    <li><a data-toggle="tab" href="#menu5"> TERMS</a></li>
                                    <li><a data-toggle="tab" href="#menu6">SIMILAR </a></li>
                                </ul>

                                <div class="tab-content" style={{ border: 'none' }}>
                                    <div id="home" class="tab-pane fade in active">
                                        <h3 style={{ textAlign: 'center' }}>HOME</h3>
                                        <p>Joey Rooms is a leading online accommodation site. We’re passionate about travel. Every day we inspire and reach millions of travelers across 90 local websites in 41 languages. So when it comes to booking the perfect hotel, vacation rental, resort, apartment, guest house or treehouse – we’ve got you covered. With hundreds of thousands of properties in over 200 countries and territories, we provide incomparable choice with a Price Guarantee. Our site is fun and simple to use and we offer innovative online tools and a top rated mobile app.</p>
                                    </div>
                                    <div id="menu1" class="tab-pane fade">
                                        <h3 style={{ textAlign: 'center' }}>HOTEL</h3>
                                        <p>Joey Rooms is a leading online accommodation site. We’re passionate about travel. Every day we inspire and reach millions of travelers across 90 local websites in 41 languages. So when it comes to booking the perfect hotel, vacation rental, resort, apartment, guest house or treehouse – we’ve got you covered. With hundreds of thousands of properties in over 200 countries and territories, we provide incomparable choice with a Price Guarantee. Our site is fun and simple to use and we offer innovative online tools and a top rated mobile app.</p>
                                    </div>
                                    <div id="menu2" class="tab-pane fade">
                                        <h3 style={{ textAlign: 'center' }}>REVIEWS</h3>
                                        <p>Joey Rooms is a leading online accommodation site. We’re passionate about travel. Every day we inspire and reach millions of travelers across 90 local websites in 41 languages. So when it comes to booking the perfect hotel, vacation rental, resort, apartment, guest house or treehouse – we’ve got you covered. With hundreds of thousands of properties in over 200 countries and territories, we provide incomparable choice with a Price Guarantee. Our site is fun and simple to use and we offer innovative online tools and a top rated mobile app.</p>
                                    </div>
                                    <div id="menu3" class="tab-pane fade">
                                        <h3 style={{ textAlign: 'center' }}>AVAILABILITY</h3>
                                        <p>Joey Rooms is a leading online accommodation site. We’re passionate about travel. Every day we inspire and reach millions of travelers across 90 local websites in 41 languages. So when it comes to booking the perfect hotel, vacation rental, resort, apartment, guest house or treehouse – we’ve got you covered. With hundreds of thousands of properties in over 200 countries and territories, we provide incomparable choice with a Price Guarantee. Our site is fun and simple to use and we offer innovative online tools and a top rated mobile app.</p>
                                    </div>
                                    <div id="menu4" class="tab-pane fade">
                                        <h3 style={{ textAlign: 'center' }}>PRICE</h3>
                                        <p>Joey Rooms is a leading online accommodation site. We’re passionate about travel. Every day we inspire and reach millions of travelers across 90 local websites in 41 languages. So when it comes to booking the perfect hotel, vacation rental, resort, apartment, guest house or treehouse – we’ve got you covered. With hundreds of thousands of properties in over 200 countries and territories, we provide incomparable choice with a Price Guarantee. Our site is fun and simple to use and we offer innovative online tools and a top rated mobile app.</p>
                                    </div>
                                    <div id="menu5" class="tab-pane fade">
                                        <h3 style={{ textAlign: 'center' }}>TERMS</h3>
                                        <p>Joey Rooms is a leading online accommodation site. We’re passionate about travel. Every day we inspire and reach millions of travelers across 90 local websites in 41 languages. So when it comes to booking the perfect hotel, vacation rental, resort, apartment, guest house or treehouse – we’ve got you covered. With hundreds of thousands of properties in over 200 countries and territories, we provide incomparable choice with a Price Guarantee. Our site is fun and simple to use and we offer innovative online tools and a top rated mobile app.</p>
                                    </div>
                                    <div id="menu6" class="tab-pane fade">
                                        <h3 style={{ textAlign: 'center' }}>SIMILAR</h3>
                                        <p>Joey Rooms is a leading online accommodation site. We’re passionate about travel. Every day we inspire and reach millions of travelers across 90 local websites in 41 languages. So when it comes to booking the perfect hotel, vacation rental, resort, apartment, guest house or treehouse – we’ve got you covered. With hundreds of thousands of properties in over 200 countries and territories, we provide incomparable choice with a Price Guarantee. Our site is fun and simple to use and we offer innovative online tools and a top rated mobile app.</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-6">
                        
                            <div className="container-fluid " >

                                <div class="tabs tabs-style-circle">
                                    <ul class="nav"  >

                                        <li><a data-toggle="tab" style={{marginLeft:'70px',marginTop:'30px'}} href="#img1" class="icon icon-plug"><span>Gallery</span></a></li>
                                        <li><a data-toggle="tab" href="#map2" class="icon icon-plug"><span>3d</span></a></li>
                                    </ul>


                                    <div class="tab-content" style={{ border: 'none' }}>
                                        <div id="img1" class="tab-pane fade in active">
                                            <img src="http://agasthyaapplabs.com/joey/images/page3/room.jpg" />
                                        </div>
                                        <div id="map2" class="tab-pane fade">
                                            <section id="section-circle-3"><iframe src="https://www.google.com/maps/embed?pb=!4v1538643782187!6m8!1m7!1sCAoSK0FGMVFpcFB5OU5mNEJFRWVzVmhGM1JQaFVZejNVb2JQaXhNWmJtSmxNSDQ.!2m2!1d17.447028870235!2d78.383416625628!3f47.37870797577963!4f-42.74542657579774!5f0.7820865974627469" frameborder="0" allowfullscreen></iframe></section>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>







            </div >


        );
    }
}
export default Third;
