import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  ];

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
              <span className="post-date">{post.createdAt}</span>
            </div>
            <p>{post.description}</p>
            <div className="post-footer">
              <div className="post-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="post-tag">
                    {tag}
                  </span>
                ))}
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
