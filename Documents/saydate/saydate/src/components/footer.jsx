
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='z-5 w-screen h-auto bg-black text-white p-10'>
            <div className='rounded-t-3xl w-auto h-auto bg-white text-black mt-10 mx-10 p-10'>
                <h1 className='text-center text-4xl font-bold pt-8'>About us</h1>

                {/* Footer Links */}
                <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl mx-auto px-5 md:px-10 pt-8">
                    
                    {/* Column 1 */}
                    <div className="pt-5 text-lg md:text-xl">
                        <h3 className="font-semibold mb-2">Quick Links</h3>
                        <Link to="/" className="block hover:underline">Home</Link>
                        <Link to="/GetStarted" className="block hover:underline">Login</Link>
                    </div>

                    {/* Column 2 */}
                    <div className="pt-5 text-lg md:text-xl">
                        <h3 className="font-semibold mb-2">More</h3>
                        <Link to="/product" className="block hover:underline">Product</Link>
                        <Link to="/support" className="block hover:underline">Help & Support</Link>
                        <Link to="/faq" className="block hover:underline">FAQ</Link>
                    </div>

                    {/* Column 3 */}
                    <div className="pt-5 text-lg md:text-xl">
                        <h3 className="font-semibold mb-2">Legal</h3>
                        <Link to="/privacy-policy" className="block hover:underline">Privacy Policy</Link>
                        <Link to="/terms" className="block hover:underline">Terms & Conditions</Link>
                        <Link to="/report" className="block hover:underline">Report an Issue</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}