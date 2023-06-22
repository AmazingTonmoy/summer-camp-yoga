import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/HomePages/Home';
import HomeContents from './components/HomePages/HomeContents';
import ErrorPage from './components/ErrorPage/ErrorPAge';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './provider/AuthProvider';
import Instructor from './components/Instructor/Instructor';
import Classes from './components/Classes/Classes';
import Dashboard from './components/Dashboard/Dashboard';
import MyClass from './components/Classes/MyClass/MyClass';
import PrivateRoutes from './components/Routes/PrivateRouters';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <HomeContents></HomeContents>

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
      path: '/instructor',
      element: <Instructor></Instructor>
    },
    {
      path: '/Classes',
      element: <Classes></Classes>
    },
    {
      path:'/myclass/:id',
      element: <MyClass></MyClass>,
      loader: ({params}) => fetch(` https://yoga-school-server-ochre.vercel.app/${params.id}`)
    },
    {
      path: '/Dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
    }
   
    
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>

<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </AuthProvider>
)
