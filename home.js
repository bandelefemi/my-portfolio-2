import React from "react";
import {Link} from 'react-router-dom'
import femi from './femi.jpg' 


export default function Home() {
    return (
        <main>


            
            <div className='main-content'>
                <div className='image-section'>
                    <img className="femi" src={femi} alt='' />
                </div>
               <div className='my-name'>
                    <h1>FEMI BANDELE</h1>
                </div> 
                <div className='about'>
                    <h3>PHOTOGRAPHER| FRONT-END DEVELOPER</h3>
                </div> 
               <div className='links'>
                    <div className='photography'>
                        <Link to={"/photography"}>PHOTOGRAPHy</Link>
                    </div>
                    <div className='web-design'>
                        WEB DESIGN
                    </div> 
                </div> 
            </div>
        </main>
    )
}