import React from 'react'
import { auth } from '../auth'

async function Aboutus() {


    return (
        <div className="bg-gradient-to-br from-blue-900 to-purple-800 text-white min-h-screen py-20 px-6 sm:px-12 lg:px-24">
            <div className="max-w-5xl mx-auto">

                {/* About Us Section */}
                <section className="mb-12 p-8 rounded-lg shadow-xl bg-black bg-opacity-40">
                    <h2 className="text-5xl font-bold text-center mb-8 text-teal-400">About Us</h2>
                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        We are dedicated to innovation and excellence, striving to provide top-notch services and build lasting relationships with our clients. Our team is passionate about creating value and making a difference in the industry.
                    </p>

                    {/* Mission, Vision, Values Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Mission */}
                        <div className="p-5 rounded-md bg-black bg-opacity-30">
                            <h3 className="text-3xl font-semibold mb-4 text-blue-300">Our Mission</h3>
                            <p className="text-md text-gray-200 leading-relaxed">
                                To empower our users with cutting-edge solutions and unparalleled support, fostering growth and success in a rapidly evolving world.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="p-5 rounded-md bg-black bg-opacity-30">
                            <h3 className="text-3xl font-semibold mb-4 text-purple-300">Our Vision</h3>
                            <p className="text-md text-gray-200 leading-relaxed">
                                To be the leading provider of innovative solutions, recognized for our commitment to quality, customer satisfaction, and social responsibility.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="p-5 rounded-md bg-black bg-opacity-30">
                            <h3 className="text-3xl font-semibold mb-4 text-green-300">Our Values</h3>
                            <ul className="list-disc list-inside text-gray-200">
                                <li>Integrity</li>
                                <li>Innovation</li>
                                <li>Excellence</li>
                                <li>Collaboration</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Contact Us Section */}
                <div className="text-center">
                    <a
                        href="/contactus"
                        className="inline-block bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 text-white font-bold py-3 px-10 rounded-full shadow-lg transition duration-300"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Aboutus