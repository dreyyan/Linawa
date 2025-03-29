import React from 'react'
// STYLE
import styles from './CandidatesProfile.module.css'

const CandidatesProfile = () => {
    return (
        <>
            <div className="list-group">
            <ul className="list-group list-group-horizontal-sm justify-content-center" style={{minWidth: "100%"}}>
                <li className="list-group-item">CANDIDATE</li>
                <li className="list-group-item">PARTY</li>
                <li className="list-group-item">ALLIANCE</li>
            </ul>
            <ul className="list-group list-group-horizontal-sm">
                <a href="#" className="list-group-item list-group-item-action list-group-item-warning">Jerome Adonis</a>
                <li className="list-group-item">Makabayan</li>
                <li className="list-group-item">Oposisyon ng Bayan</li>
            </ul>
            <ul className="list-group list-group-horizontal-md">
                <a href="#" className="list-group-item list-group-item-action list-group-item-warning">Ronnel Arambulo</a>
                <li className="list-group-item">Makabayan</li>
                <li className="list-group-item">Oposisyon ng Bayan</li>
            </ul>
            <ul className="list-group list-group-horizontal-lg">
                <a href="#" className="list-group-item list-group-item-action list-group-item-warning">Bam Aquino</a>
                <li className="list-group-item">KANP</li>
                <li className="list-group-item">KiBam</li>
            </ul>
            <ul className="list-group list-group-horizontal-xl">
                <a href="#" className="list-group-item list-group-item-action list-group-item-warning">Ronnel Arambulo</a>
                <li className="list-group-item">Makabayan</li>
                <li className="list-group-item">Oposisyon ng Bayan</li>
            </ul>
            <ul className="list-group list-group-horizontal-xxl">
                <a href="#" className="list-group-item list-group-item-action list-group-item-warning">Ronnel Arambulo</a>
                <li className="list-group-item">Makabayan</li>
                <li className="list-group-item">Oposisyon ng Bayan</li>
            </ul>
            </div>
        </>
    )
}
export default CandidatesProfile
