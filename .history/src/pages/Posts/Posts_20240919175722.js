import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Posts.css';
import { api } from '../../config/apiConfig'; // Import Axios instance

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Using Axios api instance to send the GET request
        const response = await api.get('posts');
        if (response.data.message === "success") {
          setPosts(response.data.data);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        // Handle errors
        if (error.response) {
          console.error('Error fetching posts:', error.response.data);
        } else {
          console.error('Error fetching posts:', error.message || error);
        }
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="posts-page">
      <h1>Blog Posts</h1>
      <div className="new-post-container">
        <Link to="/new-post" className="new-post-button">New Post</Link>
      </div>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <h2>{post.title}</h2>
              <span className="post-date">{new Date(post.createdAt).toLocaleString()}</span>
            </div>
            <p>{post.summary}</p>
            <div className="post-footer">
              <div className="post-tags">
                {/* Assuming tags should be displayed here, though not in response */}
              </div>
              <Link to={`/posts/${post.id}`} className="read-more">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
