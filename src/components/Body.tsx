import { createBrowserRouter, RouterProvider, RouteObject} from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import React, { useEffect } from "react"
import { auth } from "../utils/firebase"
import { onAuthStateChanged, User } from "firebase/auth"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { AppDispatch } from "../utils/appStore";


const routes: RouteObject[] = [
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
  ];
  

  const Body: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user: User | null)=> {
        if (user) {
          const {uid, email, displayName} = user;
          dispatch(addUser({ uid: uid, email: email, displayName: displayName}))
  
        } else {
          dispatch(removeUser())
         
        }
      });
      return () => unsubscribe();
    }, [])
  
  const appRouter = createBrowserRouter(routes);
  
 
    return (
      <div>
        <RouterProvider router={appRouter} />
      </div>
    );
  };
  

export default Body