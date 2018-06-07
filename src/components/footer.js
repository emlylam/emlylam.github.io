import React from 'react'
import Link from 'gatsby-link'
import styles from './footer.module.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'


export default ({children}) => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
    <i className="fab fa-github"></i>
    <p className={styles.footerP}>Designed by Emily Lam</p>
    </div>
  </footer>
)