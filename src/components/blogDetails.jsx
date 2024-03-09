/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./blogDetails.css";

const BlogDetails = ({ filteredBlogs }) => {
  const firstFiveBlogs = filteredBlogs.slice(0, 5);

  const fetchBlogPost = async (blogId) => {
    try {
      const response = await fetch(`http://localhost:4000/${blogId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch blog post");
      }
      const blogPostData = await response.json();
      return blogPostData;
    } catch (error) {
      console.error("Error fetching blog post:", error);
      return null;
    }
  };

  return (
    <>
      <div className="Square">
        <div className="add-blogs">
          <h4>Recent Blogs</h4>
          <Link to={"/create-blog"}>
            <button>+ Add New</button>
          </Link>
        </div>
        {/* Display filteredBlogs instead of blogs */}
        {filteredBlogs ? (
          firstFiveBlogs.map((blog) => (
            <div key={blog.id}>
              <p
                className="blog-content"
                onClick={() => fetchBlogPost(blog.id)}
                key={blog.id}
              >
                {blog.content.split(" ").slice(0, 5).join(" ")}
                ...
              </p>{" "}
            </div>
          ))
        ) : (
          <p>not found</p>
        )}
      </div>
    </>
  );
};

export default BlogDetails;
