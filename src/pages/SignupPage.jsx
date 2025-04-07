import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import "./styles/signup.css";

const SignUpPage = () => {
  const { signup } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const signUpStyle = {
    color: "white",
  };
  const labelStyle = {
    color: "black",
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate("/pages/homePage");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google User:", user);
      // Navigate after successful Google sign-up
      navigate("/pages/homePage");
    } catch (error) {
      setError("Error with Google sign-up. Please try again.");
    }
  };

  return (
    <div className="sign-up-container-wrap">
      <div className="sign-up-container">
        <h2>SIGN-UP</h2>
        <p>Stay updated with the latest election news.</p>

        <form onSubmit={handleSignUp}>
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

          <button type="submit">Sign Up</button>
        </form>

        {error && <div>{error}</div>}

        <div className="google-sign-up">
          <button style={signUpStyle} onClick={handleGoogleSignUp}>Sign up with Google</button>
        </div>

        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
