'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Users() {
  const [users, setusers] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setusers(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-r from-teal-500 via-blue-600 to-indigo-700 text-white min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Our Users</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {users.map((user) => (
            <div
              key={user.id}
              className="p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user.name}</h2>
              <p className="text-gray-600 text-sm">@{user.username}</p>
              <p className="text-gray-500 text-sm">{user.email}</p>

              <div className="mt-4 text-center">
                <button
                  className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => router.push(`/users/${user.id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Users;
