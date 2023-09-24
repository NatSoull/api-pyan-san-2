import React from 'react';
import Navbar from '../components/Navbar';
import { MdEmail } from "react-icons/md";
import { Si1Password } from "react-icons/si";

export const Login = () => {
    return (
        <div className=' login-body'>
            <Navbar />
            <div className=' fixed top-[50%] left-[50%] bg-slate-500'>

                <div className=' border-b-2 border-black'>
                    <MdEmail />
                    <input type="text" className=' bg-transparent outline-none' />
                    <label>Email</label>
                </div>

                <div className=' border-b-2 border-black'>
                    <Si1Password />
                    <input type="password" className=' bg-transparent outline-none' />
                    <label>Password</label>
                </div>

                <div className=' flex gap-10'>
                    <div>
                        <input type="checkbox" id='rememberMyPassword' />
                        <label htmlFor="rememberMyPassword">Remember me</label>
                    </div>
                    <button>Forgot Password</button>
                </div>

                <div>
                    <button>Login</button>
                </div>

                <div>
                    <p>Don't have an account</p>
                </div>

            </div>
        </div>
    );
};
