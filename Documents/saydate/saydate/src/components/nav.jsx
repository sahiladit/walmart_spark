
import React from 'react';
import './navStyle.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div id='navbar' className='z-10 frosted sticky top-0 bg-opacity-2 h-16 w-11/12 rounded-xl p-5 flex justify-between items-center m-auto backdrop-blur-lg shadow-md'>
            <div id='left'>
                <h1 className='font-bold md:text-2xl text-xl text-white'>SayDate</h1>
            </div>
            <div id="right">
                <Link to="/GetStarted" className="text-white px-4 py-2 rounded">
                    How to get started?
                </Link>
            </div>
        </div>
    );
};

export default Nav;