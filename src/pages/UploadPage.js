import React, { useState } from 'react';

const UploadPage = () => {
  const [formData, setFormData] = useState({
    title: '', description: '', price: 0, fileUrl: '', unlockableUrl: '', ownerId: ''
  });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/api/upload`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => alert('Track uploaded!'));
  };

  return (
    <div className="container">
      <h1>Upload Track</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <input name="description" placeholder="Description" onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price (USD)" onChange={handleChange} required />
        <input name="fileUrl" placeholder="Track File URL" onChange={handleChange} required />
        <input name="unlockableUrl" placeholder="Unlockable ZIP URL" onChange={handleChange} required />
        <input name="ownerId" placeholder="Your Supabase User ID" onChange={handleChange} required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadPage;
