import React from "react";

import '../stylesheets/Signup.css';

const SignupPage: React.FC = () => {
  return (
    <div className="card">
      <h2>Sign up today!</h2>
      <p>Unlock your free week of our platform</p>
      <button>Sign up!</button>
    </div>
  );
};

export default SignupPage;