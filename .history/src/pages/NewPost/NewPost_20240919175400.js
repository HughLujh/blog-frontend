import React, { useState } from 'react';
import './NewPost.css';
import { api } from '../../config/apiConfig'; // Import your Axios instance

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    // Validation checks
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!summary.trim()) newErrors.summary = "Summary is required";
    if (!content.trim()) newErrors.content = "Content is required.";
    if (!tags.trim()) newErrors.tags = "Tags are required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        // Make POST request using Axios
        const response = await api.post('posts', {
          title,
          summary,
          content,
          tags,
        });

        // Handle success
        alert(`${response.data.message}`);
        setErrors({});
        setTitle('');
        setSummary('');
        setContent('');
        setTags('');
      } catch (error) {
        // Handle errors
        if (error.response) {
          // Server response with an error (4xx or 5xx)
          console.error('Failed to create post:', error.response.data);
        } else {
          // Network or other errors
          console.error('Failed to create post:', error.message || error);
        }
      }
    }
  };

  return (
    <div className="new-post-page">
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit} className="new-post-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title"
            required
            autoFocus
          />
          {errors.title && <div className="error">{errors.title}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="summary">Summary:</label>
          <textarea
            id="summary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Enter the summary"
            required
          ></textarea>
          {errors.summary && <div className="error">{errors.summary}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter the content"
            required
          ></textarea>
          {errors.content && <div className="error">{errors.content}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags (comma-separated):</label>
          <input
            type="text"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g., React, JavaScript, CSS"
            required
          />
          {errors.tags && <div className="error">{errors.tags}</div>}
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPost;
