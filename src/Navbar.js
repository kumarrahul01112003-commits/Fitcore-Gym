import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"
import "./index.css"

const Navbar = () => {
    return (
        <>





            <nav className='nav'>


                <img className='dumble' src='/logo.png'></img>
                <h2 className='h2'>FIT CORE</h2>
                <div className='div'>

                    <h3 className='h3'><a href='#a' target='blank'>HOME</a></h3>
                    <h3 className='h3'><a href='#ab'>ABOUT</a></h3>
                    <h3 className='h3'><a href='#pageT' target='blank'>TRAINER'S</a></h3>
                    <h3 className='h3'> <Link to="/membership">MEMBERSHIP</Link></h3>
                    {/* <h3 className='h3'><a href=''>HOME</a></h3> */}
                    <Link to="/signup">
                        <button className='btn'>
                            <span>Sign Up</span>
                        </button>
                    </Link>
                </div>




            </nav>












        </>
    )
}

export default Navbar