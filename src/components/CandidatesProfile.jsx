import React from 'react'
// STYLE
import styles from './CandidatesProfile.module.css'
// ROUTING
import { Link } from 'react-router-dom'

const CandidatesProfile = () => {
    // Suggestion: Store in database due to heavy load
    const candidates = [
        { "name": "Jerome Adonis", "party": "Makabayan", "alliance": "Oposisyon ng Bayan", "image": "/jerome-adonis.webp" },
        { "name": "Ronnel Arambulo", "party": "Makabayan", "alliance": "Oposisyon ng Bayan", "image": "/ronnel-arambulo.webp" },
        { "name": "Bam Aquino", "party": "KANP", "alliance": "KiBam", "image": "/bam-aquino.jpg" },
        { "name": "Ernesto Arellano", "party": "KKK", "alliance": "—", "image": "/ernesto-arellano.webp" },
        { "name": "Roberto Ballon", "party": "Independent", "alliance": "—", "image": "/roberto-ballon.jpg" },
        { "name": "Abigail Binay", "party": "NPC", "alliance": "Alyansa para sa Bagong Pilipinas", "image": "/abigail-binay.jpg" },
        { "name": "Jimmy Bondoc", "party": "PDP", "alliance": "Partido Demokratiko Pilipino", "image": "/jimmy-bondoc.jpg" },
        { "name": "Bong Revilla", "party": "Lakas", "alliance": "Alyansa para sa Bagong Pilipinas", "image": "/bong-revilla.jfif" },
        { "name": "Bonifacio Bosita", "party": "Independent", "alliance": "Riding-in-tandem Team", "image": "/bonifacio-bosita.jpg" },
        { "name": "Arlene Brosas", "party": "Makabayan", "alliance": "Oposisyon ng Bayan", "image": "/arlene-brosas.jpg" },
        { "name": "Roy Cabonegro", "party": "DPP", "alliance": "—", "image": "/roy-cabonegro.jpg" },
        { "name": "Allen Capuyan", "party": "PPP", "alliance": "—", "image": "/allen-capuyan.webp" },
        { "name": "Teodoro Casiño", "party": "Makabayan", "alliance": "Oposisyon ng Bayan", "image": "/teodoro-casino.jfif" },
        { "name": "France Castro", "party": "Makabayan", "alliance": "Oposisyon ng Bayan", "image": "/france-castro.jpg" },
        { "name": "Pia Cayetano", "party": "Nacionalista", "alliance": "Alyansa para sa Bagong Pilipinas", "image": "/pia-cayetano.jpg" },
        { "name": "David d'Angelo", "party": "Bunyog", "alliance": "—", "image": "/david-dangelo.webp" },
        { "name": "Angelo de Alban", "party": "Independent", "alliance": "—", "image": "/angelo-de-alban.webp" },
        { "name": "Leody de Guzman", "party": "PLM", "alliance": "—", "image": "/leody-de-guzman.png" },
        { "name": "Ronald dela Rosa", "party": "PDP", "alliance": "Partido Demokratiko Pilipino", "image": "/ronald-dela-rosa.webp" },
        { "name": "Mimi Doringo", "party": "Makabayan", "alliance": "Oposisyon ng Bayan", "image": "/mimi-doringo.webp" },
        { "name": "Arnel Escobal", "party": "PM", "alliance": "—", "image": "/arnel-escobal.png" },
        { "name": "Luke Espiritu", "party": "PLM", "alliance": "—", "image": "/luke-espiritu.webp" },
        { "name": "Mody Floranda", "party": "Makabayan", "alliance": "Oposisyon ng Bayan", "image": "/mody-floranda.jpg" },
        { "name": "Marc Gamboa", "party": "Independent", "alliance": "—", "image": "/marc-gamboa.webp" },
        { "name": "Bong Go", "party": "PDP", "alliance": "Partido Demokratiko Pilipino", "image": "/bong-go.webp" },
        { "name": "Norberto Gonzales", "party": "PDSP", "alliance": "—", "image": "/norberto-gonzales.jpg" },
        { "name": "Jesus Hinlo Jr.", "party": "PDP", "alliance": "Partido Demokratiko Pilipino", "image": "/jesus-hinlo-jr.webp" },
        { "name": "Gregorio Honasan", "party": "Reform PH", "alliance": "—", "image": "/gregorio-honasan.jpg" },
        { "name": "Relly Jose Jr.", "party": "KBL", "alliance": "—", "image": "/relly-jose-jr.webp" },
        { "name": "Panfilo Lacson", "party": "Independent", "alliance": "Alyansa para sa Bagong Pilipinas", "image": "/panfilo-lacson.jpg" },
        { "name": "Raul Lambino", "party": "PDP", "alliance": "Partido Demokratiko Pilipino", "image": "/raul-lambino.webp" },
        { "name": "Lito Lapid", "party": "NPC", "alliance": "Alyansa para sa Bagong Pilipinas", "image": "/lito-lapid.png" },
        { "name": "Wilbert T. Lee", "party": "Aksyon", "alliance": "—", "image": "/wilbert-t-lee.jpg" },
        { "name": "Amirah Lidasan", "party": "Makabayan", "alliance": "Oposisyon ng Bayan", "image": "/amirah-lidasan.webp" },
        { "name": "Rodante Marcoleta", "party": "Independent", "alliance": "Partido Demokratiko Pilipino", "image": "/rodante-marcoleta.jpg" },
        { "name": "Imee Marcos", "party": "Nacionalista", "alliance": "Alyansa para sa Bagong Pilipinas", "image": "/imee-marcos.jpg" },
        { "name": "Norman Marquez", "party": "Independent", "alliance": "—", "image": "/norman-marquez.jfif" },
        { "name": "Eric Martinez", "party": "Independent", "alliance": "—", "image": "/eric-martinez.webp" },
        { "name": "Richard Mata", "party": "Independent", "alliance": "—", "image": "/richard-mata.webp" },
        { "name": "Sonny Matula", "party": "WPP", "alliance": "—", "image": "/sonny-matula.jpg" },
        { "name": "Liza Maza", "party": "Makabayan", "alliance": "Oposisyon ng Bayan", "image": "/liza-maza.webp" },
        { "name": "Heidi Mendoza", "party": "Independent", "alliance": "—", "image": "/heidi-mendoza.webp" },
        { "name": "Jose Montemayor Jr.", "party": "Independent", "alliance": "—", "image": "/jose-montemayor-jr.jpeg" },
        { "name": "Ben Tulfo", "party": "Independent", "alliance": "—", "image": "/ben-tulfo.webp" },
        { "name": "Erwin Tulfo", "party": "Lakas", "alliance": "Alyansa para sa Bagong Pilipinas", "image": "/erwin-tulfo.jpg" },
        { "name": "Camille Villar", "party": "Nacionalista", "alliance": "Alyansa para sa Bagong Pilipinas", "image": "/camille-villar.jpg" }
    ];


    return (
        <>
            <nav class="navbar bg-body-tertiary">
                <a class="navbar-brand">Search Candidate:</a>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="enter keyword..." aria-label="Search"/>
                    <button class="btn" type="submit">Search</button>
                </form>
            </nav>

            <div className="row">
                {candidates.map((candidate, index) => (
                    <div className="col-md-2 mb-3" key={index}>
                    <div className="card">
                        <img src={candidate.image} className="card-img-bottom" alt={`${candidate.name}`}/>
                        <div className="card-body">
                        <h5 className="card-title">{candidate.name}</h5>
                        <p className="card-text"></p>
                        </div>
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item">{candidate.party}</li>
                        <li className="list-group-item">{candidate.alliance}</li>
                        </ul>
                        <div className="card-body">
                        <a href="#" className="card-link">View</a>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default CandidatesProfile
