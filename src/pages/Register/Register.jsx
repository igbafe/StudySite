import React from 'react'
import './register.css'

const Register = () => {
  return (
    
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="form-container col-md-6">
          <h4 className="text-center mb-4">Registration Form</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input type="password" className="form-control" id="confirm-password" placeholder="Confirm your password" />
            </div>
            <div className="form-group">
              <label htmlFor="faculty">Faculty:</label>
              <select className="form-control" id="faculty">
                <option value="" disabled selected>Select your faculty</option>
                <option value="faculty1">Engineering</option>
                <option value="faculty2">Physical Sciences</option>
                <option value="faculty3">Life SciencesS</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="department">Department:</label>
              <input type="text" className="form-control" id="department" placeholder="Enter your department" />
            </div>
            <div className="form-group">
              <label htmlFor="level">Level:</label>
              <select className="form-control" id="level">
                <option value="" disabled selected>Select your level</option>
                <option value="100">Level 1</option>
                <option value="200">Level 2</option>
                <option value="300">Level 3</option>
                <option value="400">Level 3</option>
                <option value="500">Level 3</option>
              </select>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="terms" />
              <label className="form-check-label" htmlFor="terms">I accept the Terms and Conditions of the Training and agree to abide by them all</label>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-custom">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
 

  )
}

export default Register