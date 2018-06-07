import React from 'react'
import styles from './contact.module.css'
import Helmet from 'react-helmet'


const ContactPage = () => (
  <div className={styles.contactContainer}>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <h1>Contact</h1>
    <p>Email me at emilylam2112@gmail.com if you would like to get in touch.</p>
  </div>
)

export default ContactPage