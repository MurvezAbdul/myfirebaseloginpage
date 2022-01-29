import React from "react"
import {Link} from 'react-router-dom';
import "../App.css"
 
export default function Navigation() {
 
    return (
      <div>
         <Link to="/login">Log In</Link>
         <Link to="/Signup">Sign Up</Link>    
     </div>
    )} 
    