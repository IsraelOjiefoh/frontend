// /* eslint-disable react/prop-types */
// import "./recentBlog.css";
// const RecentBlog = ({ blogs }) => {
//   const firstFiveBlogs = blogs.slice(0, 5);
//   return (
//     <>
//       <div className="Square">
//         <div className="add-blogs">
//           <h4>Recent Blog</h4>
//           <button>+ Add Blog</button>
//         </div>
//         {blogs ? (
//           firstFiveBlogs.map((blog) => (
//             <div key={blog.id}>
//               <h3>{blog.title}</h3>
//               <p>{blog.content}</p>
//               <p>Author: {blog.author}</p>
//             </div>
//           ))
//         ) : (
//           <p>not found</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default RecentBlog;
