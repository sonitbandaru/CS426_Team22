import React from "react";

const SignupPage: React.FC = () => {
  return (
    <div>
      <h2>Create an Account</h2>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;