import React,{ useState } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar(){


    return(
        <>
        <div className={styles.navbarContainer}>
            <div className={styles.leftNavbar}>
                <p className={styles.logo}>Abstract</p>
                <span className={styles.partition}></span>

                <Link to={"/"}>
                    <p>Help Center</p>
                </Link>
               
            </div>

            <div className={styles.rightNavbar}>

                <Link to={"/createCard"} >
                    <button>Submit a request</button>
                </Link>
              
            </div>


        </div>

        {/* ========= render child components here =========== */}
        {/* <Outlet /> */}
        </>
    )
}