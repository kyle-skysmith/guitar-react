import React from "react";
import styles from './freestyle.module.css'; 

 
const Free = () => {

    return (
        <div>
            <h1 className={styles.title}>
              Free Resources For Guitar
              <h2 className={styles.downloads}>
              Download this free Chord Chart.
            <br></br>
            <a href={require("../pdf/BasicChords.pdf")} download="myFile">Download Chord Chart</a>
            </h2>
            </h1>


 
       
        </div>
    );
};
 
export default Free;