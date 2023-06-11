import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

// This is website Login page
const Login = () => {
  const { setUser, userSignIn, googleSignIn, githubSignIn } = useContext(AuthContext)
  const { register, handleSubmit, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  // Password eye btn for hide/show
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // User email/password sign in handler
  const handleUserSignIn = data => {
    userSignIn(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login successfully.',
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, { replace: true });
        reset()

      })
      .catch(error => {
        console.log(error.message);
      })
  }

    // User Google sign in handler
    const handleGoogleLogin = () => {
      googleSignIn()
        .then((result) => {
          const googleUser = result.user;
          console.log(googleUser);
          setUser(googleUser);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login successfully.',
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from, { replace: true });
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
                navigate(from, { replace: true });
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
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login successfully.',
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from, { replace: true });
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
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-md w-full p-6 bg-green-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit(handleUserSignIn)} className="space-y-4">
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

export default Login;
