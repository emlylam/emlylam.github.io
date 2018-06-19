import React from 'react'
import Helmet from 'react-helmet'
import styles from './about.module.css'

const AboutPage = () => (
  <div style={{padding: '2rem 2rem 2rem 2.5rem'}}>
    <Helmet>
      <title>About</title>
    </Helmet>

    <h1>About</h1>
    <p>This is a personal website built by me using GatsbyJS (based on ReactJS) and GitHub Pages.</p>


  </div>

)

export default AboutPage