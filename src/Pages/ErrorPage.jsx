import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
        <h1 className="text-4xl font-extrabold text-tertiary">404 ERROR: PAGE NOT FOUND</h1>
        <Link to={"/"} className="text-tertiary font-semibold underline">Return to Home</Link>
        </>
    );
};

export default ErrorPage;