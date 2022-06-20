import React from 'react'
// import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Photography from './photography'
import Home from './home'
import Contact from './contact'


export default function App(){

    // const [scroll, setScroll] = useState(false)

    // useEffect(()=> {
    //     window.addEventListener("scroll", ()=> {
    //         setScroll(window.scrollY >10)
    //     })
    //     return function cleanup(){
    //         setScroll(true)
    //     }
    // }, [])

    return (
        <Router>
        
            <Routes>

                <Route path='/photography' element={<Photography/>} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/' element={<Home/>} />
            </Routes>
        </Router>
    )
}