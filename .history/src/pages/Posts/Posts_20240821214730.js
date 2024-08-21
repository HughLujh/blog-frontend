import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:8080/posts',{
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (result.message === "success") {
          setPosts(result.data);
        } else {
          console.error('Unexpected response format:', result);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
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
