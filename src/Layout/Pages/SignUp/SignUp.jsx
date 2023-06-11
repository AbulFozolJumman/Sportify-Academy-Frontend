import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
  const { userSignUp, updateUserProfile, setReload, setUser, googleSignIn, githubSignIn } = useContext(AuthContext)
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Create User handler
  const handleUserSignUp = data => {
    userSignUp(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL).then(() => {
          const saveUser = { name: data.name, email: data.email, image: data.photoURL, role: "student" }
          console.log(saveUser);
          fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
          })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'User created successfully.',
                  showConfirmButton: false,
                  timer: 1500
                });
              }
            })
          setReload(true)
        }
        ).catch(error => {
          console.log(error.message)
        })
        reset();
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  // User Google sign in handler
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const googleUser = result.user;
        console.log(googleUser);
        setUser(googleUser);
        const saveUser = { name: googleUser.displayName, email: googleUser.email, image: googleUser.photoURL, role: "student" }
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User created successfully.',
                showConfirmButton: false,
                timer: 1500
              });
            }
          })
          .catch(error => console.log(error))
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // User Github sign in handler
  const handleGithubLogin = () => {
    githubSignIn()
      .then((result) => {
        const githubUser = result.user;
        setUser(githubUser);
        const saveUser = { name: githubUser.displayName, email: "user@github.com", image: githubUser.photoURL, role: "student" }
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User created successfully.',
                showConfirmButton: false,
                timer: 1500
              });
            }
          })
          .catch(error => console.log(error))
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // Password eye btn for hide/show
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Password matching handler
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center my-24">
      <div className="max-w-md w-full p-6 bg-green-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit(handleUserSignUp)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">Name</label>
            <input required type="text" id="name" {...register('name')} className="w-full border-gray-300 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input required type="email" id="email" {...register('email')} className="w-full border-gray-300 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" />
          </div>
          <div>
            <label htmlFor="photoURL" className="block font-medium mb-1">Photo URL</label>
            <input required type="text" id="photoURL" {...register('photoURL')} className="w-full border-gray-300 border rounded-lg py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium mb-1">Password</label>
            <div className="relative">
              <input
                required
                type={showPassword ? 'text' : 'password'}
                id="password"
                {...register('password', {
                  minLength: {
                    value: 6,
                    message: 'Password should be at least 6 characters long',
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    message: 'Password should contain at least one uppercase letter, one lowercase letter, one digit, and one special character',
                  },
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
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password.message}</p>
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
                  validate: (value) => value === watch('password') || 'Passwords do not match',
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
            {errors.confirmPassword && (
              <p className="text-red-500 mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-2">
            Sign Up
          </button>
        </form>
        <div className="mt-4">
          <p>Already have an account? <Link to="/login" className="text-blue-500 font-semibold">Log in here</Link></p>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          <button onClick={handleGoogleLogin} className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg py-2 px-4 flex items-center gap-2">
          <span><FaGoogle></FaGoogle></span>
            Login with Google
          </button>
          <button onClick={handleGithubLogin} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 px-4 flex items-center gap-2">
          <span><FaGithub></FaGithub></span>
            Login with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
