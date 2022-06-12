import React from 'react';
import {NavLink} from 'react-router-dom';


const Menu=()=>{
    return(
        <>
<NavLink className="style" activeClassName="active-class"  to='/about'>ABOUT US </NavLink>
<NavLink className="style" activeClassName="active-class" to='/contact'>CONTACT US</NavLink>
<br />
    <a href='/about'>about </a>
    <a  href='/contact'>contact</a>
    </>
    )}
export default Menu