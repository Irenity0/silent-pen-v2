import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage";
import Details from "../Pages/Details";
import Profile from "../Pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: 'blogs/:title',
                element: <Details/>
            },
            {
                path: 'profile',
                element: <Profile/>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;