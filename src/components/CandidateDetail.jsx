import React from "react";
import { useParams, Link } from "react-router-dom";
import candidates from "./CandidatesData";
// STYLE
import styles from "./CandidateDetail.module.css";

const CandidateDetail = () => {
  const { name } = useParams(); // Get the candidate's name from URL

  // Find the candidate in the array
  const candidate = candidates.find(
    (c) => c.name.toLowerCase() === decodeURIComponent(name).toLowerCase()
  );

  // If no match, show "Candidate not found"
  if (!candidate) {
    return <p className="text-center mt-3">Candidate not found.</p>;
  }

  return (
    <>
      <h4 className="pageTitle">Candidate Information</h4>
      <div className="pageContainer">
        <div className="candidateProfilePage card">
          <img
            src={candidate.image}
            alt={candidate.name}
            className="candidateImageFormat card-img"
          />
          <div className="titleContainer">
            <h5 className="title">{candidate.name}</h5>
          </div>
          <div className="tableInformation">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th colspan="2" className="tableTitle">Personal Information</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="firstCol">Party</td>
                  <td className="secondCol">{candidate.party}</td>
                </tr>
                <tr>
                  <td className="firstCol">Alliance</td>
                  <td className="secondCol">{candidate.alliance}</td>
                </tr>
                <tr>
                  <td className="firstCol">Position</td>
                  <td className="secondCol">{candidate.position}</td>
                </tr>
                <tr>
                  <td className="firstCol">Age</td>
                  <td className="secondCol">{candidate.age}</td>
                </tr>
                <tr>
                  <td className="firstCol">Hometown</td>
                  <td>{candidate.hometown}</td>
                </tr>
                <tr>
                  <td className="firstCol">Highest Educational Attainment</td>
                  <td className="secondCol">{candidate.education}</td>
                </tr>
                <tr>
                  <td className="firstCol">Professional Experience</td>
                  <td className="secondCol">{candidate.experience}</td>
                </tr>
                <tr>
                  <td className="firstCol">Previous Position</td>
                  <td className="secondCol">{candidate.previousPosition}</td>
                </tr>
                <tr>
                  <td className="firstCol">Achievements</td>
                  <td className="secondCol">{candidate.achievements}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-footer">
          <a href="../candidates" className="btn btn-primary">Return to Candidates</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateDetail;
