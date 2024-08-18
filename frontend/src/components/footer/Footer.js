import styles from "./Footer.module.css";

export default function Footer() {
    return (

       <div className={styles.footerWrapper}>

    
        <div className={styles.footerContainer}>
            <div className={styles.footerBox}>
                <h3 className={styles.footerHeading}>Abstract</h3>
                <p className={styles.link}><span>Branches</span></p>
            </div>

            <div className={styles.footerBox}>
                <h3 className={styles.footerHeading}>Resources</h3>
                <p className={styles.link}><span>Blogs</span></p>
                <p className={styles.link}><span>Help Center</span></p>
                <p className={styles.link}><span>Release Notes</span></p>
                <p className={styles.link}><span>Status</span></p>
            </div>

            <div className={styles.footerBox}>
                <h3 className={styles.footerHeading}>Community</h3>
                <p className={styles.link}><span>Twitter</span></p>
                <p className={styles.link}><span>LinkedIn</span></p>
                <p className={styles.link}><span>Facebook</span></p>
                <p className={styles.link}><span>Dribbble</span></p>
                <p className={styles.link}><span>Podcast</span></p>
            </div>

            <div className={styles.footerBox}>
                <h3 className={styles.footerHeading}>Company</h3>
                <p className={styles.link}><span>About Us</span></p>
                <p className={styles.link}><span>Careers</span></p>
                <p className={styles.link}><span>Legal</span></p>
                <p className={styles.link}><span>Contact Us</span></p>
                <p className={styles.link}><span>info@abstract.com</span></p>
            </div>
        </div>

            {/* ========= footer copyright ========================= */}
             <div className={`${styles.copyrightBox}`}>
                <p className={styles.copyrightText}>
                    © 2024 Abstract Design. All rights reserved.
                </p>
            </div>


        </div>   
    );
}
