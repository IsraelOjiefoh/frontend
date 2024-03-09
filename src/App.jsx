import { useState, useEffect } from "react";
import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BlogForm from "./components/blogForm/BlogForm";

const GetBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/`);

        if (!response.ok) {
          throw new Error("Failed to fetch blog details");
        }

        const blogData = await response.json();
        setBlogs(blogData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error(`Error fetching blog details: ${error}`);
        setError(error.message); // Set error message if fetching fails
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchBlogDetails();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p> // Show loading message while fetching data
      ) : error ? (
        <p>Error: {error}</p> // Show error message if fetching fails
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home blogs={blogs} />} />
            <Route path="/create-blog" element={<BlogForm />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default GetBlogs;
