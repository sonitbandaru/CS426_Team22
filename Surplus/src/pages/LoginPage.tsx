import React from "react";
import "../styles/LoginPage.css"; 

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
      </form>
    </>
  );
};

export default LoginPage;
