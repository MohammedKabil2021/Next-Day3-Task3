import React from 'react'
import { signIn } from '../auth'

function Login() {

    async function signInWithGoogle() {
        "use server"
        // signIn("google", {red})
        await signIn("google", { redirectTo: "/users" })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Welcome Back 👋</h2>
                <form className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <label className="flex items-center space-x-2 text-sm text-gray-600">
                            <input type="checkbox" className="form-checkbox rounded text-purple-600" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-purple-600 hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
                    >
                        Login
                    </button>


                </form>

                <form action={signInWithGoogle} className="mt-6">
                    <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 rounded-xl px-4 py-2 shadow-sm hover:shadow-md transition hover:bg-purple-700 text-black hover:text-white font-semibold py-2 px-4 rounded-xl transition duration-300">
                        <svg className="w-5 h-5" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.2H272v95h147.4c-6.4 34.7-25.5 64.1-54.4 83.7v69.6h87.9c51.4-47.3 80.6-117 80.6-198.1z" />
                            <path fill="#34A853" d="M272 544.3c73.8 0 135.6-24.5 180.8-66.5l-87.9-69.6c-24.4 16.3-55.5 25.8-92.9 25.8-71 0-131.1-47.9-152.5-112.1H30.8v70.4C75.3 475 167.7 544.3 272 544.3z" />
                            <path fill="#FBBC05" d="M119.5 321.9c-10.7-32.1-10.7-66.6 0-98.7V152.8H30.8c-41.4 82.6-41.4 180.1 0 262.7l88.7-70.4z" />
                            <path fill="#EA4335" d="M272 107.7c39.9-.6 78 14.1 107.3 40.8l80.2-80.2C407.5 24.5 345.8 0 272 0 167.7 0 75.3 69.3 30.8 181.6l88.7 70.4C140.9 155.6 201 107.7 272 107.7z" />
                        </svg>
                        <span>Sign in with Google</span>
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Don&apos;t have an account? <a href="#" className="text-purple-600 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    )
}

export default Login