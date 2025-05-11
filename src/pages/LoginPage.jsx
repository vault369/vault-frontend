import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const login = () => alert("Login simulated!");

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login to VAULT</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Password" value={pw} onChange={(e) => setPw(e.target.value)} /><br/>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default LoginPage;
