import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../Pages/Loading";

const router = createBrowserRouter([
   {
      path: '/',
      Component: HomeLayout,
      children: [
         {
            path: '',
            Component: Home
         },
         {
            path: '/category/:id',
            hydrateFallbackElement: <Loading />,
            loader: () => fetch('/news.json'),
            Component: CategoryNews
         },
      ]
   },
   {
      path: '/auth',
      Component: AuthLayout,
      children: [
         {
            path: '/auth/login',
            Component: Login
         },
         {
            path: '/auth/register',
            Component: Register
         }
      ]
   },
   {
      path: '/news-details/:id',
      element: (
         <PrivateRoute>
            <NewsDetails />
         </PrivateRoute>
      ),
      hydrateFallbackElement: <Loading />,
      loader: () => fetch('/news.json')
   },
   {
      path: '/*',
      element: <h2>404 Error Page</h2>
   },

])

export default router;