/* eslint-disable no-unused-vars */
import React from 'react'
import "./navbar.css"

const Navbar = () => {
    return (
        <nav>
            <h1>Logo</h1>
            <div>
                <ul>
                    <li><button>Home</button></li>
                    <li><button>About</button></li>
                    <li><button>Services</button></li>
                    <li><button>Contact</button></li>
                </ul>
                <button className='login-btn'>Login</button>
            </div>
        </nav>
    )
}

export default Navbar
