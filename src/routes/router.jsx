import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
   {
    path: '/',
    Component: HomeLayout
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