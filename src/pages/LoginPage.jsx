import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import "./styles/loginpage.css";

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const labelStyle = {
    color: "white",
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/pages/homepage");
    } catch (error) {
      setError("Invalid credentials! Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google User: ", user);
      navigate("/pages/homepage");
    } catch (err) {
      setError("Error with Google login. Please try again.");
    }
  };

  return (
    <div className="login-container-wrap">
      <div className="login-container">
        <h2>LOG-IN</h2>
        <p>Stay updated with the latest election news.</p>

        <form onSubmit={handleLogin}>
          <label style={labelStyle} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label style={labelStyle} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Log In</button>
        </form>

        {error && <div>{error}</div>}
        <div className="google-login">
          <button onClick={handleGoogleSignIn}>Log in with Google</button>
        </div>
        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
