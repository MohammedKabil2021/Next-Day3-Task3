"use client";

import React, { useEffect, useState } from "react";

function Students() {
    const [std, setStd] = useState([]);
    const [name, setName] = useState("");
    const [id, setId] = useState("");

    const fetchStd = async () => {
        try {
            const response = await fetch("http://localhost:3000/stdapi");
            const data = await response.json();
            setStd(data);
        } catch (error) {
            console.error("Failed to fetch students:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = id ? "PUT" : "POST";
        const body = id ? { id, name } : { name };

        await fetch("http://localhost:3000/stdapi", {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        setName("");
        setId("");
        fetchStd();
    };

    const handleEdit = (student) => {
        setId(student.id);
        setName(student.name);
    };

    const handleDelete = async (id) => {
        await fetch("http://localhost:3000/stdapi", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        });
        fetchStd();
    };

    useEffect(() => {
        fetchStd();
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-700">
                🎓 Students Manager
            </h1>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 mb-8 items-center"
            >
                <input
                    className="flex-1 border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    placeholder="Enter student name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                >
                    {id ? "Update Student" : "Add Student"}
                </button>
            </form>

            <ul className="space-y-6">
                {std.map((student) => (
                    <li
                        key={student.id}
                        className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">
                                    👤 {student.name}
                                </h2>
                                <p className="text-sm text-gray-500 break-all">
                                    🆔 {student.id}
                                </p>
                            </div>
                            <div className="flex gap-2 mt-2 sm:mt-0">
                                <button
                                    onClick={() => handleEdit(student)}
                                    className="px-3 py-1 bg-yellow-500 text-white text-sm rounded hover:bg-yellow-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(student.id)}
                                    className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default Students;
