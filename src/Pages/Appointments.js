import React, { useState } from 'react';
import Sidenav from "./Sidenav";

function getDoctors() {
  return [
    { id: 1, name: 'Dr. Smith', specialization: 'Cardiology', available: ['Monday', 'Wednesday', 'Friday'] },
    { id: 2, name: 'Dr. Johnson', specialization: 'Dermatology', available: ['Tuesday', 'Thursday'] },
    { id: 3, name: 'Dr. Lee', specialization: 'Neurology', available: ['Monday', 'Thursday'] },
  ];
}

function Appointments() {
  const doctors = getDoctors();
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    date: '',
    doctorId: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Here you would typically send the data to a server or API
    console.log('Appointment Data Submitted:', appointmentData);
    // Reset form
    setAppointmentData({
      name: '',
      date: '',
      doctorId: '',
    });
  }

  return (
    <div>
      <div>
         <Sidenav/>
      </div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Patient Name:</label>
          <input
            type="text"
            name="name"
            value={appointmentData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={appointmentData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Doctor:</label>
          <select
            name="doctorId"
            value={appointmentData.doctorId}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name} - {doctor.specialization}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Book Appointment</button>
      </form>

      <h3>Available Doctors</h3>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            <strong>{doctor.name}</strong> - {doctor.specialization} <br />
            <em>Available:</em> {doctor.available.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Appointments;
