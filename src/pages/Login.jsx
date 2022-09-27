import { Link } from 'react-router-dom';
import React from 'react';

function Login() {
  return (
    <main className="w-full h-screen bg-indigo-600 flex items-center justify-center">
      <div className="flex flex-col w-[480px] bg-zinc-700 p-8 rounded-lg shadow-lg">
        <h1 className="text-white font-body text-2xl font-bold tracking-wide text-center mb-2">
          Welcome back!
        </h1>
        <h2 className="text-gray-300 font-body font-light text-base text-center">
          We're so excited to see you again!
        </h2>
        <form className="flex flex-col gap-6 mt-6">
          {/* email input */}
          <div className="flex flex-col">
            <label className="text-gray-300 font-body text-xs font-medium tracking-wide mb-2 uppercase">
              email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="bg-zinc-800 text-gray-300 text-sm p-2 rounded-sm border-none shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          {/* passwrd input */}
          <div className="flex flex-col">
            <label className="text-gray-300 font-body text-xs font-medium tracking-wide mb-2 uppercase">
              password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="bg-zinc-800 text-gray-300 text-sm p-2 rounded-sm border-none shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            />
            <Link
              to="/forgot-password"
              className="text-sky-500 text-sm font-body mt-1 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          {/* Button */}
          <button
            type="submit"
            className="w-full text-white font-body bg-indigo-500 py-[0.6rem] rounded-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-150"
          >
            Log In
          </button>
        </form>
        {/* Register link */}
        <div className="flex mt-2 gap-2 font-body text-gray-300 text-sm">
          <p>Need an account?</p>
          <Link
            to={`/register`}
            className=" text-sky-500 hover:underline focus:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;
