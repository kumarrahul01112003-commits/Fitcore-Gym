import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";

const Login = () => {

  const [form, setForm] = useState({
   
    email: "",
    
    password: "",
   
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response=await axios.post("http://localhost:3000/login",form)

  

    alert("Account successfully created! 💪");

   

    console.log(form);
    console.log(response);

    console.log(response.data.message);
    
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
          <p className="subtitle">Login your account and start your journey 💪</p>

          <form onSubmit={handleSubmit}>

           

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

            

            <button className="signup-btn" type="submit">
              Login Your ACCOUNT
            </button>

          </form>

          <p className="login-text">
            If you are new User Sign Up here?
            <a href="/register"> Login</a>
          </p>

        </div>

      </div>

    </div>
    
  );
};

export default Login;