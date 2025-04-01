import React, { useState } from 'react';
import MapComponent from './MapComponent';

const ReportIssues = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category || !description || !userEmail || !selectedLocation) {
      alert('Please fill out all fields and select a location!');
      return;
    }

    const { lat, lng } = selectedLocation;

    // Send the form data and location to your backend (API endpoint)
    const response = await fetch('http://localhost:5000/api/report-issue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category,
        description,
        location: { lat, lng },
        user_email: userEmail,
      }),
    });

    const data = await response.json();
    if (response.status === 201) {
      alert('Issue reported successfully!');
    } else {
      alert('Error reporting issue: ' + data.message);
    }

    
  };

  return (
    <div>
      <h1>Report Election Issue</h1>
      <MapComponent onLocationSelect={handleLocationSelect} />
      <form onSubmit={handleSubmit}>
        <label>Category:</label>
        <select value={category}
        onChange={(e) =>setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="vote-buying">Vote Buying</option>
          <option value="election-fraud">Election Fraud</option>
          <option value="vote-tampering">Vote Tampering</option>
          <option value="misinformation">Misinformation</option>
          <option value="polling-station-problem">Polling Station Problems</option>
        </select>
        <br/>

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />

        <label>Your Email:</label>
        <input
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <br />

        

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default ReportIssues;
