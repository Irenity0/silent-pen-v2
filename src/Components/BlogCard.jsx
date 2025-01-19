import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BlogCard = ({ blog: { blog_title, blog_date, blog_category, blog_content } }) => {
    return (
        <>
            <Link className="text-xl underline text-accent font-semibold" to={`/blogs/${blog_title}`}>{blog_title}</Link>
            <p className="text-accent/90">{blog_date} | {blog_category}</p>
            <p className="mt-2">
                {blog_content.slice(0, 300)}{blog_content.length > 100 && "..."}
            </p>
        </>
    );
};

export default BlogCard;
