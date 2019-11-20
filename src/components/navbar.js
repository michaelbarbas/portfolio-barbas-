import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {
    console.log(props)

    return(
        <nav className = "navigation-wrapper">
            <div className = "container">
                
                <ul className = "right">
                    <li><Link to = "/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to= "/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)