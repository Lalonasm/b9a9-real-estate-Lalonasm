import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Properties from "../pages/Properties/Properties";
import PropertyDetails from "../pages/SingleProperty/PropertyDetails";
// import ErrorPage from "../pages/ErrorPage/ErrorPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/singleProperty',
                element: <Properties></Properties>
            },
            {
                path: '/singleProperty/:id',
                element: <PropertyDetails></PropertyDetails>,
                loader: () => fetch('../property.json')
            }
        ]
    },
]);

export default router;