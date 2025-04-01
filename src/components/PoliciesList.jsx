import React, { useState } from 'react'
import axios from 'axios'
// STYLE
import styles from './PoliciesList.module.css'

const PoliciesList = () => {
    const [summaries, setSummaries] = useState({});
    const [loadingSummaries, setLoadingSummaries] = useState({});

    // The correct policy key object
    const policyKey = {
        "democracyAndGovernance": "The Philippines operates as a democratic republic where power rests in the hands of the people, who elect their leaders and participate in the decision-making process. This system ensures that public officials are accountable to the citizens they serve. The cornerstone of the country's democracy is the 1987 Philippine Constitution, which establishes the framework for governance, ensuring the separation of powers between the executive, legislative, and judicial branches. This separation acts as a system of checks and balances to prevent any one branch from becoming too powerful. Citizens have the right to vote in regular elections and run for office, and the rule of law guarantees that the government operates transparently and fairly.",
        "rightToVote": "The right to vote is a fundamental democratic right granted to Filipino citizens. It allows citizens to participate in selecting leaders at national and local levels through elections. According to Article V of the 1987 Constitution, voting is not only a right but also a duty for every citizen who meets the requirements. The Commission on Elections (COMELEC) oversees the electoral process to ensure that voting is free, fair, and transparent. Elections are held regularly for positions like president, senators, governors, and mayors. The government makes an effort to ensure that each election is conducted without interference or fraud, allowing citizens to express their political preferences.",
        "qualificationForVotes": "To participate in elections, a Filipino citizen must meet specific criteria. The individual must be 18 years old or older by the time of the election. Additionally, they must have lived in the Philippines for at least one year before the election and have resided in the area where they intend to vote for at least six months. In order to vote, citizens must be registered with COMELEC, the agency responsible for managing voter registration and election processes. These qualifications ensure that voters have a sufficient understanding of their communities and the country, which helps maintain the integrity of the electoral process.",
        "Fair and Honest Elections": "Fair and honest elections are vital to the democratic system of the Philippines. The Constitution mandates that elections must be conducted in a transparent, free, and credible manner. Laws such as those against vote-buying and election fraud help maintain the integrity of the electoral process. The Automated Election System (AES) was introduced to speed up the counting of votes and ensure accuracy. While there are strong laws in place, enforcement can sometimes be a challenge due to the political landscape, where practices like vote-buying still exist. The COMELEC continues to work toward strengthening these systems and promoting public trust in the electoral process.",
        "People's Participation": "In addition to voting, Filipinos are encouraged to actively participate in governance. Public participation in government is a key feature of the country’s democracy. The Constitution allows for initiatives, referendums, and recalls, which enable citizens to directly influence the creation of laws, propose changes, or remove officials from office before the end of their term. Civil society organizations and the media also play an essential role in holding the government accountable and ensuring transparency in decision-making. Citizens are encouraged to voice their concerns, promote accountability, and engage in discussions about policies that affect their lives."
    };

    const handleSummarize = async (key) => {
        setLoadingSummaries(prev => ({ ...prev, [key]: true }));
        try {
            const response = await axios.post("http://127.0.0.1:5000/summarize", {
                text: policyKey[key],
            });
            setSummaries(prev => ({
                ...prev,
                [key]: response.data.summary,
            }));
        } catch (err) {
            console.error("Error summarizing", err);
        }
        setLoadingSummaries(prev => ({ ...prev, [key]: false }));
    };

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
                    <div className="accordion-body">

                        {policyKey["democracyAndGovernance"]}
                        <br/>
                        {loadingSummaries["democracyAndGovernance"] ? (
                            
                            <button className='btn btn-primary mt-2' disabled>
                                Summarizing...
                            </button>
                        ) : (
                            <button
                                className="btn btn-primary mt-2 align-self-start"
                                onClick={() => handleSummarize("democracyAndGovernance")}>
                                Summarize
                            </button>
                        )}
                        {summaries["democracyAndGovernance"] && (
                            <p className="mt-2"><strong>Summary:</strong> {summaries["democracyAndGovernance"]}</p>
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
                        {policyKey["rightToVote"]}
                        <br/>
                        {loadingSummaries["rightToVote"] ? (
                            <button className='btn btn-primary mt-2' disabled>
                                Summarizing...
                            </button>
                        ) : (
                            <button
                                className="btn btn-primary mt-2"
                                onClick={() => handleSummarize("rightToVote")}>
                                Summarize
                            </button>
                        )}
                        {summaries["rightToVote"] && (
                            <p className="mt-2"><strong>Summary:</strong> {summaries["rightToVote"]}</p>
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
                        {policyKey["qualificationForVotes"]}
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
                        {policyKey["Fair and Honest Elections"]}
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
                        {policyKey["People's Participation"]}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PoliciesList;
