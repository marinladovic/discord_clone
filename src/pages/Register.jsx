import React from 'react';
import { Link } from 'react-router-dom';
import DatalistInput from 'react-datalist-input';

function Register() {
  const months = [
    { id: 'January', value: 'January' },
    { id: 'February', value: 'February' },
    { id: 'March', value: 'March' },
    { id: 'April', value: 'April' },
    { id: 'May', value: 'May' },
    { id: 'June', value: 'June' },
    { id: 'July', value: 'July' },
    { id: 'August', value: 'August' },
    { id: 'September', value: 'September' },
    { id: 'October', value: 'October' },
    { id: 'November', value: 'November' },
    { id: 'December', value: 'December' },
  ];

  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push({ id: i, value: String(i) });
  }

  const years = [];
  for (let i = 1900; i <= 2020; i++) {
    years.push({ id: i, value: String(i) });
  }

  return (
    <main className="w-full h-screen bg-indigo-600 flex items-center justify-center">
      <div className="flex flex-col max-w-[480px] bg-zinc-700 p-8 rounded-lg shadow-lg">
        <h1 className="text-white font-body text-2xl font-bold tracking-wide text-center">
          Create an account
        </h1>
        <form className="flex flex-col gap-6 mt-8">
          {/* email input */}
          <div className="flex flex-col">
            <label className="text-gray-300 font-body text-xs font-medium tracking-wide mb-2 uppercase">
              email
            </label>
            <input
              type="email"
              id="email"
              className="bg-zinc-800 text-gray-300 text-sm p-2 rounded-sm border-none shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          {/* username input */}
          <div className="flex flex-col">
            <label className="text-gray-300 font-body text-xs font-medium tracking-wide mb-2 uppercase">
              username
            </label>
            <input
              type="text"
              id="username"
              className="bg-zinc-800 text-gray-300 text-sm p-2 rounded-sm shadow-md border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          {/* passwrd input */}
          <div className="flex flex-col">
            <label className="text-gray-300 font-body text-xs font-medium tracking-wide mb-2 uppercase">
              passwrd
            </label>
            <input
              type="password"
              id="password"
              className="bg-zinc-800 text-gray-300 text-sm p-2 rounded-sm border-none shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          {/* DOB input */}
          <div className="flex flex-col">
            <label className="text-gray-300 font-body text-xs font-medium tracking-wide mb-2 uppercase">
              Date of birth
            </label>
            <div className="grid grid-cols-3 gap-2">
              <div className="inline-block relative">
                <DatalistInput
                  id="dob_month"
                  placeholder="Month"
                  onSelect={() => {}}
                  items={months}
                />
              </div>
              <div className="inline-block relative">
                <DatalistInput
                  id="dob_day"
                  placeholder="Day"
                  onSelect={() => {}}
                  items={days}
                />
              </div>
              <div className="inline-block relative">
                <DatalistInput
                  id="dob_year"
                  placeholder="Year"
                  onSelect={() => {}}
                  items={years}
                />
              </div>
            </div>
          </div>
          {/* Checkboxes */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <input
                id="terms-checkbox"
                type="checkbox"
                value=""
                className="w-5 h-5 bg-zinc-700 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 focus:ring-2"
              />
              <label className="text-xs text-white">
                I have read and agree to Discord's{' '}
                <span className="text-sky-500 cursor-pointer">
                  Terms of Service
                </span>{' '}
                and{' '}
                <span className="text-sky-500 cursor-pointer">
                  Privacy Policy
                </span>
              </label>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <input
                id="terms-checkbox"
                type="checkbox"
                value=""
                className="w-5 h-5 bg-zinc-700 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 focus:ring-2"
              />
              <label className="text-xs text-gray-400">
                (Optional) It's okay to send me emails with Discord updates,
                tips, and special offers. You can opt out at any time.
              </label>
            </div>
          </div>
          {/* Button */}
          <button
            type="submit"
            className="w-full text-white font-body bg-indigo-500 py-[0.6rem] rounded-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-150"
          >
            Continue
          </button>
        </form>
        <Link
          to={`/login`}
          className="mt-2 text-sky-500 font-body text-sm hover:underline focus:underline"
        >
          Already have an account?
        </Link>
      </div>
    </main>
  );
}

export default Register;
