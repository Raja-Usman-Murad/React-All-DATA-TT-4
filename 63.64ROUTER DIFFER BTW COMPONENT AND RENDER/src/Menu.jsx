import React from 'react';
import {NavLink} from 'react-router-dom';


const Menu=()=>{
    return(
        <>
        <div className="main">
<NavLink exact className="style" activeClassName="active-class" to='/'>HOME</NavLink>
<NavLink exact className="style" activeClassName="active-class" to='/contact'>CONTACT US</NavLink>
<NavLink exact className="style" activeClassName="active-class"  to='/about'>ABOUT US </NavLink>
</div>
    </>
    )}
export default Menu