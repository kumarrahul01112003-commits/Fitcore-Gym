import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Password match nahi kar raha bhai!");
      return;
    }

    alert("Account successfully created! 💪");

   

    console.log(form);
  };

  return (
   
    <div className="signup-page">

      <div className="signup-card">

        <div className="signup-left">
          <h1>FIT<span>CORE</span></h1>

          <h2>BUILD YOUR<br />
            <span>STRONGER</span> SELF
          </h2>

          <p>
            Your body can do it. It's your mind you need to convince.
          </p>
        </div>

        <div className="signup-right">

          <h2>JOIN FITCORE</h2>
          <p className="subtitle">Create your account and start your journey 💪</p>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button className="signup-btn" type="submit">
              CREATE ACCOUNT
            </button>

          </form>

          <p className="login-text">
            Already have an account?
            <a href="/login"> Login</a>
          </p>

        </div>

      </div>

    </div>
    
  );
};

export default Signup;