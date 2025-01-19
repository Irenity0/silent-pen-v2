import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className="border-t-2 border-accent/50 my-10 w-10/12 md:11/12 lg:w-1/2 mx-auto"></div>
        <Outlet></Outlet>
        <br /><br /><br /><br />
        <Footer></Footer>
        </>
    );
};

export default Layout;