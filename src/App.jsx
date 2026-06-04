import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="form-box">
        <h2>Employee Details Form</h2>

        <form>
          <div className="form-group">
            <label>Employee ID</label>
            <input type="text" placeholder="Enter Employee ID" />
          </div>

          <div className="form-group">
            <label>Employee Name</label>
            <input type="text" placeholder="Enter Employee Name" />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <div className="gender">
              <label>
                <input type="radio" name="gender" /> Male
              </label>

              <label>
                <input type="radio" name="gender" /> Female
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input type="date" />
          </div>

          <div className="form-group">
            <label>Department</label>
            <input type="text" placeholder="Department" />
          </div>

          <div className="form-group">
            <label>Designation</label>
            <input type="text" placeholder="Designation" />
          </div>

          <div className="form-group">
            <label>Salary</label>
            <input type="number" placeholder="Salary" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Phone Number" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email Address" />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea rows="4" placeholder="Enter Address"></textarea>
          </div>

          <div className="btn-group">
            <button type="submit" className="submit-btn">
              Submit
            </button>

            <button type="reset" className="reset-btn">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;