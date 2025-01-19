import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
        <h1 className="text-4xl font-extrabold text-accent">404 ERROR: PAGE NOT FOUND</h1>
        <Link to={"/"} className="text-accent font-semibold underline">Return to Home</Link>
        </>
    );
};

export default ErrorPage;