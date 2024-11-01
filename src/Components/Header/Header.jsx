import React, { useState } from 'react'
import logo from '../../assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faCartShopping} from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import { Link } from "react-router-dom";

const Header = () => {
    const[MenuIcon , setMenuIcon] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const menuIconToggle = () => {
        if (MenuIcon) {
            setIsAnimating(true); 
        } else {
            setMenuIcon(prev => !prev); 
        }
    };

    const handleAnimationEnd = () => {
        if (isAnimating) {
            setIsAnimating(false); 
            setMenuIcon(false); 
        }
    };

  return (
    <div className="bg-black flex flex-row items-center justify-between h-16 px-4 w-full text-white">
        <Link to="/"><img src={logo} alt="logo" className="h-16 " /></Link>
        
        <div className="sm:flex gap-10 hidden">
            <span className='text-lg md:text-xl font-bold hover:text-red-400 duration-300'>
                <Link to="/">Home</Link>
            </span>
            <span className='text-lg md:text-xl font-bold hover:text-red-400 duration-300'>
                <Link to="/reviews">Reviews</Link>
            </span>
            <span className='text-lg md:text-xl font-bold hover:text-red-400 duration-300'>
                <Link to="/cart">Cart</Link>
            </span>
        </div>
        
        <div className=" hidden sm:flex gap-3 ">
            <Link to="/signup">
                <button className="bg-red-600 font-semibold text-white mx-2 px-3  rounded hover:bg-white hover:text-black duration-300 active:scale-50 " style={{paddingTop:"3px",paddingBottom:"3px"}}>Sign Up</button>
            </Link>
            <Link to="/login">
                <button className="bg-red-600 font-semibold text-white mx-2 px-3 rounded hover:bg-white hover:text-black duration-300 active:scale-50 " style={{paddingTop:"3px",paddingBottom:"3px"}}>Log In</button>
            </Link>
        </div>
        <div className='sm:hidden text-white block'>
        <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} className='h-6 mx-6'/></Link>
            <FontAwesomeIcon icon={faBars} className='h-6'onClick={menuIconToggle}/>
            {
                MenuIcon && (
                <div className={`text-white text-md font-semibold absolute right-0 top-20 flex flex-col bg-red-500 p-4 rounded ${isAnimating ? 'animate__animated animate__fadeOutRight' : 'animate__animated animate__fadeInRight'}`} onAnimationEnd={handleAnimationEnd}>
                    <span className='underline underline-offset-4 my-1'><Link to="/">Home</Link></span>
                    <span className='underline underline-offset-4 my-1'><Link to="/reviews">Reviews</Link></span>
                    <Link to="/signup"><button className='bg-white text-black px-2 py-1 rounded my-2'>Sign Up</button></Link>
                    <Link to="/login"><button className='bg-white text-black px-2 py-1 rounded my-2'>Log In</button></Link>
                </div>
                )
            }
        </div>
    </div>
  )
}

export default Header;
