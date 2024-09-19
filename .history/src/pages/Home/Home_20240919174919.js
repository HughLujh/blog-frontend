import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { api } from "../../config/apiConfig";
const Home = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      try {
        const response = await fetch(`/api/posts`, {
          method: 'GET',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (result.message === "success") {
          setFeaturedPosts(result.data);
        } else {
          console.error('Unexpected response format:', result);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchFeaturedPosts();
  }, []);

  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Welcome to My Blog</h1>
        <p>Sharing knowledge about web development, programming, and more.</p>
      </header>

      <section className="featured-posts">
        <div className="posts-header">
          <h2>Featured Posts</h2>
        </div>
        <div className="posts-container">
          {featuredPosts.map(post => (
            <div key={post.id} className="post-card">
              <div className="post-header">
                <h3>{post.title}</h3>
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
        <div className="view-all-container">
          <Link to="/posts" className="view-all">View All Posts</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
