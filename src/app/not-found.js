import React from 'react'

function notFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-6">
            <div className="text-center space-y-6">
                <h1 className="text-7xl font-extrabold tracking-wider">404</h1>
                <p className="text-2xl md:text-3xl font-semibold">
                    Oops! Page not found 😢
                </p>
                <p className="text-sm text-gray-200">
                    The page you are looking for does not exist or has been moved.
                </p>

                <a
                    href="/login"
                    className="inline-block mt-4 px-6 py-3 bg-white text-indigo-700 font-bold rounded-lg shadow-lg hover:bg-indigo-100 transition"
                >
                    Back to Home
                </a>
            </div>
        </div>
    )
}

export default notFound