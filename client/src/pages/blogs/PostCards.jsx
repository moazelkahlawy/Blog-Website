import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/features/blogs/blogsSlice";
import Card from "./card";

const PostCards = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector((state) => state.blogs);

  // dispatch action to get blogs
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);
  console.log(blogs);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = currentPage * blogsPerPage;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);
  const handelPageChange = (nexPage) => {
    setCurrentPage(nexPage);
  };

  return (
    <div className="w-full lg:w-2/3">
      {!isError && !isLoading && paginatedBlogs?.length > 0 ? (
        <div>
          {paginatedBlogs.map((blog, index) => (
            <Card blog={blog} key={index} />
          ))}
          {/* paginations */}
          <div className="space-x-2">
            <button
              className="px-2 bg-red-500 text-white rounded cursor-pointer"
              onClick={() => handelPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>{currentPage}</span>
            <button
              className="px-2 bg-indigo-500 text-white rounded cursor-pointer"
              onClick={() => handelPageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>No blogs found!</div>
      )}
    </div>
  );
};

export default PostCards;
