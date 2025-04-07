import React from "react";
import styles from "./MainHomePage.module.css";
import { useState, useEffect, useRef } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import News from "../pages/news";

const MainHome = () => {
  const section1 = useRef(null);
  const section2 = useRef(null);
  const section3 = useRef(null);
  const bannerRef = useRef(null);
  const endsection = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.background}>
      <div className={styles.reflinks}>
        <button onClick={() => scrollToSection(section1)}>News</button>
        <button onClick={() => scrollToSection(section2)}>
          How Voting Works
        </button>
        <button onClick={() => scrollToSection(section3)}>Mission</button>
      </div>
      <button
        className={styles.scrollTopButton}
        onClick={() => scrollToSection(bannerRef)}
      >
        <FaAngleDoubleUp />
      </button>
      <div className={styles.banner_wrap} ref={bannerRef}>
        <img
          className={styles.banner_image}
          src="/misc/Website_Banner_2.png"
          alt="Banner"
        />
        <h1 className={styles.banner_heading}>LINAWA </h1>
      </div>
      <div className={styles.pagebody}>
        <div ref={section1}>
          <News />
        </div>
        <div ref={section2}>
          <h2 className={styles.sectionheader}>HOW TO VOTE</h2>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              <div className={styles.imagePlaceholder}>
                <img src="../public/icons/G.png" alt="1st step" />
              </div>
              <h1 className={styles.heading}>
                1. Navigate the header, and get familiar with the layout.
              </h1>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              <div className={styles.imagePlaceholder}>
                <img src="../public/icons/J.png" alt="2nd step" />
              </div>
              <h1 className={styles.heading}>
                2. Read the policies and understand your rights as a voter.
              </h1>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              <div className={styles.imagePlaceholder}>
                <img src="../public/icons/K.png" alt="3rd step" />
              </div>
              <h1 className={styles.heading}>
                3. Navigate to the candidates page, and click their profiles to
                know their qualifications, you be the judge.
              </h1>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              <div className={styles.imagePlaceholder}>
                <img src="../public/icons/G.png" alt="4th step" />
              </div>
              <h1 className={styles.heading}>
                4. Click the [MOCK ELECTIONS] page and start voting.
              </h1>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              <div className={styles.imagePlaceholder}>
                <img src="../public/icons/B.png" alt="5th step" />
              </div>
              <h1 className={styles.heading}>
                5. For the upcoming Senatorial Elections, you may only vote 12
                candidates.
              </h1>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              <div className={styles.imagePlaceholder}>
                <img src="../public/icons/D.png" alt="6th step" />
              </div>
              <h1 className={styles.heading}>
                6. Wait for the release of results from the Comission on
                Elections (COMELEC)
              </h1>
            </div>
          </div>
        </div>
        <div ref={section3}>
          <h2 className={styles.sectionheader}>MISSION</h2>
          <div className={styles.missiondesc}>
            {" "}
            " Our mission is to safeguard the integrity of elections by
            providing a platform dedicated to transparency, accountability, and
            the exposure of electoral fraud and malpractices. Through
            investigative reporting, informative practices, and community-driven
            action, we aim to shine a light on corruption and strengthen
            democracy at every level. "{" "}
          </div>
        </div>
      </div>
      <div className={styles.sectionheader}>
        <h1 className={styles.lowercopy}>Linawa™</h1>
      </div>
    </div>
  );
};

export default MainHome;
