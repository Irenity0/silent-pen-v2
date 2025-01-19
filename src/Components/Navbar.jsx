import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <section className="flex w-10/12 md:11/12 lg:w-1/2 mx-auto mt-6">
            {/* text */}
            <div className="w-3/4">
            <h1 className="text-2xl font-bold text-tertiary">Afra Anjum</h1>
            <h2 className="text-lg text-tertiary">Publisher from Bangladesh</h2>
            <br />
            <br />
            <div className="space-x-3 text-lg text-tertiary">
                <NavLink to={'/'}>Blog</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
                <NavLink to={'/newsletter'}>Newsletter</NavLink>
            </div>
            </div>

            {/* avatar */}
            <div className="w-1/4">
                <img className="rounded-full w-2/3" src="https://irenity0.github.io/slient-pen/avatar.jpeg" alt="" />
            </div>
        </section>
    );
};

export default Navbar;