// import Image from "next/image";
import React from "react";
import Link from "next/link";


export const metadata = {
  title: 'My Next.js App',
  description: 'This is a modern and stylish web app built with Next.js',
  keywords: ['next.js', 'web app', 'react', 'modern ui'],
  authors: [{ name: 'Mohammed Kabil', url: 'https://mynextjs.com' }],
  openGraph: {
    title: 'My Next.js App',
    description: 'Shareable description for social media',
    url: 'https://mynextjs.com',
    siteName: 'My Next.js App',
    images: [
      {
        url: 'https://mynextjs.com/main-icon.png',
        width: 1200,
        height: 630,
        alt: 'Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Next.js App',
    description: 'This is your amazing web app',
    creator: '@yourtwitterhandle',
    images: ['https://mynextjs.com/main-icon.png'],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 to-purple-600 text-white px-6">
      <div className="text-center max-w-3xl space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Welcome to <span className="text-yellow-400">Next.js World</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200">
          Build modern, powerful, and stylish web apps with speed and ease using Next.js + Tailwind CSS.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
            href="/login"
            className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-100 transition shadow-md"
          >
            Get Started
          </a>
          <Link
            href="/users"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-700 transition shadow-md"
          >
            View Users
          </Link>
        </div>
      </div>
    </main>
  );
}
