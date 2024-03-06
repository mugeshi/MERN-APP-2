import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


// Import all components (adjust import paths based on your project structure)
import Username from './components/Username';
import PageNotFound from './components/PageNotFound';
import Password from './components/Password';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Register from './components/Register';
import Reset from './components/Reset';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Username />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/password',
    element: <Password />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/recovery',
    element: <Recovery />,
  },
  {
    path: '/reset',
    element: <Reset />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);

export default function App() {
  return (
    <main>
       <RouterProvider router={router}></RouterProvider>
    </main>
     
  )
}
