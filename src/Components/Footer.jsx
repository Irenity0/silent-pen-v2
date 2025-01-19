import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="w-10/12 md:11/12 lg:w-1/2 mx-auto">
            {/* about */}
            <div className="flex">
            {/* header */}
            <div className="font-bold text-xl w-1/3">About</div>
            {/* content */}
            <div className="w-2/3 font-newsreader text-secondary text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, adipisci. Cupiditate amet veniam natus nihil tempore quas. Ipsam ipsa quaerat id nisi neque quas fugit totam veritatis voluptatum? Non, numquam?
            <br /><br />
            <Link className="text-accent font-bold italic underline" to={'/profile'}>Read More...</Link>
            </div>
            </div>
            <br /><br />
            {/* social links */}
            <div className="flex">
                {/* header */}
                <div className="font-bold text-xl w-1/3">Follow Me</div>
                {/* content */}
                <div className="flex space-x-3 text-accent">
                <FaGithub className="w-10 h-10" />
                <FaLinkedin className="w-10 h-10" />
                <FaYoutube className="w-10 h-10" />
                </div>
            </div>
            <p className="text-secondary text-center mt-3">inspired by <a target="blank" href="https://andersnoren.se/">Anders Norén</a>'s Pulitzer theme</p>
            </section>
    );
};

export default Footer;