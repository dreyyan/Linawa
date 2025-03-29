import React from 'react'
// STYLE
import styles from './CandidatesProfile.module.css'
// ROUTING
import { Link } from 'react-router-dom'

const CandidatesProfile = () => {
    // Suggestion: Store in database due to heavy load
    const candidates = [
        { name: "Jerome Adonis", party: "Makabayan", alliance: "Oposisyon ng Bayan" },
        { name: "Ronnel Arambulo", party: "Makabayan", alliance: "Oposisyon ng Bayan" },
        { name: "Bam Aquino", party: "KANP", alliance: "KiBam" },
        { name: "Ronnel Arambulo", party: "Makabayan", alliance: "Oposisyon ng Bayan" },
        { name: "Ronnel Arambulo", party: "Makabayan", alliance: "Oposisyon ng Bayan" },
        { name: "Ernesto Arellano", party: "KKK", alliance: "—" },
        { name: "Roberto Ballon", party: "Independent", alliance: "—" },
        { name: "Abigail Binay", party: "NPC", alliance: "Alyansa para sa Bagong Pilipinas" },
        { name: "Jimmy Bondoc", party: "PDP", alliance: "Partido Demokratiko Pilipino" },
        { name: "Bong Revilla", party: "Lakas", alliance: "Alyansa para sa Bagong Pilipinas" },
        { name: "Bonifacio Bosita", party: "Independent", alliance: "Riding-in-tandem Team" },
        { name: "Arlene Brosas", party: "Makabayan", alliance: "Oposisyon ng Bayan" },
        { name: "Roy Cabonegro", party: "DPP", alliance: "—" },
        { name: "Allen Capuyan", party: "PPP", alliance: "—" },
        { name: "Teodoro Casiño", party: "Makabayan", alliance: "Oposisyon ng Bayan" },
        { name: "France Castro", party: "Makabayan", alliance: "Oposisyon ng Bayan" },
        { name: "Pia Cayetano", party: "Nacionalista", alliance: "Alyansa para sa Bagong Pilipinas" },
        { name: "David d'Angelo", party: "Bunyog", alliance: "—" },
        { name: "Angelo de Alban", party: "Independent", alliance: "—" },
        { name: "Leody de Guzman", party: "PLM", alliance: "—" },
        { name: "Ronald dela Rosa", party: "PDP", alliance: "Partido Demokratiko Pilipino" },
        { name: "Mimi Doringo", party: "Makabayan", alliance: "Oposisyon ng Bayan" },
        { name: "Arnel Escobal", party: "PM", alliance: "—" },
        { name: "Luke Espiritu", party: "PLM", alliance: "—" },
        { name: "Mody Floranda", party: "Makabayan", alliance: "Oposisyon ng Bayan" },
        { name: "Marc Gamboa", party: "Independent", alliance: "—" },
        { name: "Bong Go", party: "PDP", alliance: "Partido Demokratiko Pilipino" },
        { name: "Norberto Gonzales", party: "PDSP", alliance: "—" },
        { name: "Jesus Hinlo Jr.", party: "PDP", alliance: "Partido Demokratiko Pilipino" },
        { name: "Gregorio Honasan", party: "Reform PH", alliance: "—" },
        { name: "Relly Jose Jr.", party: "KBL", alliance: "—" },
        { name: "Panfilo Lacson", party: "Independent", alliance: "Alyansa para sa Bagong Pilipinas" },
        { name: "Raul Lambino", party: "PDP", alliance: "Partido Demokratiko Pilipino" },
        { name: "Lito Lapid", party: "NPC", alliance: "Alyansa para sa Bagong Pilipinas" },
        { name: "Wilbert T. Lee", party: "Aksyon", alliance: "—" },
        { name: "Amirah Lidasan", party: "Makabayan", alliance: "Oposisyon ng Bayan" },
        { name: "Rodante Marcoleta", party: "Independent", alliance: "Partido Demokratiko Pilipino" },
        { name: "Imee Marcos", party: "Nacionalista", alliance: "Alyansa para sa Bagong Pilipinas" },
        { name: "Norman Marquez", party: "Independent", alliance: "—" },
        { name: "Eric Martinez", party: "Independent", alliance: "—" },
        { name: "Richard Mata", party: "Independent", alliance: "—" },
        { name: "Sonny Matula", party: "WPP", alliance: "—" },
        { name: "Liza Maza", party: "Makabayan", alliance: "Oposisyon ng Bayan" },
        { name: "Heidi Mendoza", party: "Independent", alliance: "—" },
        { name: "Jose Montemayor Jr.", party: "Independent", alliance: "—" },
        { name: "Subair Mustapha", party: "WPP", alliance: "—" },
        { name: "Jose Olivar", party: "Independent", alliance: "—" },
        { name: "Willie Ong", party: "Aksyon", alliance: "—" },
        { name: "Manny Pacquiao", party: "PFP", alliance: "Alyansa para sa Bagong Pilipinas" },
        { name: "Francis Pangilinan", party: "Liberal", alliance: "KiBam" },
        { name: "Ariel Querubin", party: "Nacionalista", alliance: "Riding-in-tandem Team" },
        { name: "Apollo Quiboloy", party: "Independent", alliance: "Partido Demokratiko Pilipino" },
        { name: "Danilo Ramos", party: "Makabayan", alliance: "Oposisyon ng Bayan" },
        { name: "Willie Revillame", party: "Independent", alliance: "—" },
        { name: "Vic Rodriguez", party: "Independent", alliance: "Partido Demokratiko Pilipino" },
        { name: "Nur-Ana Sahidulla", party: "Independent", alliance: "—" },
        { name: "Phillip Salvador", party: "PDP", alliance: "Partido Demokratiko Pilipino" },
        { name: "Tito Sotto", party: "NPC", alliance: "Alyansa para sa Bagong Pilipinas" },
        { name: "Michael Tapado", party: "PM", alliance: "—" },
        { name: "Francis Tolentino", party: "PFP", alliance: "Alyansa para sa Bagong Pilipinas" },
        { name: "Ben Tulfo", party: "Independent", alliance: "—" },
        { name: "Erwin Tulfo", party: "Lakas", alliance: "Alyansa para sa Bagong Pilipinas" },
        { name: "Mar Valbuena", party: "Independent", alliance: "—" },
        { name: "Leandro Verceles Jr.", party: "Independent", alliance: "—" },
        { name: "Camille Villar", party: "Nacionalista", alliance: "Alyansa para sa Bagong Pilipinas" }
    ];

    // To store different sizes of a list group
    const sizeClasses = [
        "list-group-horizontal-sm",
        "list-group-horizontal-md",
        "list-group-horizontal-lg",
        "list-group-horizontal-xl",
        "list-group-horizontal-xxl"
    ];

    return (
        <>
            <div className="list-group">
                <ul className="list-group list-group-horizontal-sm" style={{ minWidth: "100%" }}>
                    <li className="list-group-item font-weight-bold">CANDIDATE</li>
                    <li className="list-group-item font-weight-bold">PARTY</li>
                    <li className="list-group-item font-weight-bold">ALLIANCE</li>
                </ul>
                {
                    // Dynamic mapping
                    candidates.map((candidate, index) => (
                        <ul key={index} className={`list-group ${sizeClasses[index % sizeClasses.length]}`}>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-warning">
                                {candidate.name}
                            </a>
                            <li className="list-group-item">{candidate.party}</li>
                            <li className="list-group-item">{candidate.alliance}</li>
                        </ul>
                    ))
                }
            </div>
        </>
    )
}
export default CandidatesProfile
