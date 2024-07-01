import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu,setMenu]= useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);
    const menuRef=useRef();
    
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='' width="70" height="70"/>
            <p>ARTISTRY</p>
        </div>
        <ul  ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none', color:'black' }}to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("artwork")}}><Link style={{textDecoration:'none',color:'black'}} to="/artworks">Artworks</Link>{menu==="artwork"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("equipment")}}><Link style={{textDecoration:'none',color:'black'}} to="/equipments">Equipments</Link>{menu==="equipment"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("sculpture")}}><Link style={{textDecoration:'none',color:'black'}}to="/sculptures">Sculptures</Link>{menu==="sculpture"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to="/login"><button>login</button></Link>} 
           
            <Link to="/cart"><img src={cart_icon}alt=''/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>

  )
}

export default Navbar