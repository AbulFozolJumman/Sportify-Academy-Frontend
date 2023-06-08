import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit = (data) => {
        // Handle sign-up form submission
        console.log(data);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="flex flex-col items-center justify-center my-24">
            <div className="max-w-md w-full p-6 bg-green-100 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block font-medium mb-1">Name</label>
                        <input type="text" id="name" {...register('name')} className="w-full border-gray-300 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium mb-1">Email</label>
                        <input type="email" id="email" {...register('email')} className="w-full border-gray-300 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" />
                    </div>
                    <div>
                        <label htmlFor="photoURL" className="block font-medium mb-1">Photo URL</label>
                        <input type="text" id="photoURL" {...register('photoURL')} className="w-full border-gray-300 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium mb-1">Password</label>
                        <div className="relative">
                            <input
                                required
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                {...register('password', {
                                    minLength: 6,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                                })}
                                className="w-full border-gray-300 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <button
                                type="button"
                                className="absolute right-2 top-2 text-2xl text-black focus:outline-none"
                                onClick={handleTogglePassword}
                            >
                                {showPassword ? (
                                    <span className="h-5 w-5"><FaEye /></span>
                                ) : (
                                    <span className="h-5 w-5"><FaEyeSlash /></span>
                                )}
                            </button>
                        </div>
                        {errors.password?.type === 'minLength' && (
                            <p className="text-red-500 mt-1">Password should be at least 6 characters long</p>
                        )}
                        {errors.password?.type === 'pattern' && (
                            <p className="text-red-500 mt-1">Password should contain at least one uppercase letter, one lowercase letter, one digit, and one special character</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block font-medium mb-1">Confirm Password</label>
                        <div className="relative">
                            <input
                                required
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                {...register('confirmPassword', {
                                    validate: (value) => value === watch('password'),
                                })}
                                className="w-full border-gray-300 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                            />
                            <button
                                type="button"
                                className="absolute right-2 top-2 text-2xl text-black focus:outline-none"
                                onClick={handleToggleConfirmPassword}
                            >
                                {showConfirmPassword ? (
                                    <span className="h-5 w-5"><FaEye /></span>
                                ) : (
                                    <span className="h-5 w-5"><FaEyeSlash /></span>
                                )}
                            </button>
                        </div>
                        {errors.confirmPassword?.type === 'validate' && (
                            <p className="text-red-500 mt-1">Passwords do not match</p>
                        )}
                    </div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-2">
                        Sign Up
                    </button>
                </form>
                <div className="mt-4">
                    <p>Already have an account? <a href="/login" className="text-blue-500 font-semibold">Log in here</a></p>
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg py-2 px-4">
                        Sign Up with Google
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 px-4">
                        Sign Up with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
