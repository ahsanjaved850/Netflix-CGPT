import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import React from "react"


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
  
  
  const appRouter = createBrowserRouter(routes);
  
  const Body: React.FC = () => {
    return (
      <div>
        <RouterProvider router={appRouter} />
      </div>
    );
  };
  

export default Body