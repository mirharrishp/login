import React from "react";

function SignupPage() {
  return (
    <div className="container">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>

      <h2>Join Us</h2>

      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email Address" />
        <input type="password" placeholder="Enter Password" />
        <input type="password" placeholder="Confirm Password" />

        <button type="submit">SIGN UP</button>
      </form>

      <p>OR</p>

      <p>Already have an account?</p>

      <button className="signin">SIGN IN</button>
    </div>
  );
}

export default SignupPage;