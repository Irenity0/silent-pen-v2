import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage";
import Details from "../Pages/Details";
import Profile from "../Pages/Profile";
import Newsletter from "../Pages/Newsletter";

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
            },
            {
                path: 'newsletter',
                element: <Newsletter/>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;