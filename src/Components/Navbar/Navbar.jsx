import React, { useContext, useState,useEffect } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {

    const[menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

    useEffect(()=>{
      AOS.init({
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true,
      });
    });

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p data-aos="fade-left" data-aos-duration="600" data-aos-delay="600">SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'><a data-aos="fade-down" data-aos-duration="600" data-aos-delay="600">Shop</a></Link>{menu === "shop" ? <hr/>:<></>}</li>
        <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'><a data-aos="fade-down" data-aos-duration="600" data-aos-delay="800">Men</a></Link>{menu === "mens" ? <hr/>:<></>}</li>
        <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'><a data-aos="fade-down" data-aos-duration="600" data-aos-delay="1000">Women</a></Link>{menu === "womens" ? <hr/>:<></>}</li>
        <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'><a data-aos="fade-down" data-aos-duration="600" data-aos-delay="1200">Kids</a></Link>{menu === "kids" ? <hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login' data-aos="fade-down" data-aos-duration="600" data-aos-delay="1300"><button className='login-button'>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
