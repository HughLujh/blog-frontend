import React, { useState } from 'react';
import './NewPost.css';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!summary.trim()) newErrors.summary = "Summary is required";
    if (!content.trim()) newErrors.content = "Content is required.";
    if (!tags.trim()) newErrors.tags = "Tags are required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log({ title, content, tags });
      setErrors({});
      setTitle('');
      setSummary('');
      setContent('');
      setTags('');
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
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter the summary"
            required
          ></textarea>
          {errors.content && <div className="error">{errors.content}</div>}
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
