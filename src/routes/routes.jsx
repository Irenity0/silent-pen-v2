import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Layout from "../Layout/Layout";
import Blogs from "../Components/blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);

export default router;