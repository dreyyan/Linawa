import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import CandidatesProfile from "./components/CandidatesProfile.jsx";
import CandidateDetail from "./components/CandidateDetail.jsx";
import Grid from "./components/Grid.jsx";
// PAGES
import Candidates from "./pages/candidates.jsx";
import Policies from "./pages/policies.jsx";
import PetitionsAndReports from "./pages/petitions-and-reports.jsx";
import News from "./pages/news.jsx";
import AboutUs from "./pages/about-us.jsx";
import MockElectionPage from "./pages/mock-election.jsx";
// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
// Import the PrivateRoutes component
import PrivateRoutes from "./components/PrivateRoutes.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignupPage.jsx";
import HomePage from "./pages/homePage.jsx";
import LogoutButton from "./components/Logout.jsx";

function Home() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Private Routes */}
        <Route element={<PrivateRoutes />}>
          <Route
            path="/pages/homePage"
            element={
              <>
                <Header />
                <HomePage />
                <LogoutButton />
              </>
            }
          />
          <Route
            path="/pages/candidates"
            element={
              <>
                <Header />
                <Candidates />
                <LogoutButton />
              </>
            }
          />
          <Route
            path="/pages/candidate-profiles/:name"
            element={<CandidateDetail />}
          />
          <Route
            path="/candidates/:id"
            element={
              <>
                <Header />
                <CandidatesProfile />
                <LogoutButton />
              </>
            }
          />
          <Route
            path="/pages/policies"
            element={
              <>
                <Header />
                <Policies />
                <LogoutButton />
              </>
            }
          />
          <Route
            path="/pages/petitions-and-reports"
            element={
              <>
                <Header />
                <PetitionsAndReports />
                <LogoutButton />
              </>
            }
          />
          <Route
            path="/pages/news"
            element={
              <>
                <Header />
                <News />
                <LogoutButton />
              </>
            }
          />
          <Route
            path="/pages/about-us"
            element={
              <>
                <Header />
                <AboutUs />
                <LogoutButton />
              </>
            }
          />
          <Route
            path="/pages/mock-election"
            element={
              <>
                <Header />
                <MockElectionPage />
                <LogoutButton />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Home;
