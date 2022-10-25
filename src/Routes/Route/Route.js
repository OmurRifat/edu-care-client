import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import Main from "../../layouts/Main";

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

            }
        ]
    },
    {
        path: '*',
        element: <div>404 || Page not found.</div>
    }
]);

export default routes;