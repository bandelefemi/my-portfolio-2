import React from "react";
import {  NavLink } from 'react-router-dom'
import "./carousel.min.css";
import './carousel.css'
import { Carousel } from "react-responsive-carousel";
import image1 from './assets/1-1.jpg'
import image2 from './assets/2-2.jpg'
import image3 from './assets/3-4.jpg'
import image4 from './assets/4-3.jpg'
import image5 from './assets/5-5.jpg'




export default function Photography() {

    const Navbar =()=> {
        return (
            <nav className="nav-items">
                <div><NavLink 
                        to={"/"}
                        className={({ isActive })=> isActive? 'active' : 'inActive'}>
                            HOME</NavLink>
                        </div>
                <div><NavLink 
                        to={"/photography"} 
                        className={({ isActive })=> isActive? 'active' : 'inActive'}>
                            PHOTOGRAPHY</NavLink>
                            </div>
                <div><NavLink 
                        to={'/contact'}
                        className={({ isActive })=> isActive? 'active' : 'inActive'}>
                            CONTACT</NavLink>
                            </div>
                
            </nav>
        )
    }

    return (
        <div className="photo-container">
            <div className="photo-header">
                <div className="photo-logo">
                    <h3>BANDELE FEMI</h3>
                </div>
                <div className="photo-nav">
                    <Navbar />
                </div>
            </div>
            <div className="photo-main">
                <div className="photo-left">
                    <div className="left-menu">
                        Facebook
                    </div>
                    <div className="left-menu two">
                        Instagram
                    </div>
                </div>
                <div className="photo-slide">
                    
                <Carousel 
                    autoPlay='true' 
                    showThumbs={false} 
                    interval='6000' 
                    infiniteLoop={true}
                    swipeable={true}
                    showStatus={false}
                    emulateTouch={true}>
                    <div className="slide-image">
                        <img src={image1} alt=""/>
                        <p className="caption">caption 1</p>
                    </div>
                    <div className="slide-image">
                        <img src={image2} alt=""/>
                        <p className="caption">caption 2</p>
                    </div>
                    <div className="slide-image">
                        <img src={image3} alt=""/>
                        <p className="caption">caption 3</p>
                    </div>
                    <div className="slide-image">
                        <img src={image5} alt=""/>
                        <p className="caption">caption 3</p>
                    </div>
                    <div className="slide-image">
                        <img src={image4} alt=""/>
                        <p className="caption">caption 3</p>
                    </div>
                </Carousel>

                </div>
                <div className="photo-right">
                <div className="left-menu">
                        About
                    </div>
                    <div className="left-menu two">
                        Categories
                    </div>
                </div>
            </div>
        </div>
    )
}