import React, { useState } from 'react'
// STYLES
import styles from './PetitionForm.module.css'

const PetitionForm = () => {
  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState("File a Petition");

  // Handle change of select option
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div className="formContainer">
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
          <div className="petitionSection">
            <div className="inputEmailAddress">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email Address:
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="inputMessage">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
              ></textarea>
              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </div>
        )}

        {selectedOption === "Submit Report" && (
          <div className="reportSection">
            {/* ADD REPORT ISSUES */}
          </div>
        )}
      </div>
    </>
  );
};

export default PetitionForm;
