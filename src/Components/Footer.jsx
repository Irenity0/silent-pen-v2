import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="w-1/2 mx-auto">
            {/* about */}
            <div className="flex">
            {/* header */}
            <div className="font-bold text-xl w-1/3">About</div>
            {/* content */}
            <div className="w-2/3 font-newsreader text-secondary text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, adipisci. Cupiditate amet veniam natus nihil tempore quas. Ipsam ipsa quaerat id nisi neque quas fugit totam veritatis voluptatum? Non, numquam?
            <br /><br />
            <Link className="text-tertiary font-bold italic underline" to={'/about'}>Read More...</Link>
            </div>
            </div>
            <br /><br />
            {/* social links */}
            <div className="flex">
                {/* header */}
                <div className="font-bold text-xl w-1/3">Follow Me</div>
                {/* content */}
                <div className="flex space-x-3 text-tertiary">
                <FaGithub className="w-10 h-10" />
                <FaLinkedin className="w-10 h-10" />
                <FaYoutube className="w-10 h-10" />
                </div>
            </div>
            </section>
    );
};

export default Footer;