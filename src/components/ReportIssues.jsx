import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import MapComponent from './MapComponent';

const ReportIssues = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const auth = getAuth();

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUserEmail(currentUser.email);
    } else {
      alert('You must be signed in to report an issue.');
      // Optional: redirect to login page
    }
  }, []);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category || !description || !selectedLocation || !userEmail) {
      alert('Please fill out all fields and select a location!');
      return;
    }

    const { lat, lng } = selectedLocation;

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

    setCategory('');
    setDescription('');
    setSelectedLocation(null);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Report Election Issue</h1>
      <div className="row">
        <div className="col-md-6">
          <MapComponent onLocationSelect={handleLocationSelect} />
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
            <div className="form-group mb-3">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                <option value="Vote-Buying">Vote Buying</option>
                <option value="Election-Fraud">Election Fraud</option>
                <option value="Vote-Tampering">Vote Tampering</option>
                <option value="Misinformation">Misinformation</option>
                <option value="Polling-Station-Problem">Polling Station Problems</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows="4"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit Report
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportIssues;
