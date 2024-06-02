import React, { useState } from 'react';
import './Records.css';
import Sidenav from './Sidenav';

function Records() {
  function getVisits() {
    return [
      { id: 1, patientName: 'John Doe', date: '2024-05-06', issue: 'Flu', doctor: 'Dr. Smith' },
      { id: 2, patientName: 'Jane Roe', date: '2023-05-15', issue: 'Check-up', doctor: 'Dr. Johnson' },
      { id: 3, patientName: 'Dylan Roe', date: '2022-10-30', issue: 'High Blood Pressure', doctor: 'Dr. Kinuthia' },
      { id: 4, patientName: 'Naje Dior', date: '2021-12-17', issue: 'Bone Fracture', doctor: 'Dr. Johnson' },
      { id: 5, patientName: 'Juliah Daniels', date: '2020-08-20', issue: 'Covid Vaccination', doctor: 'Dr. Jude' },
      { id: 6, patientName: 'Troy Roman', date: '2020-01-10', issue: 'Eczema', doctor: 'Dr. Ranvir' },
      { id: 7, patientName: 'Adriane Yde', date: '2019-07-26', issue: 'Ulcers', doctor: 'Dr. Tirtha' },

      // Add more sample data here
    ];
  }

  const [visits] = useState(getVisits());

  return (
    <div>
      <Sidenav/>
      <h2>Previous Visits</h2>
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Issue</th>
            <th>Doctor Visited</th>
          </tr>
        </thead>
        <tbody>
          {visits.map((visit) => (
            <tr key={visit.id}>
              <td>{visit.patientName}</td>
              <td>{visit.date}</td>
              <td>{visit.issue}</td>
              <td>{visit.doctor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Records;
