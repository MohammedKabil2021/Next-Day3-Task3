'use client';

import React, { useState } from 'react';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!');
        // هنا تقدر تضيف كود لتعامل مع البيانات مثل إرسالها للـ API
    };

    return (
        <div className="bg-gradient-to-r from-teal-500 via-blue-600 to-indigo-800 text-white min-h-screen flex items-center justify-center py-16 px-4">
            <div className="bg-white text-gray-900 rounded-lg shadow-xl w-full max-w-lg p-8 space-y-6">
                <h2 className="text-3xl font-semibold text-center text-indigo-600 mb-4">Contact Us</h2>
                <p className="text-lg text-center text-gray-500">
                    We’d love to hear from you. Please fill out the form below and we’ll get back to you as soon as possible!
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
                            placeholder="John Doe"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
                            rows="5"
                            placeholder="Write your message here..."
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                <div className="text-center mt-6">
                    <p className="text-sm text-gray-500">
                        Or reach us directly at{' '}
                        <a href="mailto:contact@company.com" className="text-indigo-600 hover:underline">
                            contact@company.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
