import React from 'react'
import {useState} from 'react'
import axios from 'axios'
// STYLE
import styles from './PoliciesList.module.css'

const PoliciesList = () => {
    const [summaries, setSummaries] = useState({});
    const [loadingSummaries, setLoadingSummaries] = useState({});

    const handleSummarize = async (policyKey, policyText) =>{

        setLoadingSummaries(prev => ({...prev, [policyKey]: true}));
        try{
            const response = await axios.post("http://127.0.0.1:5000/summarize", {
                text: policyText,
            });
            setSummaries(prev =>({
                ...prev,
                [policyKey]: response.data.summary,
            }));
        }catch(err){
            console.error("Error summarizing", err);
        }

        setLoadingSummaries(prev => ({...prev, [policyKey]: false}))
    }


    return (
        <div className="accordion" id="accordionExample">
            {/* Democracy and Governance */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        
                    >
                        Democracy and Governance
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body" >
                        The Philippines follows a representative democracy where
                        citizens elect government officials. The three branches of
                        government (Executive, Legislative, and Judiciary) ensure a
                        system of checks and balances. The Bill of Rights guarantees
                        freedoms such as speech, press, and assembly.
                        <br />
                        {
                            loadingSummaries["vote"] ? (
                                <button className='btn btn-primary mt-2' disabled>
                                    Summarizing...
                                </button>
                            ) : <button className="btn btn-primary mt-2" onClick={() => handleSummarize("vote", "Voting is a fundamental right and duty of every Filipino citizen. Elections are held regularly for national and local officials. The Commission on Elections oversees election processes to ensure fairness and transparency.")}>
                            Summarize
                        </button>
                        }
                        
                        {summaries["vote"] && (
                            <p className="mt-2"><strong>Summary:</strong> {summaries["vote"]}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Right to Vote */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                        Right to Vote
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Voting is a fundamental right and duty of every Filipino citizen (Article V, 1987 Constitution). Elections are held regularly for national and local officials. The Commission on Elections (COMELEC) oversees election processes to ensure fairness and transparency.
                        <br />
                        <button className="btn btn-primary mt-2" onClick={() => handleSummarize("vote", "Voting is a fundamental right and duty of every Filipino citizen. Elections are held regularly for national and local officials. The Commission on Elections oversees election processes to ensure fairness and transparency.")}>
                            Summarize
                        </button>
                        {summaries["vote"] && (
                            <p className="mt-2"><strong>Summary:</strong> {summaries["vote"]}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Qualifications for Voters */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                    >
                        Qualifications for Voters
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        To vote, a person must be:
                        <ul>
                            <li> A Filipino citizen, at least 18 years old.</li>
                            <li>
                                Must have resided in the Philippines for at least one year.
                            </li>
                            <li>
                                Must have lived in the place where they intend to vote for at
                                least six months.
                            </li>
                            <li>Must be registered with COMELEC.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Fair and Honest Elections */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                    >
                        Fair and Honest Elections
                    </button>
                </h2>
                <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        The Constitution mandates free, fair, and credible elections.
                        Laws exist against vote-buying, election fraud, and political
                        dynasties, though enforcement remains a challenge. The Automated
                        Election System (AES) is used to improve transparency and
                        efficiency.
                    </div>
                </div>
            </div>

            {/* People’s Participation */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                    >
                        People’s Participation
                    </button>
                </h2>
                <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        The Constitution allows initiatives, referendums, and recalls
                        for public participation. Civil society and media play key roles in
                        promoting transparency and accountability in governance.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PoliciesList
