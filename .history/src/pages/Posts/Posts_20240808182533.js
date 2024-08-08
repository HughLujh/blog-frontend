import React from 'react';
import './Posts.css';

const Posts = () => {
  // Example data, in a real app this could come from an API
  const posts = [
    {
      id: 1,
      title: 'Hello 1111',
      description: 'Hello 1111',
    },
    {
      id: 2,
      title: 'Hello 2222',
      description: 'A deep dive into the new features introduced in ES6 and how they improve JavaScript.',
    },
    {
      id: 3,
      title: 'CSS Flexbox Guide',
      description: 'Master CSS Flexbox with this comprehensive guide and layout your web pages like a pro.',
    },
  ];

  return (
    <div className="posts-page">
      <h1>Blog Posts</h1>
      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <a href={`/posts/${post.id}`} className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
