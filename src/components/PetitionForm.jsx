import React, { useState, useEffect } from 'react';
import { auth, db, collection, addDoc } from "../firebase";
// STYLES
import styles from './PetitionForm.module.css';
import ReportIssues from './ReportIssues';
import InfoSection from './InfoSection';

const PetitionForm = () => {
  // State to track the selected option
  const [petitionTitle, setPetitionTitle] = useState("");
  const [petitionMessage, setPetitionMessage] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [selectedOption, setSelectedOption] = useState("File a Petition");

  // Fetches current user email
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserEmail(user.email);
    } else {
      console.log("No user is logged in");
    }
  }, []);
  
  // Handle change of select option
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  // Handle form submission for petition
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
          Empowering citizens to take part in democracy by signing petitions or reporting misconduct
          during the Philippine senatorial elections.
        </p>
      </div>
      <InfoSection selectedOption={selectedOption} />
      <select
        className="form-select-petition"
        aria-label="Default select example"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="File a Petition">File a Petition</option>
        <option value="Submit Report">Submit Report</option>
      </select>

      {selectedOption === "File a Petition" && (
        <form onSubmit={handleSubmitPetition}>
          <div className="inputPetitionTitle">
            <label htmlFor="petitionTitle" className="form-label">
              Petition Title:
            </label>
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
            <label htmlFor="petitionMessage" className="form-label">
              Message:
            </label>
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

      {selectedOption === "Submit Report" && (
        <div className="reportSection">
          <ReportIssues />
        </div>
      )}
    </div>
  );
};

export default PetitionForm;
