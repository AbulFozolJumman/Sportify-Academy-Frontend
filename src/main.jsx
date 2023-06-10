import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main/Main';
import Home from './Layout/Pages/Home/Home/Home';
import Login from './Layout/Pages/Login/Login';
import SignUp from './Layout/Pages/SignUp/SignUp';
import AuthProvider from './Provider/AuthProvider';
import AllClasses from './Layout/Pages/AllClasses/AllClasses';
import AllInstructors from './Layout/Pages/AllInstructors/AllInstructors';
import ErrorPage from './Layout/Pages/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/allClasses",
        element: <AllClasses></AllClasses>
      },
      {
        path: "/allInstructors",
        element: <AllInstructors></AllInstructors>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
