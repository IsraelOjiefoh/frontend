import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./blogform.css";
const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Blog = { title, content, author };

    const response = await fetch("http://localhost:4000/", {
      method: "POST",
      body: JSON.stringify(Blog),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else {
      setError(null);
      console.log("New blog added");
      setContent("");
      setTitle("");
      setAuthor("");
      setSuccess("Blog Added successfully");
      setTimeout(() => {
        navigate(-1);
      }, 1000);
    }

    // Check if title or content is empty
    if (!title || !content) {
      setError("Please enter both title and content");
      return;
    }
  };

  return (
    <div className="blog-form-container">
      <form onSubmit={handleSubmit} className="blog-form">
        <div>
          <p>Enter Blog Title:</p>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="form-input"
          />
        </div>

        <div>
          <p>Authors Name:</p>
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            className="form-input"
            placeholder="Optional"
          />
        </div>

        <div style={{ marginTop: 20 }}>
          <p>Enter blog content</p>
          <textarea
            name="Blog Content"
            id="blog-content"
            cols="30"
            rows="10"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            className="form-textarea"
          ></textarea>
        </div>
        {success && (
          <p className="error-message" style={{ color: "green" }}>
            {success}
          </p>
        )}
        {error && (
          <p className="error-message" style={{ color: "red" }}>
            {error}
          </p>
        )}
        <button type="submit" onClick={handleSubmit} className="submit-button">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
