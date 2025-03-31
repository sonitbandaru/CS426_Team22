import React from "react";
import "../styles/LoginPage.css"; 
import { Link } from "react-router-dom";

const PLACEHOLDERS = {
  email: "Enter your email",
  password: "Enter your password",
};

const LoginPage: React.FC = () => {
  return (
    <>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder={PLACEHOLDERS.email} className="input-field" />
        <input type="password" placeholder={PLACEHOLDERS.password} className="input-field" />
        <button className="login-button">Login</button>
        <p style={{ marginTop: "10px" }}>
          <Link to="/reset-password">Forgot Password?</Link>
        </p>
      </form>
      <p style={{ marginTop: "10px" }}>
        Don’t have an account? <Link to="/signup">Sign up</Link>
      </p>
    </>
  );
};

export default LoginPage;
