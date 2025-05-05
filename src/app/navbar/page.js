import React from 'react'
import Link from 'next/link';
import { auth, signOut } from '../auth';

async function Navbar
  () {

  async function signOutGoogle() {
    "use server"
    await signOut({ redirectTo: "/" })
  }

  const loggedUserInfo = await auth();
  console.log("Logged User Info:", loggedUserInfo);
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 shadow-lg rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-center space-x-10">
          <Link href="/" className="text-white font-semibold text-lg hover:text-yellow-300 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2 13 9-9 9 9-3 3-3-3-3 3-3-3" />
            </svg>
            HOME
          </Link>

          {!loggedUserInfo && (
            <Link href="/login" className="text-white font-semibold text-lg hover:text-yellow-300 transition duration-300">
              Login
            </Link>
          )}

          {loggedUserInfo && (
            <Link href="/userprofile" className="text-white font-semibold text-lg hover:text-yellow-300 transition duration-300">
              User Profile
            </Link>
          )}
          <Link href="/students" className="text-white font-semibold text-lg hover:text-yellow-300 transition duration-300">
            Students
          </Link>
          <Link href="/users" className="text-white font-semibold text-lg hover:text-yellow-300 transition duration-300">
            Users
          </Link>
          <Link href="/aboutus" className="text-white font-semibold text-lg hover:text-yellow-300 transition duration-300">
            About Us
          </Link>
          <Link href="/contactus" className="text-white font-semibold text-lg hover:text-yellow-300 transition duration-300">
            Contact Us
          </Link>

          {loggedUserInfo && ( //&& it works here like if statment if the condition true return or render it if false do not render it 
            <form action={signOutGoogle} className="mb-2">
              <button className="flex items-center gap-2 text-red-600 hover:text-white border border-red-600 hover:bg-red-600 font-semibold px-4 py-2 rounded-xl transition duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
                </svg>
                <span>Logout</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
