import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
   {
    path: '/',
    Component: HomeLayout,
    children:[
      {
         path: '',
         Component: Home
      },
      {
         path: '/category/:id',
         loader: ()=> fetch('/news.json'),
         Component: CategoryNews
      },
    ]
   },
   {
    path: '/auth',
    element: <h2>Auth layout</h2>
   },
   {
    path: '/news',
    element: <h2>News layout</h2>
   },
   {
    path: '/*',
    element: <h2>404 Error Page</h2>
   },

])

export default router;