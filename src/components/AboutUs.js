import styles from "../styles/AboutUs.module.css"
import { NavBar } from "./NavBar"
import staff from "../images/staff.jpg"
import gpt from "../images/gpt.jpg"
import {Footer } from "./Footer"
import ari from "../images/ari.jpg"
import khanka from "../images/khanka.jpg"

export const AboutUs = () => {
    return (
    <>
        <NavBar />
        <div>
            <div class={styles.Aboutcontainer}>
                <div>
                <h1>MEET OUR TEAM</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div><img src={staff}/></div>      
            </div>
            <div class={styles.idfk}>
                <h1>OUR BEGINNING</h1>
                <p className={styles.really}>"Elite Hive Academy" was planned by Ulaanbaatar Elite International School alums. This project took off for the first time in the summer of 2020.  The project selected 50 students from private and public secondary schools, who sincerely want to study in foreign universities. With the help of their teachers, the high school students completed a thorough training with five objectives in a month.
                </p>
                <div className={styles.halfAnd}>
                    <img src={gpt} className={styles.immg}/>
                    <p></p>
                </div>
                <hr></hr>
                <div class={styles.Team}>
                    <h1>MEET YOUR MENTORS</h1>
                    <p>Our experienced team of mentors is committed to guiding you towards your dream schools like Harvard, MIT, and Stanford. With personalized attention and expert advice, we'll equip you with the tools and knowledge to navigate the college application process successfully.</p>
                    <div class={styles.members}>
                        <div className={styles.speaker}>
                            <div className={styles.imgCont}><img src={khanka}/></div>
                            <span className={styles.FirstName}>KHANGEREL</span><span>BATZUL</span>
                            <p className={styles.Desktop}>Introducing Khangerel, an accomplished UEIS alumni who was been accepted into the prestigious University of Toronto, Class of 2027. Khangerel, who has two years of experience mentoring secondary students in a variety of subjects, will discuss her experience and provide insight into the standards and needs of top colleges.</p>
                        </div>
                        <div className={styles.speaker}>
                            <div className={styles.imgCont}><img src={ari}/></div>
                            <span className={styles.FirstName}>ARIGUN</span><span>TUR-OD</span>
                            <p className={styles.Desktop}>Arigun, who has recently graduated UEIS this year, has been admitted to prestigious schools such as Columbia University, Auckland University and commited to NYU for the class of 2027. He will be sharing meaningful insights   and experiences in this year’s Elite Hive academy</p>
                        </div>
                    </div>
                </div>
                <div class={styles.idfk2}>
                    <h2>Our locations</h2>
                    <div className={styles.map}>
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.2718819079882!2d106.91217612562913!3d47.91177654101166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96924ef66946b3%3A0xb5a25ad1b4f3b6d8!2sThe%20Ulaanbaatar%20Elite%20International%20School!5e0!3m2!1sen!2smn!4v1688183621089!5m2!1sen!2smn"
                            width="600"
                            height="450"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                <div className={styles.footerish}>
                <h1>SIGN UP NOW</h1>
                <button> Sign Up</button>
            </div>
            </div>

        </div>
    </>
    )
}