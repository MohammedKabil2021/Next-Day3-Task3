import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer
    () {
    return (
        <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-8 mt-16 rounded-t-2xl shadow-inner">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    {/* Left Side */}
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-semibold">MyWebsite</h2>
                        <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
                    </div>

                    {/* Center Links */}
                    <div className="flex space-x-6">
                        <a href="/privacy" className="text-sm hover:text-yellow-400 transition">Privacy Policy</a>
                        <a href="/terms" className="text-sm hover:text-yellow-400 transition">Terms of Use</a>
                        <a href="/contactus" className="text-sm hover:text-yellow-400 transition">Contact</a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
                        <a href="#" className="hover:text-blue-300 transition"><FaTwitter /></a>
                        <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
                        <a href="#" className="hover:text-gray-400 transition"><FaGithub /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
