import React from 'react'
import Link from 'gatsby-link'
import styles from './projects.module.css'
import Helmet from 'react-helmet'

const ProjectsPage = () => (
  <div>
    <Helmet>
      <title>Projects</title>
    </Helmet>

    <h1>Projects</h1>

    <div className={styles.projectContainer}>
      <h3>Delay No More Productivity App</h3>
      <p>During my final semester, my group and I built a Chrome extension to help students
         work more productively on the Internet. Our app utilizes gamification to help users build
         a good long-term habit and minimize distractions.
         I was mainly in charge of frontend development and documentation, where I used
         Material-UI to build UI components with ReactJS.
      </p>
      <p>In a nutshell, the main objective of Delay No More for the users is to grow and level-up
         their own virtual farm by avoiding their own self-defined 'blacklisted' websites
         (such as Facebook & YouTube) that distract them from their work.
      </p>
    </div>

    <div className={styles.projectContainer}>
      <h3>Philantha Rose Water E-Commerce Site</h3>
      <p>Sample Text sample text.</p>
    </div>



  </div>
)

export default ProjectsPage
