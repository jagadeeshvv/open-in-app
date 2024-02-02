import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LandingPage from "./landPage"
import HomePage from "./mainPage"
import {  useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {  onAuthStateChanged } from "firebase/auth";

import { auth } from "../utils/firebase";
import { addUser,removeUser } from "../utils/userSlice";


const Body=()=>{
    const dispacth=useDispatch()
  
  useEffect(()=>{
  
    onAuthStateChanged(auth, (user) => {
      if (user) {
  
        const {uid,email,displayName} = user;
        dispacth(addUser({uid:uid,email:email,displayName:displayName}))
    
  
        
      } else {
        dispacth(removeUser())
    
        
      }
    });
  
  },[])



    const appRouter=createBrowserRouter(
        [
            {
                path:'/',
                element:<LandingPage/>
            },
            {
                path:"/main",
                element:<HomePage/>
            }
        ]
    )

    return(
        <div>
<RouterProvider router={appRouter}></RouterProvider>
        </div>
    )
}

export default Body;