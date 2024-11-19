import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import LoginModal from "./components/loginModal";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    collegeName: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    degree: "",
    year: "",
    startDate: "",
    companyName: "",
    companyAddress: "",
    mentorName: "",
    mentorContact: "",
    mentorEmail: "",
    registrationNumber: "",
    city: "",
    stipend: "",
    offerLetter: null,
  });

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegistrationVisible, setRegistrationVisible] = useState(true); 
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (!formData[key] || (typeof formData[key] === "string" && formData[key].trim() === "")) {
        alert(`${key.replace(/([A-Z])/g, " $1")} cannot be empty.`);
        return;
      }
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      await axios.post("http://localhost:5000/api/register", data);
      alert("Registration successful!");
      setFormData({
        name: "",
        collegeName: "",
        email: "",
        password: "",
        phone: "",
        age: "",
        degree: "",
        year: "",
        startDate: "",
        companyName: "",
        companyAddress: "",
        mentorName: "",
        mentorContact: "",
        mentorEmail: "",
        registrationNumber: "",
        city: "",
        stipend: "",
        offerLetter: null,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error registering. Please try again.");
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", loginData);
      alert(`Welcome back, ${response.data.user.name}!`);
      setLoginModalOpen(false);
      setRegistrationVisible(true); // Show the registration form again after login
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="app">
      
      <header className="header">
        {!isLoginModalOpen ? (
          <button
            className="sign-in-btn"
            onClick={() => {
              setLoginModalOpen(true);
              setRegistrationVisible(false); 
            }}
          >
            Sign In
          </button>
        ) : (
          <button
            className="sign-up-btn"
            onClick={() => {
              setLoginModalOpen(false);
              setRegistrationVisible(true); 
            }}
          >
            Sign Up
          </button>
        )}
      </header>

      
      {isRegistrationVisible && (
        <form onSubmit={handleSubmit} className="registration-form">
          <h2>Basic Details</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="collegeName"
            placeholder="College Name"
            value={formData.collegeName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone No"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={formData.degree}
            onChange={handleChange}
          />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={formData.year}
            onChange={handleChange}
          />
          <h2>Internship Details</h2>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="companyAddress"
            placeholder="Company Address"
            value={formData.companyAddress}
            onChange={handleChange}
          />
          <input
            type="text"
            name="mentorName"
            placeholder="External Mentor Name"
            value={formData.mentorName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="mentorContact"
            placeholder="External Mentor Contact Number"
            value={formData.mentorContact}
            onChange={handleChange}
          />
          <input
            type="email"
            name="mentorEmail"
            placeholder="External Mentor Email Address"
            value={formData.mentorEmail}
            onChange={handleChange}
          />
          <input
            type="text"
            name="registrationNumber"
            placeholder="Company's Registration Number"
            value={formData.registrationNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="number"
            name="stipend"
            placeholder="Stipend Amount"
            value={formData.stipend}
            onChange={handleChange}
          />
          <input type="file" name="offerLetter" onChange={handleChange} />
          <button type="submit">Register</button>
        </form>
      )}

      
      {isLoginModalOpen && (
        <LoginModal
          loginData={loginData}
          onLoginChange={handleLoginChange}
          onLoginSubmit={handleLoginSubmit}
          onClose={() => {
            setLoginModalOpen(false);
            setRegistrationVisible(true); 
          }}
        />
      )}
    </div>
  );
};

export default App;
