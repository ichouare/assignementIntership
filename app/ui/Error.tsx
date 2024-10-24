import React from 'react';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-6">Oops!</h1>
      <h2 className="text-3xl text-gray-600 mb-4">Something went wrong</h2>
      <p className="text-lg text-gray-500 mb-8">
        We can't seem to find the page you're looking for.
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300">
          Go back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
