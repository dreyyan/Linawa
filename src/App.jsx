import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// MODULES
import Header from './components/Header.jsx'
import Grid from './components/Grid.jsx';
import CandidatesProfile from './components/CandidatesProfile.jsx'
import CandidateDetail from './components/CandidateDetail.jsx';
// PAGES
import Candidates from './pages/candidates.jsx';
import Policies from './pages/policies.jsx';
import PetitionsAndPolls from './pages/petitions-and-polls.jsx';
import News from './pages/news.jsx';
import AboutUs from './pages/about-us.jsx';
// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
// Import the PrivateRoutes component
import PrivateRoutes from './components/PrivateRoutes.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignupPage.jsx';

function Home() {
  return (
    <>
        <Header/>
      <div className="routes">
          <Routes>
            <Route path="/pages/candidates" element={<Candidates />} />
            <Route path="/candidates/:id" element={<CandidatesProfile />} />
            <Route path="/pages/candidate-profiles/:name" element={<CandidateDetail />} />
            <Route path="/pages/policies" element={<Policies />} />
            <Route path="/pages/petitions-and-polls" element={<PetitionsAndPolls />} />
            <Route path="/pages/news" element={<News />} />
            <Route path="/pages/about-us" element={<AboutUs />} />
          </Routes>
      </div>
    </>
  );
}

export default Home;
