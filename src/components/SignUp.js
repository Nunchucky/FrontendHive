import { NavBar } from "./NavBar"
import styles from "../styles/SignUp1.module.css"
import styles2 from "../styles/SignUp2.module.css"
import styles3 from "../styles/SignUp3.module.css"
import gpt from "../images/gpt.jpg"
import { useEffect, useState } from "react";
import axios from "axios";

export const SignUp = () => {
    const [showElementOne, setShowElementOne] = useState(true);
    const [showElementTwo, setShowElementTwo] = useState(false);
    const [showElementThree, setShowElementThree] = useState(false);
    const [formData, setFormData] = useState({
      email: "",
      fullName: "",
      gender: "",
      birthday: "",
      address: "",
      phone: "",
      highSchool: "",
      gradDate: "",
      essay: ""
    });
    function handleChange(event) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    }
    function handleSubmit(event) {
      event.preventDefault();
      axios.post("https://us-central1-hiveacademy-45539.cloudfunctions.net/api/add", formData)
        .then(response => {
          console.log(response.data);
          alert("Succesful")
        })
        .catch(error => {
          console.log(error);
          alert("Failed")
        });
    }
  
    const showNextElement = () => {
      if (showElementOne) {
        setShowElementOne(false);
        setShowElementTwo(true);
      } else if (showElementTwo) {
        setShowElementTwo(false);
        setShowElementThree(true);
      }
    }
  
    const showPreviousElement = () => {
      if (showElementTwo) {
        setShowElementTwo(false);
        setShowElementOne(true);
      } else if (showElementThree) {
        setShowElementThree(false);
        setShowElementTwo(true);
      }
    }
    return (
    <>
        <NavBar />
        <div className={styles.BackGround}>
            <h1>Elite Hive Academy</h1>
        {showElementOne && 
            <div className={styles.WaitListContainer}>
                    <section className={styles.topSection}>
                        <h2>Elite Hive Academy</h2>
                        <h3>Ulaanbaatar Elite International School</h3>
                    </section>
                    <div className={styles.mainBody}>
                        <p>Welcome to the WAITLIST APPLICATION.</p>
                        <p>The GAP Program is Tomujin Academy's ANCHOR program, offering intensive preparation and close personal attention to only 20 students throughout the 8 months program duration. 🚀🚀🚀</p>
                        <p>Our programs are not academic sprints! 🌟 We care about YOU; you are not, and should not be, just a collection of academic knowledge. Our holistic program covers everything what you need to prepare for your journey to your dream school and become a well-rounded, self-aware individual. 💜💜💜</p>
                        <p>Admission procedure: </p>
                        <p>We admit our students through a holistic admission, meaning we will take applicants' passion, characteristics, and academic rigours into consideration all at the same time. Aiming to create this holistic application environment, the admission process has three phases.</p>
                        <p>1. Application</p>
                        <p>2. Interview</p>
                        <p>3. Group work</p>
                        <p>Application deadline: May 20 ✅</p>
                        <div className={styles.ImageContainer}><img src={gpt}/></div>
                        <p>ARE YOU READY TO UNLOCK YOUR POTENTIAL?</p>
                    </div>
                    <section className={styles.bottomSection}>
                        <button className={styles.ContinueBtn} onClick={showNextElement}>Continue</button>
                    </section>
            </div>}
        {showElementTwo && 
            <div className={styles2.ReminderContainer}>
                <h1>REMINDER!</h1>
                <p>The main application period for the GAP Program has ended. However, we are accepting applications for the program's waiting list. If additional seats become available, we will review your application. Best of luck! 👍</p>
                <hr className={styles2.hr1}/>
                <hr/>
                <div className={styles2.ReminderBtnCont}>
                    <button onClick={showPreviousElement}>Previous</button>
                    <button onClick={showNextElement}>Continue</button>
                </div>
            </div>
        }
        {showElementThree && 
            <div className={styles3.SignUpContainer}>
              <h1>Sign Up Form</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="fullName">Full Name:</label>
                <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required />

                <label htmlFor="gender">Gender:</label>
                <select name="gender" id="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                <label htmlFor="birthday">Birthday:</label>
                <input type="date" name="birthday" id="birthday" value={formData.birthday} onChange={handleChange} required />

                <label htmlFor="address">Address:</label>
                <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} required />

                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required />

                <label htmlFor="highSchool">High School:</label>
                <input type="text" name="highSchool" id="highSchool" value={formData.highSchool} onChange={handleChange} required />

                <label htmlFor="gradDate">Graduation Date:</label>
                <input type="month" name="gradDate" id="gradDate" value={formData.gradDate} onChange={handleChange} required />

                <label htmlFor="essay">Write an essay:</label>
                <textarea name="essay" id="essay" rows="10" value={formData.essay} onChange={handleChange}></textarea>

                <div className={styles3.FuckMyHand}>
                  <button onClick={showPreviousElement}>Previous</button>
                  <button onClick={console.log(formData)}>Register</button>
                </div>
              </form>
            </div>
        }
        </div>
    </>
    )
}