import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    // Handle login form submission
    console.log(data);
  };

  const handleGoogleLogin = () => {
    // Handle Google login
  };

  const handleFacebookLogin = () => {
    // Handle Facebook login
  };

  return (
    <div className="flex flex-col items-center justify-center my-24">
      <div className="max-w-md w-full p-6 bg-green-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input required type="email" id="email" {...register('email')} className="w-full border-gray-300 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" />
          </div>


          <div>
            <label htmlFor="password" className="block font-medium mb-1">Password</label>
            <div className="relative">
              <input
                required
                type={showPassword ? 'text' : 'password'}
                id="password"
                {...register('password')}
                className="w-full border-gray-300 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                type="button"
                className="absolute right-3 top-2 text-2xl text-black focus:outline-none"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <span className="h-5 w-5"><FaEye /></span>
                ) : (
                    <span className="h-5 w-5"><FaEyeSlash /></span>
                )}
              </button>
            </div>
          </div>



          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-2">
            Login
          </button>
        </form>
        <p className="mt-4">Don&#39;t have an account? <Link to="/signUp" className="text-blue-500 font-semibold">Sign up here</Link></p>
        <div className="flex justify-center mt-6 space-x-2">
          <button onClick={handleGoogleLogin} className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg py-2 px-4">
            Login with Google
          </button>
          <button onClick={handleFacebookLogin} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 px-4">
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
