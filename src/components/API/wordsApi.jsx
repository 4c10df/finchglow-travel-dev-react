import React, { useState, useEffect } from "react";
import axios from "axios";
import ErrorPage from "../errorMessage/errorPage";
import Loading from "./loading";

const WordPressPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://finchglowtravels.agency/wp-json/wp/v2/posts"
        );
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div>
      <h1>WordPress Posts</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title.rendered}</h2>
              <div
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
};

export default WordPressPosts;
