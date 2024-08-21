import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  
  useEffect(() =>{
    const fetchFeaturedPosts = async () =>{
      try {
        const response = await fetch('http://localhost:8080/posts',{
          method: 'GET',
        });
        if(!response.ok){
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if(result.message === "success"){
          setFeaturedPosts(result.data);
        }else{
          console.error('Unexpected response format: ', result);
        }
      } catch (error) {
        console.error('Error fetching posts: ', error);
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
