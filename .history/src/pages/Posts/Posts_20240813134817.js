import React from 'react';
import { Link } from 'react-router-dom';
import './Posts.css';

const Posts = () => {
  const posts = [
    {
      id: 1,
      title: 'Hello 1111',
      description: 'Hello 1111',
      createdAt: '2024-08-10',
      tags: ['Tag1', 'Tag2'],
    },
    {
      id: 2,
      title: 'Hello 2222',
      description: 'Hello 2222',
      createdAt: '2024-08-11',
      tags: ['Tag1', 'Tag3'],
    },
    {
      id: 3,
      title: 'Hello 3333',
      description: 'Hello 3333',
      createdAt: '2024-08-12',
      tags: ['Tag2', 'Tag3'],
    },
  ];

  return (
    <div className="posts-page">
      <h1>Blog Posts</h1>
      <Link to="/new-post" className="new-post-button">New Post</Link>
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
