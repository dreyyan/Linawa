import React, { useState, useEffect } from 'react';
import { auth, db, collection, addDoc } from "../firebase";
import styles from './PetitionForm.module.css';
import ReportIssues from './ReportIssues';
import InfoSection from './InfoSection';

const PetitionForm = () => {
  const [petitionTitle, setPetitionTitle] = useState("");
  const [petitionMessage, setPetitionMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [activeTab, setActiveTab] = useState("petition");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email);
    } else {
      console.log("No user is logged in");
    }
  }, []);

  const handleSubmitPetition = async (e) => {
    e.preventDefault();

    if (!petitionTitle || !userEmail || !petitionMessage) {
      alert("All fields are mandatory!");
      return;
    }

    const petitionData = {
      petitionTitle,
      petitionMessage,
      userEmail,
      createdAt: new Date(),
    };

    try {
      const petitionRef = collection(db, 'petitions');
      await addDoc(petitionRef, petitionData);

      alert('Petition submitted successfully!');
      setPetitionMessage('');
      setPetitionTitle('');
    } catch (err) {
      console.error('Error submitting petition: ', err);
      alert("Failed to submit petition!");
    }
  };

  return (
    <div className="formContainer">
      <div className="section-title-div">
        <h1 className="section-title">Petition and Report Issue</h1>
        <p className="section-description">
          One feature of this platform is to encourage citizens to take part in democracy by signing petitions or reporting misconduct
          during the Philippine Elections.
        </p>
      </div>

      

      {/* Tab toggle buttons */}
      <div className="tab-toggle">
        <button
          className={`tab-button ${activeTab === "petition" ? "active" : ""}`}
          onClick={() => setActiveTab("petition")}
        >
          Petition
        </button>
        <button
          className={`tab-button ${activeTab === "report" ? "active" : ""}`}
          onClick={() => setActiveTab("report")}
        >
          Report Issue
        </button>
      </div>

      {/* Info Section */}
      <InfoSection selectedOption={activeTab === "petition" ? "File a Petition" : "Submit Report"} />

      {/* PETITION FORM */}
      {activeTab === "petition" && (
        <form onSubmit={handleSubmitPetition}>
          <div className="inputPetitionTitle">
            <label htmlFor="petitionTitle" className="form-label">Petition Title:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter petition title"
              value={petitionTitle}
              onChange={(e) => setPetitionTitle(e.target.value)}
              id="petitionTitle"
            />
          </div>
          <div className="inputMessage">
            <label htmlFor="petitionMessage" className="form-label">Message:</label>
            <textarea
              className="form-control"
              id="petitionMessage"
              rows="10"
              value={petitionMessage}
              onChange={(e) => setPetitionMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      )}

      {/* REPORT FORM */}
      {activeTab === "report" && (
        <div className="reportSection">
          <ReportIssues />
        </div>
      )}
    </div>
  );
};

export default PetitionForm;
