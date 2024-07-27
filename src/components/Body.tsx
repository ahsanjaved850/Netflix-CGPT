import { createBrowserRouter, RouterProvider, RouteObject} from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import React from "react"
import MoviePage from "./MoviePage";

const routes: RouteObject[] = [
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },{
      path: '/browse/movie/:id',
      element: <MoviePage />,
    }
  ];
  
  const Body: React.FC = () => {

  const appRouter = createBrowserRouter(routes);
 
    return (
      <div>
          <RouterProvider router={appRouter} />
      </div>
    );
  };
  

export default Body