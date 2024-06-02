import React, { useState } from 'react';
import './Profile.css';
import Sidenav from './Sidenav';

function Profile() {
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    gender: '',
    address: '',
    phoneNumber: '',
    weight: '',
    height: '',
    occupation: '',
    educationLevel: '',
    medicalCondition: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Here you would typically send the data to a server or API
    console.log('Patient Data Submitted:', patientData);
    // You can use fetch or axios to send the data to a server
    // For example: axios.post('/api/patient', patientData);
    // Reset form
    setPatientData({
      name: '',
      age: '',
      gender: '',
      address: '',
      phoneNumber: '',
      weight: '',
      height: '',
      occupation: '',
      educationLevel: '',
      medicalCondition: '',
    });
  }

  return (
    <div>
      <Sidenav/>
      <h2>Patient Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={patientData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={patientData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            value={patientData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={patientData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={patientData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Weight (kg):</label>
          <input
            type="text"
            name="weight"
            value={patientData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Height (cm):</label>
          <input
            type="text"
            name="height"
            value={patientData.height}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Occupation:</label>
          <input
            type="text"
            name="occupation"
            value={patientData.occupation}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Education Level:</label>
          <input
            type="text"
            name="educationLevel"
            value={patientData.educationLevel}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Medical Condition:</label>
          <select
            name="medicalCondition"
            value={patientData.medicalCondition}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="diabetes">Diabetes</option>
            <option value="hypertension">Hypertension</option>
            <option value="asthma">Asthma</option>
            <option value="none">None</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Profile;
