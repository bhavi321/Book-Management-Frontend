import './App.css';
import React from "react"
import { createBrowserRouter,RouterProvider} from 'react-router-dom';

import './index.css';

import Homepage from "./pages/Homepage"

import Login from './pages/Login';
import Signup from './pages/Signup';

const router=createBrowserRouter([
{
path:'/',
element:<Homepage/>
},

  {
    path:'/Login',
    element:<Login/>,

  },
  {
    path:'/Signup',
    element:<Signup/>,

  },
])

function App() {
  return (
    <div className="App">
       <RouterProvider router={router}/>
    </div>
  );

}



export default App;
