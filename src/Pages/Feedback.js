import React, { useState } from 'react';
import './Feedback.css';
import Sidenav from './Sidenav';



function Feedbackpage() {
  function getInitialFeedbackData() {
    return {
      name: '',
      email: '',
      rating: '',
      comments: '',
    };
  }
  const [feedbackData, setFeedbackData] = useState(getInitialFeedbackData());

  function getInitialSubmittedFeedback() {
    return [];
  }

  const [submittedFeedback, setSubmittedFeedback] = useState(getInitialSubmittedFeedback());

  function handleChange(e) {
    const { name, value } = e.target;
    setFeedbackData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Add the feedback to the submitted feedback list
    setSubmittedFeedback([...submittedFeedback, feedbackData]);
    // Reset the form
    setFeedbackData(getInitialFeedbackData());
  }

  return (
    <div>
      <Sidenav/>
      <h2>Patient Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={feedbackData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={feedbackData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Rating:</label>
          <select
            name="rating"
            value={feedbackData.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="1">1 - Very Poor</option>
            <option value="2">2 - Poor</option>
            <option value="3">3 - Average</option>
            <option value="4">4 - Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <div>
          <label>Comments:</label>
          <textarea
            name="comments"
            value={feedbackData.comments}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>

      <h3>Submitted Feedback</h3>
      <ul>
        {submittedFeedback.map((feedback, index) => (
          <li key={index}>
            <strong>Name:</strong> {feedback.name} <br />
            <strong>Email:</strong> {feedback.email} <br />
            <strong>Rating:</strong> {feedback.rating} <br />
            <strong>Comments:</strong> {feedback.comments}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feedbackpage;
