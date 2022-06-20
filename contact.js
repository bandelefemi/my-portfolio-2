import React, {useRef} from "react";
import { NavLink } from 'react-router-dom'
import emailkey from "./emailkey";
import emailjs from '@emailjs/browser'


export default function Contact(){


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(emailkey.emailKey, emailkey.tempKey, form.current, emailkey.pubKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };



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

    return(
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
                    
                </div>
                <div className="contact-data">
                    <div className="reach-me">
                        <div className="phone wrap">
                            <div className="icon-wrap">
                                img
                            </div>
                            <div className="icon-data">
                                +234 (0) 81 3662 6559
                            </div>
                        </div>
                        <div className="email wrap">
                            <div className="icon-wrap">
                                image
                            </div>
                            <div className="icon-data">
                                me@bandelefemi.com
                            </div>
                        </div>
                        <div className="location wrap">
                             <div className="icon-wrap">
                                image
                            </div>
                            <div className="icon-data">
                                Abuja, Nigeria
                            </div>
                        </div>
                    </div>
                    <div className="email-area">
                        <div>
                            <div className="drop-line">Drop me a line</div>
                            <form className="email-form" ref={form} onSubmit={sendEmail}>
                                <input 
                                    type='email' 
                                    placeholder="enter your email"
                                    name="email"/>
                                <input 
                                    type="text" 
                                    placeholder="enter your name"
                                    name="name"/>
                                <input 
                                    type="textarea" 
                                    placeholder="speak to me.." 
                                    className="text-area" 
                                    id="text-area"
                                    name="name"/>
                                <button >Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="photo-right">
                    
                </div>
            </div>
        </div>
    )
}