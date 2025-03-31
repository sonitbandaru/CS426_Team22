import React from "react";

const ResetPassword: React.FC = () => {
  return (
    <div>
      <h2>Reset Your Password</h2>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ResetPassword;

