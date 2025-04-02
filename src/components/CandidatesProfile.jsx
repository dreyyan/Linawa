import React from "react";
import { useState } from "react";
// STYLE
import styles from "./CandidatesProfile.module.css";
// ROUTING
import { Link } from "react-router-dom";
// DATA
import candidates from "./CandidatesData"

const CandidatesProfile = () => {
  // Set badge colors according to party
  const partyColors = {
    Independent: "text-bg-dark",
    PDP: "text-bg-success",
    Nacionalista: "text-bg-primary",
    Makabayan: "text-bg-danger",
    NPC: "text-bg-light",
    PLM: "text-bg-secondary",
    Lakas: "text-bg-info",
  };

  // Set badge colors according to alliance
  const allianceColors = {
    "Alyansa para sa Bagong Pilipinas": "text-bg-primary",
    KiBam: "text-bg-info",
    "Oposisyon ng Bayan": "text-bg-danger",
    "Partido Demokratiko Pilipino": "text-bg-success",
    "Riding-in-tandem Team": "text-bg-secondary",
    "-": "text-bg-dark",
  };

  // Real-time search filtering
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div className="searchArea">
            <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="search for..."
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        </div>
      </nav>

      <div className="row">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map((candidate, index) => (
            <div className="col-md-2 mb-1" key={index}>
              <Link to={`/pages/candidate-profiles/${encodeURIComponent(candidate.name)}`} className="cardLink">
                <div className="card">
                  <img
                    src={candidate.image}
                    className="card-img-bottom"
                    alt={candidate.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{candidate.name}</h5>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <span
                        className={`badge rounded-pill ${
                          partyColors[candidate.party] ?? "text-bg-light"
                        }`}
                      >
                        {candidate.party}
                      </span>
                    </li>
                    <li className="list-group-item">
                      <span
                        className={`badge rounded-pill ${
                          allianceColors[candidate.alliance] ?? "text-bg-dark"
                        }`}
                      >
                        {candidate.alliance}
                      </span>
                    </li>
                  </ul>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center mt-3">No candidates found.</p>
        )}
      </div>
    </>
  );
};
export default CandidatesProfile;
