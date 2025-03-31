import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const LoginPage: React.FC = () => {
  const [email, setEmailInput] = useState("");
  const [password, setPasswordInput] = useState("");
  const { setEmail } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setEmail(email);
      navigate("/home");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p><Link to="/reset-password">Forgot Password?</Link></p>
      <p>Don’t have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
};

export default LoginPage;

