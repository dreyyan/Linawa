import React from 'react'

// COMPONENTS
import CandidatesPolling from "../components/MockElectionPoll.jsx";

const MockElectionPage = () => {
    return (
        <div className="subHeader">
            <h4 className="pageTitle">MOCK ELECTION</h4>
            <CandidatesPolling/>
        </div>
    )
}
export default MockElectionPage
