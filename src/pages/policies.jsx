import React from 'react'
import './styles/policies.css'
// COMPONENTS
import PoliciesList from "../components/PoliciesList.jsx";

const Policies = () => {
    return (
        <div className="subHeader">
            <h4 className="pageTitle">POLICIES</h4>
            <PoliciesList/>
        </div>
    )
}
export default Policies
