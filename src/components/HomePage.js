import styles from "../styles/HomePage.module.css"
import { NavBar } from "./NavBar";
import idk from "../images/idk.jpg"
import { Footer } from "./Footer";
import CountdownTimer from "./Countdown.js";
import React, { useState } from 'react';


export const HomePage = () => {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const [clicked1, setClicked1] = useState(true);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);

  const handleClick1 = () => {
    setClicked1(!clicked1);
    setClicked2(false);
    setClicked3(false);
    setClicked4(false);
  }
  const handleClick2 = () => {
    setClicked2(!clicked2);
    setClicked1(false);
    setClicked3(false);
    setClicked4(false);
  }
  const handleClick3 = () => {
    setClicked3(!clicked3);
    setClicked2(false);
    setClicked1(false);
    setClicked4(false);
  }
  const handleClick4 = () => {
    setClicked4(!clicked4);
    setClicked2(false);
    setClicked3(false);
    setClicked1(false);
  }
  return (
    <>
    <div className={styles.Black}>
      <NavBar />
      <div class={styles.Homecontainer}>
        <h1>Hive Academy</h1>
        <p className={styles.desktopText}></p>
        <a href="/Signup"><button>Sign up</button></a>
      </div>
      <section>
        <div className={styles.Timer}>
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </div>
      </section>
      <div className={styles.SecondContainer}>
        <h1>WELCOME TO ELITE HIVE ACADEMY</h1>
        <p>A project founded by the Juniors of UEIS, with goals to share their knowledge and experience upon standardized exams, college application, and so on.</p>
      </div>
      <div className={styles.Program}>
        <div className={styles.headers}>
          <div>
            <h1 className={styles.top}>OUR PROGRAM</h1>
            <h1 className={styles.bottom}>COURSES</h1>
          </div>
          <p className={styles.fuckingtext}>In order to help you through the crucial steps of preparing for college, from drafting concepts to receiving acceptance letters from your top colleges, Elite Hive Academy has developed a five-part Program.</p>
        </div>
        <div className={styles.Norov}>
          <div className={styles.shitContainer}>
            <div
            className={styles.shit}
              onClick={handleClick1}>
              <div className={styles.idk}>
                <div className={styles.icon}>
                  <h2>I</h2>
                </div>
                <div className={styles.content}>
                  <h1>STANDARDIZED TEST</h1>
                </div>
              </div>
            </div>
            <div
            className={styles.shit}
              onClick={handleClick2}>
              <div className={styles.idk}>
                <div className={styles.icon}>
                  <h2>III</h2>
                </div>
                <div className={styles.content}>
                  <h1>ESSAY WRITING</h1>
                </div>
              </div>
            </div>
            <div
            className={styles.shit}
              onClick={handleClick3}>
              <div className={styles.idk}>
                <div className={styles.icon}>
                  <h2>IV</h2>
                </div>
                <div className={styles.content}>
                  <h1>PERSONAL STATEMENT</h1>
                </div>
              </div>
            </div>
            <div
            className={styles.shit}
              onClick={handleClick4}>
              <div className={styles.idk}>
                <div className={styles.icon}>
                  <h2>V</h2>
                </div>
                <div className={styles.content}>
                  <h1>APPLICATION PROCESS</h1>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Norov2}>
            <p className={clicked1 ? styles.text : styles.hidden}>Standardized tests measure knowledge and skills in a fair and consistent way. They are used in education, job applications, and certifications to compare individuals' abilities. These tests provide valuable data for decision-making in education and help employers assess candidates' qualifications.</p>
        <p className={clicked2 ? styles.text : styles.hidden}>Essay writing in university involves expressing ideas and arguments through written communication. It requires planning, research, and organization. Students analyze information, support their claims with evidence, and follow academic conventions. Essay writing develops critical thinking and communication skills, contributing to academic success.</p>
        <p className={clicked3 ? styles.text : styles.hidden}>Personal statements for university are written documents where applicants share their background, experiences, and goals. They help universities understand the applicant beyond grades. Personal statements demonstrate passion, self-reflection, and communication skills. They influence admissions decisions by showcasing an applicant's potential for success and contribution to the university community.</p>
        <p className={clicked4 ? styles.text : styles.hidden}>The university application process involves completing an application form, submitting necessary documents, and often writing a personal statement. The university reviews applications and makes admissions decisions based on academic achievements, personal statements, and other relevant factors. Accepted students may need to confirm their acceptance and complete additional administrative tasks.</p>
          </div>
        </div>
      </div>
      <div className={styles.ProgramDetails}>
        <div>
          <h1>PROGRAM DETAILS</h1>
          <p>Location: <span>Ulaanbaatar Elite International School</span></p>
          <p>Total Students: <span>30-40</span></p>
          <p>Eligible Students: <span>9th grade, 10th Grade, 11th Grade, 12th Grade and Gap Year Students</span></p>
          <p>Date: <span>July 18-July 20</span></p>
        </div>
      </div>
      <div className={styles.guestCont}>
        <div>
          <h1> I COULD NOT HAVE DONE IT WITHOUT Tomujin!
          </h1>
          <p className={styles.mainText}>They were absolutely amazing, guiding me through my volunteering projects and personal growth. With their help, I nailed down what it takes to get into an IVY League School. The counselors went above and beyond what I expected. Seriously, their sessions were awesome and now I am on my way to my dream life.</p>
          <div className={styles.GuestInfo}>
            <p className={styles.Name}>Gerel Bayarmagnai</p>
            <p className={styles.School}>MIT Class of 2027</p>
          </div>
        </div>
        <div><img src={idk}/></div>
      </div>
      <Footer id="FooterHomePage"/>
      </div>
    </>
  );
};