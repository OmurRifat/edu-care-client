import { createBrowserRouter } from "react-router-dom";
import Facalties from "../../components/Facalties/Facalties";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../layouts/Main";
import FacaltyDetails from "../../components/FacaltyDetails/FacaltyDetails";
import Research from "../../components/Research/Research";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CheckOut from "../../components/CheckOut/CheckOut";
import Blogs from "../../components/Blogs/Blogs";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'facalties',
                element: <Facalties></Facalties>
            },
            {
                path: 'facalties/:id',
                element: <FacaltyDetails></FacaltyDetails>,
                loader: ({ params }) => {
                    return fetch(`https://edu-care-server-sand.vercel.app/facalties/${params.id}`)
                }
            },
            {
                path: 'research',
                element: <PrivateRoute><Research></Research></PrivateRoute>
            },
            {
                path: 'facalties/:id/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`https://edu-care-server-sand.vercel.app/checkout/${params.id}`)
                }
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '*',
        element: <div>404 || Page not found.</div>
    }
]);

export default routes;