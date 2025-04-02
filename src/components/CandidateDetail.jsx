import React from "react";
import { useParams, Link } from "react-router-dom";
import candidates from "./CandidatesData"
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
        <h4 className="pageTitle">{candidate.name}</h4>
        <div className="pageContainer">
            <div className="candidateProfilePage">
                <img src={candidate.image} alt={candidate.name} className="candidateImageFormat" />
                <h5 className="candidateDetails"><div class="badge text-bg-danger">Name</div>{candidate.name}</h5>
                <h5 className="candidateDetails"><div class="badge text-bg-danger">Party</div>{candidate.party}</h5>
                <h5 className="candidateDetails"><div class="badge text-bg-warning">Alliance</div>{candidate.alliance}</h5>
                <h5 className="candidateDetails"><div class="badge text-bg-danger">Position</div>{candidate.name}</h5>

                <h5 className="candidateDetails"><div class="badge text-bg-danger">Age</div>{candidate.party}</h5>
                <h5 className="candidateDetails"><div class="badge text-bg-warning">Hometown</div>{candidate.alliance}</h5>
                <h5 className="candidateDetails"><div class="badge text-bg-danger">Highest Educational Attainment</div>{candidate.party}</h5>
                <h5 className="candidateDetails"><div class="badge text-bg-warning">Professional Experience</div>{candidate.alliance}</h5>

                <h5 className="candidateDetails"><div class="badge text-bg-danger">Previous Position</div>{candidate.party}</h5>
                <h5 className="candidateDetails"><div class="badge text-bg-warning">Achievements</div>{candidate.alliance}</h5>
                <h5 className="candidateDetails"><div class="badge text-bg-danger">Highest Educational Attainment</div>{candidate.party}</h5>
                <h5 className="candidateDetails"><div class="badge text-bg-warning">Professional Experience</div>{candidate.alliance}</h5>

                <Link to="/pages/candidates" className="returnLink">Back to candidates</Link>
            </div>
        </div>
    </>
  );
};

export default CandidateDetail;
