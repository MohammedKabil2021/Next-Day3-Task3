import React from "react";
// using this import to use server action
import { notFound, redirect } from 'next/navigation';

async function UserId({ params }) {
  // const p = await params;
  // const res = await fetch(
  //   `https://jsonplaceholder.typicode.com/users/${p.userId}`
  // );
  // const user = await res.json();


  let user; // Declare user outside the try block to read it later 

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);

    if (!res.ok) {
      // Check if the response status is not OK (e.g., 404, 500)
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    user = await res.json();
    console.log(user); // Corrected: logging user instead of data
  } catch (error) {
    console.error("Fetch error:", error); // Log the error for debugging
    notFound(); // Assuming notFound() is defined to handle 404
    return null; // Return null to prevent further execution of the component
  }


  {/* using server action to redirect to home page */ }
  async function GO() {
    "use server"
    redirect("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-700 flex items-center justify-center py-12 px-4">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-8 space-y-6">
        <h1 className="text-4xl font-bold text-center text-indigo-700">User Profile</h1>

        <div className="space-y-4">
          <div className="border-b pb-4">
            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600 text-sm">@{user.username}</p>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">Address</h3>
            <div className="text-gray-700 space-y-1">
              <p><span className="font-medium">Street:</span> {user.address.street}</p>
              <p><span className="font-medium">Suite:</span> {user.address.suite}</p>
              <p><span className="font-medium">City:</span> {user.address.city}</p>
              <p><span className="font-medium">Zipcode:</span> {user.address.zipcode}</p>
              <p className="text-sm text-gray-400">
                Geo Location: Lat {user.address.geo.lat}, Lng {user.address.geo.lng}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">Contact</h3>
            <p className="text-gray-700">Phone: {user.phone}</p>
            <p className="text-gray-700">Website: <a href={`http://${user.website}`} className="text-blue-500 hover:underline">{user.website}</a></p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">Company</h3>
            <p className="text-gray-700">{user.company.name}</p>
            <p className="text-sm text-gray-500 italic">{user.company.catchPhrase}</p>
            <p className="text-sm text-gray-400">{user.company.bs}</p>
          </div>

          {/* using server action to redirect to home page */}
          <div className="mt-4 text-center">
            <form action={GO}>
              <button
                className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Go Back To Home
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserId;
