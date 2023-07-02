import styles from "../styles/NavBar.module.css"
import React, { useState, useEffect } from 'react';
import Logo from "../images/hive.png"



export const NavBar = () => {
   const scrollToBottom = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    };
  return (
<nav>
   <div className={styles.navCont}>
      <img class={styles.logo} src={Logo}></img>
      <ul class={styles.menu}>
         <li><a href="/">Home</a></li>
         <li><a href="/About">About Us</a></li>
         <li><a onClick={scrollToBottom}>Contact Us</a></li>
      </ul>
      <div class={styles.mobilemenu}>
         <div class={styles.dropdown}><div>Menu &#9660;</div>
            <ul class={styles.submenu}>
               <li><a href="/">Home</a></li>
               <li><a href="/About">About Us</a></li>
               <li><a href="/FooterHomePage">Contact Us</a></li>
            </ul>
         </div>
      </div>
      <a href="/Signup"><button class="NavBtn">Sign Up</button></a>
   </div>
</nav>


  );
};