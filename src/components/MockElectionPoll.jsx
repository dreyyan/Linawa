import React, { useState, useEffect } from "react";
import { db } from "../firebase"; 
import { collection, getDoc, doc, updateDoc, increment, setDoc, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FaCheckCircle } from "react-icons/fa"; 
import "./MockElection.module.css";

const CandidatesPolling = () => {
  const [candidates, setCandidates] = useState([]);
  const [userVotes, setUserVotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const fetchCandidates = async () => {
    const candidatesCollection = collection(db, "candidates");
    const candidatesSnapshot = await getDocs(candidatesCollection);
    const candidatesList = candidatesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setCandidates(candidatesList);
    setLoading(false);
  };


  const fetchUser = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        fetchUserVotes(user.uid); 
      } else {
        setUser(null);
      }
    });
  };

  const fetchUserVotes = async (userId) => {
    const voteDoc = doc(db, "votes", userId);
    const docSnap = await getDoc(voteDoc);
    if (docSnap.exists()) {
      setUserVotes(docSnap.data().selectedCandidates);
    } else {
      setUserVotes([]);
    }
  };


  const handleVote = async (candidateId) => {
    try {
      if (userVotes.length < 12 && !userVotes.includes(candidateId)) {
        const updatedVotes = [...userVotes, candidateId];
  

        const voteDocRef = doc(db, "votes", user.uid); // Document reference for user's vote
  

        const voteDocSnap = await getDoc(voteDocRef);
  
        if (voteDocSnap.exists()) {
          // If the document exists, update the selectedCandidates field
          await updateDoc(voteDocRef, {
            selectedCandidates: updatedVotes
          });
        } else {
          // If the document doesn't exist, create it with the selected candidates
          await setDoc(voteDocRef, {
            selectedCandidates: updatedVotes
          });
        }
  
        // Update the candidate's vote count in Firestore
        const candidateDocRef = doc(db, "candidates", candidateId); // Reference to a specific candidate
        await updateDoc(candidateDocRef, {
          voteCount: increment(1)
        });
  
        // Update the local state with the new votes
        setUserVotes(updatedVotes);
      } else {
        alert("You can vote for up to 12 candidates only.");
      }
    } catch (error) {
      console.error("Error adding vote: ", error);
    }
  };

  useEffect(() => {
    fetchCandidates();
    fetchUser(); // Check the current user's state
  }, [user]);

  return (
    <div className="mock-election-container">
      <h1 className="page-title">Senatorial Candidates</h1>
      {loading ? (
        <p>Loading candidates...</p>
      ) : (
        <div className="candidates-list">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="candidate-card">
              <div className="candidate-info">
                <div className="check-icon">
                  {userVotes.includes(candidate.id) && <FaCheckCircle />}
                </div>
                <h2>{candidate.name}</h2>
              </div>
              <div className="vote-section">
                {userVotes.includes(candidate.id) ? (
                  <p>Votes: {candidate.voteCount}</p>
                ) : (
                  <button
                    onClick={() => handleVote(candidate.id)}
                    className={`vote-btn ${userVotes.includes(candidate.id) ? 'voted' : ''}`}
                    disabled={userVotes.includes(candidate.id)}
                  >
                    {userVotes.includes(candidate.id) ? "Voted" : "Vote"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CandidatesPolling;
