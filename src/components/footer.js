import React from 'react'
import Link from 'gatsby-link'
import styles from './footer.module.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'


export default ({children}) => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
    <a href="https://github.com/emlylam" target="_blank" className={styles.iconLink}>
      <i className={"fa fa-github" + " " + `${styles.icon}`}/>
    </a>
    <a href="https://www.linkedin.com/in/emily-lam-766373158/" target="_blank" className={styles.iconLink}>
      <i className={"fa fa-linkedin" + " " + `${styles.icon}`}/>
    </a>
    <a href="mailto:emilylam2112@gmail.com" className={styles.iconLink}>
      <i className={"fa fa-at" + " " + `${styles.icon}`}/>
    </a>
    <p className={styles.footerP}>Built by Emily Lam</p>
    </div>
  </footer>
)