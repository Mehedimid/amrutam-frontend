import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home/Home';
import ErrorPage from './ErrorPage';
import Layout from './Layout/Layout';
import FindDoctors from './pages/Find Doctors/FindDoctors';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/about-us",
        element:<h1>Abut us</h1>
      },
      {
        path:"/find-doctors",
        element:<FindDoctors />
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
