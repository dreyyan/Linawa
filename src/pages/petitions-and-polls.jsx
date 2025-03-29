import React from 'react'
import './styles/petitions-and-polls.css'
// COMPONENTS
import PetitionForm from "../components/PetitionForm.jsx";

const PetitionsPolls = () => {
    return (
        <div className="subHeader">
            <h4 className="pageTitle">PETITIONS & POLLS</h4>
            <PetitionForm/>
        </div>
    )
}
export default PetitionsPolls
