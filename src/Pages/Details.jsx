import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const { title } = useParams(); 
    const [blog, setBlog] = useState(null); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        fetch('https://silent-pen-server.vercel.app/blogs')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((data) => {
                const foundBlog = data.find((b) => b.blog_title === title);
                setBlog(foundBlog); 
            })
            .catch((err) => {
                setError(err.message); 
            });
    }, [title]);

    if (error) {
        return <p className="text-red-500">Error: {error}</p>;
    }

    if (!blog) {
        return <p className="min-h-screen mx-auto w-10/12 md:11/12 lg:w-1/2">Loading...</p>;
    }

    return (
        <section className="w-10/12 md:11/12 lg:w-1/2 mx-auto">
            <h1 className="text-xl font-bold text-accent">{blog.blog_title}</h1>
            <p className="text-secondary/80 text-sm">
                {blog.blog_date} | {blog.blog_category}
            </p>
            <p className="mt-4 font-newsreader text-lg text-secondary">{blog.blog_content}</p>
        </section>
    );
};

export default Details;
