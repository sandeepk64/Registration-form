import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Data stored successfully: ' + JSON.stringify(formData));
  };

  const handleReset = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: '',
    });
  };

  return (
    <div className=""><h1 className='head text-center my-3 text-secondary  bg-gradient-dark fs-1 shadow fw-bolder'>Higher Secondary Admission Form</h1>
    <div className="container mt-5 mb-5">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Mobile:
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Course:
          <select name="course" value={formData.course} onChange={handleChange} required>
            <option value="">Select Course</option>
            <option value="Biology">Biology</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Humanities">Humanities</option>
          </select>
        </label>
        <br />
        <div className="button-container">
          <button type="submit">Register</button>
          <button className='bg-danger' type="button" onClick={handleReset}>Cancel</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default App;
