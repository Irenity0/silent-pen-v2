import { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";

const HomePage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch the data from the public folder for noe
        fetch('https://silent-pen-server.vercel.app/blogs')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((data) => setBlogs(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <section className="w-10/12 min-h-screen md:11/12 lg:w-1/2 mx-auto">
            {blogs.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <ul className="space-y-16">
                    {blogs.map((blog, index) => (
                        <li key={index}>
                            <BlogCard blog={blog} />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default HomePage;
