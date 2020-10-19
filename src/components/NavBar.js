import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const NavBar =()=>{
    return (
        <nav>
            <div className="container">
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/aboutus">AboutUs</Link></li>
                    <li><Link to="/policy">Policy</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar