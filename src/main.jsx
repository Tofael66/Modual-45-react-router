import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Homes from './Componet/Homes/Homes.jsx';
import About from './About/About.jsx';
import Contact from './Contant/Contact.jsx';
import Users from './Componet/Users/Users.jsx';
import UserDetails from './UserDetails/UserDetails.jsx';
import PlorulPost from './PluralPost/PlorulPost.jsx';
import PostDetails from './PostDetails/PostDetails.jsx';
import ErrorPage from './Componet/ErrorPage/ErrorPage.jsx';




const router = createBrowserRouter([

{
  path: "/" ,
  element:<Homes></Homes> ,
  errorElement: <ErrorPage></ErrorPage> ,
children: [
  {
    path: "/about" ,
    element: <About></About>
  } ,
  {
    path:"/contact" ,
    element: <Contact></Contact>
  } ,
  {
    path: "/users" ,
    element: <Users></Users> ,
    
    loader: () => fetch('https://jsonplaceholder.typicode.com/users')
  } ,
 {
  path:'user/:userId',
loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`) ,
  element:<UserDetails></UserDetails>
 } ,

 {
  path: '/post' ,
 loader: () => fetch ('https://jsonplaceholder.typicode.com/posts') ,
  element: <PlorulPost></PlorulPost>
 } ,

 {
path: 'post/:postId' ,
loader: ({params}) => fetch (`https://jsonplaceholder.typicode.com/posts/${params.postId}`) ,
element:<PostDetails></PostDetails>
 }
 

]
}

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
