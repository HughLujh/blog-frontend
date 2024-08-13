import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Posts.css';

const Posts = () => {
  const navigate = useNavigate();

  const handleNewPostClick = () => {
    navigate('/new-post'); 
  };

  const posts = [
    {
      id: 1,
      title: 'Hello 1111',
      description: 'This is a summary of the first post.',
      createdAt: '2024-08-13',
      tags: ['React', 'JavaScript'],
    },
    {
      id: 2,
      title: 'Hello 2222',
      description: 'This is a summary of the second post.',
      createdAt: '2024-08-12',
      tags: ['CSS', 'HTML'],
    },
    {
      id: 3,
      title: 'Hello 3333',
      description: 'This is a summary of the third post.',
      createdAt: '2024-08-11',
      tags: ['Web Development', 'Programming'],
    },
  ];

  return (
    <div className="posts-page">
      <div className="header-container">
        <h1>Blog Posts</h1>
        <button className="new-post-button" onClick={handleNewPostClick}>
          New Post
        </button>
      </div>
      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <h2>{post.title}</h2>
              <span className="post-date">{post.createdAt}</span>
            </div>
            <p className="post-summary">{post.description}</p>
            <div className="post-footer">
              <div className="post-tags">
                {post.tags.map(tag => (
                  <span key={tag} className="post-tag">{tag}</span>
                ))}
              </div>
              <a href={`/posts/${post.id}`} className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
