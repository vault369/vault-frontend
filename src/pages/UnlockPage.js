import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UnlockPage = () => {
  const { id } = useParams();
  const [unlockUrl, setUnlockUrl] = useState('');

  useEffect(() => {
    const userEmail = prompt('Enter your email to unlock:');
    fetch(`${process.env.REACT_APP_API_URL}/api/unlock`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trackId: id, userEmail })
    })
      .then(res => res.json())
      .then(data => setUnlockUrl(data.unlockableUrl));
  }, [id]);

  if (!unlockUrl) return <div>Verifying purchase...</div>;

  return (
    <div className="container">
      <h1>Unlocked!</h1>
      <a href={unlockUrl} target="_blank" rel="noopener noreferrer">Download ZIP</a>
    </div>
  );
};

export default UnlockPage;
