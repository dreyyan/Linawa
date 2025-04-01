import React from 'react'
import './styles/candidates.css'
// COMPONENTS
import CandidatesProfile from "../components/CandidatesProfile.jsx";

const Candidates = () => {
    return (
        <>
            <h4 className="pageTitle">CANDIDATES</h4>
            <CandidatesProfile/>
        </>
    )
}
export default Candidates
