 import React from "react";
 import { BrowserRouter as Router, Routes, Route,  Link } from 'react-router-dom';
 import About from './About';
 import HeadTail from './Head & Tail';

  export default function Home(){
    return(
      <Router>
      <div className="App">
      
        <Link to="/About">About Us</Link> <br></br>
      
        <Link to="/Head & Tail">Head&Tail</Link><br></br>
      
      <Routes>

      <Route path='/About' element={< About />}></Route>
      <Route path='/Head & Tail' element={< HeadTail />}></Route>
      </Routes>
      </div>
      </Router>
         
    )
}