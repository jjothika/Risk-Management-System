import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import About from './About'
import Service from './Service'
import Contact from './Contact'
    const Home = () => {
      return (
        <div>
         <div className="c1">
         <div className="c2">
          <div className="c3">
         <Link className="c4" to="About/">About us</Link>
         <Link className="c4" to="/Contact">Contact us</Link>
         <Link className="c4" to="/Service">Service us</Link>
         </div>
        </div>
        </div>
        </div>
      )
    }
    
    export default Home