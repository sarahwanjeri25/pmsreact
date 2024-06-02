import React, { useState } from 'react';
import './Records.css';
import Sidenav from './Sidenav';

function Records() {
  function getVisits() {
    return [
      { id: 1, patientName: 'John Doe', date: '2023-05-15', issue: 'Flu', doctor: 'Dr. Smith' },
      { id: 2, patientName: 'Jane Roe', date: '2023-05-20', issue: 'Check-up', doctor: 'Dr. Johnson' },
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
