import React, { useState } from 'react';
import './NewPost.css';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required.";
    if (!description.trim()) newErrors.description = "Description is required.";
    if (!tags.trim()) newErrors.tags = "Tags are required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log({ title, description, tags });
      setErrors({});
      setTitle('');
      setDescription('');
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
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the description"
            required
          ></textarea>
          {errors.description && <div className="error">{errors.description}</div>}
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
