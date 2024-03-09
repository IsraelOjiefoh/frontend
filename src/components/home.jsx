/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import BlogDetails from "./blogDetails";
import man from "../assets/man.webp";

const Home = ({ blogs }) => {
  const [greet, setGreet] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  // Function to handle changes in the search input
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter the blogs based on the search query
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBlogs(filtered);
  };
  useEffect(() => {
    const getCurrentTime = () => {
      const now = new Date();
      const hour = now.getHours();
      const currentMonth = now.toLocaleString("default", { month: "long" });
      const currentDay = now.getDate();

      let greeting;
      if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
      } else if (hour >= 12 && hour < 18) {
        greeting = "Good Afternoon";
      } else {
        greeting = "Good Evening"; // Changed from "Good Night" to "Good Evening"
      }

      setGreet(greeting);
      setCurrentTime({ month: currentMonth, day: currentDay });
    };

    getCurrentTime();
  }, []);

  return (
    <>
      <header>
        <div style={{ position: "relative" }}>
          <i
            className="fa fa-search"
            id="search-bar-icon"
            aria-hidden="true"
          ></i>
          <input
            type="search"
            name="search-bar"
            id="search-bar"
            placeholder="Search for anything"
            value={searchQuery}
            onChange={handleSearchChange}
          />{" "}
        </div>
        <small className="calander">
          <i className="fa fa-calendar" aria-hidden="true"></i> Today{" "}
          {currentTime && `${currentTime.month} ${currentTime.day}`}
        </small>
        <div id="bell">
          <i className="bell-icon fas fa-bell"></i>
          <span className="notification-badge">0</span>
        </div>
      </header>{" "}
      <h2 className="welcome">Welcome Back!</h2>
      <small className="greet">{greet && `${greet}!`}</small>
      <div className="square">
        <div>
          <div className="author">
            <p className="Israel">Israel Ojiefoh</p>{" "}
            <small>Author/Writer</small>{" "}
          </div>
          <h4 className="post">
            {blogs ? blogs.length : <p>0</p>}
            <small>Total post</small>
          </h4>
          <img className="man" src={man} alt="A man" />
        </div>
      </div>
      <BlogDetails filteredBlogs={filteredBlogs} />
    </>
  );
};

export default Home;
