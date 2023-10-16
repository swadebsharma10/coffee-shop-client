import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Register from './pages/Register/Register';
import AddCoffee from './pages/UpdateCoffee/AddCoffee/AddCoffee';
import UpdateCoffee from './pages/UpdateCoffee/UpdateCoffee';
import Users from './pages/Users/Users';
import AuthProvider from './Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('https://coffee-store-server-side-mtq7sbjdm-swadebsharma6.vercel.app/coffee')
      },
      {
        path: '/add',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: 'update/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader:({params}) => fetch(`https://coffee-store-server-side-mtq7sbjdm-swadebsharma6.vercel.app/coffee/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
     {
      path: '/users',
      element: <Users></Users>,
      loader: ()=> fetch('https://coffee-store-server-side-mtq7sbjdm-swadebsharma6.vercel.app/user')
     }
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
