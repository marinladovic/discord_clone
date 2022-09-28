import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import visibilityIcon from '../assets/visibilityIcon.svg';
import DatalistInput from 'react-datalist-input';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    dob: '',
  });

  const [dateOfBirth, setDateOfBirth] = useState({
    day: '',
    month: '',
    year: '',
  });

  const { username, email, password } = formData;

  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onCheckboxClickHandler = () => {
    setIsDisabled(!isDisabled);
  };

  const onSelectHandler = (e) => {
    setDateOfBirth((prevState) => ({
      ...prevState,
      [e.key]: e.value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: username,
      });

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
      formDataCopy.dob = new Date(
        `${dateOfBirth.year}-${dateOfBirth.month}-${dateOfBirth.day}`
      );

      await toast.promise(setDoc(doc(db, 'users', user.uid), formDataCopy), {
        pending: 'Creating your account...',
        success: 'Account created successfully!',
        error: 'Error creating account',
      });

      navigate('/profile');
    } catch (err) {
      console.log(err);
    }
  };

  const months = [
    { id: 'January', value: 'January', key: 'month' },
    { id: 'February', value: 'February', key: 'month' },
    { id: 'March', value: 'March', key: 'month' },
    { id: 'April', value: 'April', key: 'month' },
    { id: 'May', value: 'May', key: 'month' },
    { id: 'June', value: 'June', key: 'month' },
    { id: 'July', value: 'July', key: 'month' },
    { id: 'August', value: 'August', key: 'month' },
    { id: 'September', value: 'September', key: 'month' },
    { id: 'October', value: 'October', key: 'month' },
    { id: 'November', value: 'November', key: 'month' },
    { id: 'December', value: 'December', key: 'month' },
  ];

  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push({ id: i, value: String(i), key: 'day' });
  }

  const years = [];
  for (let i = 1900; i <= 2020; i++) {
    years.push({ id: i, value: String(i), key: 'year' });
  }

  return (
    <main className="w-full h-screen bg-indigo-600 flex items-center justify-center">
      <div className="flex flex-col w-[480px] bg-zinc-700 p-8 rounded-lg shadow-lg">
        <h1 className="text-white font-body text-2xl font-bold tracking-wide text-center">
          Create an account
        </h1>
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-6 mt-8">
          {/* email input */}
          <div className="flex flex-col">
            <label className="text-gray-300 font-body text-xs font-medium tracking-wide mb-2 uppercase">
              email
            </label>
            <input
              onChange={onChangeHandler}
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
              onChange={onChangeHandler}
              type="text"
              id="username"
              className="bg-zinc-800 text-gray-300 text-sm p-2 rounded-sm shadow-md border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          {/* passwrd input */}
          <div className="flex flex-col relative">
            <label className="text-gray-300 font-body text-xs font-medium tracking-wide mb-2 uppercase">
              password
            </label>
            <input
              onChange={onChangeHandler}
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="bg-zinc-800 text-gray-300 text-sm p-2 rounded-sm border-none shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            />
            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword(!showPassword)}
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
                  onSelect={onSelectHandler}
                  items={months}
                />
              </div>
              <div className="inline-block relative">
                <DatalistInput
                  id="dob_day"
                  placeholder="Day"
                  onSelect={onSelectHandler}
                  items={days}
                />
              </div>
              <div className="inline-block relative">
                <DatalistInput
                  id="dob_year"
                  placeholder="Year"
                  onSelect={onSelectHandler}
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
                onClick={onCheckboxClickHandler}
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
            disabled={isDisabled}
            className="w-full text-white font-body bg-indigo-500 py-[0.6rem] rounded-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-150 disabled:bg-gray-500 disabled:cursor-not-allowed"
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
