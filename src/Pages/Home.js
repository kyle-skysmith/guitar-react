import React from 'react';
import styles from "./homestyle.module.css"
import kyle from "../imgs/kyle.jpg"
 
const Home = () => {
    return (
        <div>
            <h1 className={styles.title}>Welcome to Kyle <br></br> Plays Guitar<br></br>
            <img className={styles.kyle} src={kyle} alt='Kyle' width="300px"/>
            <p>Come on in and learn some guitar! This site will be your go to site for all needs guitar.</p>
            </h1>
            
           

        </div>
    );
};
 
export default Home;