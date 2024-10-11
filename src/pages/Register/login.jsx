import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirection after signup
import "./register.css"; // Import your CSS for styling
import { Link } from "react-router-dom";
import axios from "axios";
const Login = () => {
  // State variables to store form inputs
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For navigation after signup

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation (ensure all fields are filled)
    if ( !email || !password) {
      setError("All fields are required");
      return;
    }

    // Clear any existing error messages
    setError("");

    const data = {
     
      email: email,
      password: password,
    };
    try {
      const response = await axios.get(
        "https://studyboosta.onrender.com/users",
        {
          params: data, // Pass data as query parameters
        }
      );
      console.log(response.data);

      if (response.status === 200) {
        alert("Login Successful");
        navigate("/Home");
      }
    } catch (error) {
      setError("Incorrect details. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="form-container col-md-6">
          <h4 className="text-center mb-4">Log In</h4>

          {/* Display error message */}
          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn-custom">
                Log In
              </button>
            </div>

            <div className="d-flex justify-content-center mt-2">
              <p>
                New to StudyBoosta?
                <Link to="/Register">Create an Account here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
