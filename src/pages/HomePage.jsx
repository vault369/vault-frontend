import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome to VAULT</h1>
      <p>Explore digital music experiences. Your album <strong>AWAKENING</strong> will launch here soon.</p>
      <Link to="/track/1"><button>Preview Track Page</button></Link>
    </div>
  );
};

export default HomePage;
