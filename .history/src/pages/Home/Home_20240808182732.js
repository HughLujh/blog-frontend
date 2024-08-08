import React from 'react';
import './Home.css';

const Home = () => {
  // Example data for featured posts
  const featuredPosts = [
    {
      id: 1,
      title: 'Placeholder 1111',
      description: 'An introductory guide to building your first React application.',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      id: 2,
      title: 'Understanding JavaScript Promises',
      description: 'A detailed look at JavaScript promises and how to use them effectively.',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      id: 3,
      title: 'CSS Grid Layout',
      description: 'Master the CSS Grid layout with practical examples and techniques.',
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
        <h2>Featured Posts</h2>
        <div className="posts-grid">
          {featuredPosts.map(post => (
            <div key={post.id} className="post-card">
              <img src={post.image} alt={post.title} className="post-image" />
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <a href={`/posts/${post.id}`} className="read-more">Read More</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
