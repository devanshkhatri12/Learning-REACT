import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Home, About, ContactUs, User, Github} from "./components/index.js"
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   // first objet : main path
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contactus",
//         element: <ContactUs/>
//       }
//     ]
//   }
// ])

// or

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contactus' element={<ContactUs/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route
       loader={githubInfoLoader}
       path='github' 
       element={<Github/>}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
