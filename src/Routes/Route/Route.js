import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    },
    {
        path: '*',
        element: <div>404 || Page not found.</div>
    }
]);

export default routes;