import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import CandidatesProfile from "./components/CandidatesProfile.jsx";
// PAGES
import Candidates from "./pages/candidates.jsx";
import Policies from "./pages/policies.jsx";
import PetitionsAndReports from "./pages/petitions-and-reports.jsx";
import News from "./pages/news.jsx";
import AboutUs from "./pages/about-us.jsx";
// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
// Import the PrivateRoutes component
import PrivateRoutes from "./components/PrivateRoutes.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignupPage.jsx";

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
            path="/pages/candidates"
            element={
              <>
                <Header />
                <Candidates />
              </>
            }
          />
          <Route
            path="/candidates/:id"
            element={
              <>
                <Header />
                <CandidatesProfile />
              </>
            }
          />
          <Route
            path="/pages/policies"
            element={
              <>
                <Header />
                <Policies />
              </>
            }
          />
          <Route
            path="/pages/petitions-and-reports"
            element={
              <>
                <Header />
                <PetitionsAndReports />
              </>
            }
          />
          <Route
            path="/pages/news"
            element={
              <>
                <Header />
                <News />
              </>
            }
          />
          <Route
            path="/pages/about-us"
            element={
              <>
                <Header />
                <AboutUs />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default Home;
