import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset link sent to your email');
      navigate('/login');
    } catch (err) {
      toast.error('Invalid email');
    }
  };

  return (
    <main className="w-full h-screen bg-indigo-600 flex items-center justify-center">
      <div className="flex flex-col w-[480px] bg-zinc-700 p-8 rounded-lg shadow-lg">
        <h1 className="text-white font-body text-2xl font-bold tracking-wide text-center mb-2">
          Reset Password
        </h1>
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-6 mt-6">
          {/* email input */}
          <div className="flex flex-col">
            <label className="text-gray-300 font-body text-xs font-medium tracking-wide mb-2 uppercase">
              email <span className="text-red-500">*</span>
            </label>
            <input
              onChange={onChangeHandler}
              type="email"
              id="email"
              className="bg-zinc-800 text-gray-300 text-sm p-2 rounded-sm border-none shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </div>
          {/* Button */}
          <button
            type="submit"
            className="w-full text-white font-body bg-indigo-500 py-[0.6rem] rounded-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-150"
          >
            Send Reset Link
          </button>
        </form>
        {/* Register link */}
        <div className="flex mt-2 gap-2 font-body text-gray-300 text-sm">
          <p>Back to </p>
          <Link
            to={`/login`}
            className=" text-sky-500 hover:underline focus:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ForgotPassword;
