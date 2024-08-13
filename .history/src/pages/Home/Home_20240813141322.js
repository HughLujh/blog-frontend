import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'Placeholder 1111',
      description: 'Placeholder 1111',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      id: 2,
      title: 'Placeholder 2222',
      description: 'Placeholder 2222',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      id: 3,
      title: 'Placeholder 3333',
      description: 'Placeholder 4444',
      image: 'https://via.placeholder.com/400x200',
    },
  ];

  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Welcome to My Blog</h1>
        <p>Sharing knowledge about web development, programming, and more.</p>
      </header>

      <section className="featured-posts">
        <div className="posts-header">
          <h2>Featured Posts</h2>
          <Link to="/new-post" className="new-post-button">New Post</Link>
        </div>
        <div className="posts-container">
          {featuredPosts.map(post => (
            <div key={post.id} className="post-card">
              <img src={post.image} alt={post.title} className="post-image" />
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <Link to={`/posts/${post.id}`} className="read-more">Read More</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
