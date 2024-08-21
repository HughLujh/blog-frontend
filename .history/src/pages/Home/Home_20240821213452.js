import React, {userState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [featurePosts, setFeaturePosts] = userState([]);
  

  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Welcome to My Blog</h1>
        <p>Sharing knowledge about web development, programming, and more.</p>
      </header>

      <section className="featured-posts">
        <div className="posts-header">
          <h2>Featured Posts</h2>
          <Link to="/posts" className="view-all">View All Posts</Link>
        </div>
        <div className="posts-container">
          {featuredPosts.map(post => (
            <div key={post.id} className="post-card">
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
