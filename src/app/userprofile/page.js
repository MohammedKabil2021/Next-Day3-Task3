import React from 'react'
import { auth } from '../auth'

async function Userprofile() {
    const loggedUserInfo = await auth();
    console.log("Logged User Info:", loggedUserInfo);
    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                {/* User Info Section */}
                <div className="px-6 py-8">
                    <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">User Profile</h1>
                    {loggedUserInfo ? (
                        <div className="flex flex-col items-center">
                            <img
                                src={loggedUserInfo.user.image}
                                alt="User Profile"
                                className="w-32 h-32 rounded-full mb-4 shadow-lg"
                            />
                            <div className="text-center">
                                <h2 className="text-xl font-semibold text-gray-700">{loggedUserInfo.user.name}</h2>
                                <p className="text-gray-600">{loggedUserInfo.user.email}</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-500 italic text-center">Please log in to see your details!</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Userprofile
