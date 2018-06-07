import React from 'react'
import Link from 'gatsby-link'
import styles from './projects.module.css'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'


// const ProjectsPage = () => (
//   <div>
//     <Helmet>
//       <title>Projects</title>
//     </Helmet>
//
//     <h1>Projects</h1>
//
//     <div className={styles.projectContainer}>
//       <h3>Delay No More Productivity App</h3>
//       <p>During my final semester, my group and I built a Chrome extension to help students
//          work more productively on the Internet. Our app utilizes gamification to help users build
//          a good long-term habit and minimize distractions.
//          I was mainly in charge of frontend development and documentation, where I used
//          Material-UI to build UI components with ReactJS.
//       </p>
//       <Img sizes={this.props.data.imageOne.sizes} />
//
//
//       <p>In a nutshell, the main objective of Delay No More for the users is to grow and level-up
//          their own virtual farm by avoiding their own self-defined 'blacklisted' websites
//          (such as Facebook & YouTube) that distract them from their work.
//       </p>
//     </div>
//
//     <div className={styles.projectContainer}>
//       <h3>Philantha Rose Water E-Commerce Site</h3>
//       <p>Sample Text sample text.</p>
//     </div>
//
//   </div>
// )

class ProjectsPage extends React.Component {

  render(){
    return (
      <div>
        <Helmet>
          <title>Projects</title>
        </Helmet>

        <div className={styles.projectContainer}>
          <h1>Delay No More Productivity App</h1>
          <p className={styles.projectsP}>During my final semester, my group and I built a Chrome extension to help students
            work more productively on the Internet. Our app utilizes gamification to help users build
            a good long-term habit and minimize distractions.
            I was mainly in charge of frontend development and documentation, where I used
            Material-UI to build UI components with ReactJS.
          </p>
          <Img sizes={this.props.data.imgDelayNoMore.sizes} />


          <p className={styles.projectsP}>In a nutshell, the main objective of Delay No More for the users is to grow and level-up
            their own virtual farm by avoiding their own self-defined 'blacklisted' websites
            (such as Facebook & YouTube) that distract them from their work.
          </p>
        </div>

        <div className={styles.projectContainer}>
          <h1>Philantha Rose Water E-Commerce Site</h1>
          <p className={styles.projectsP}>Sample Text sample text.</p>
        </div>
      </div>
      )
  }
}

export default ProjectsPage

export const pageQuery = graphql `
  query IndexQuery {
    site {
       siteMetadata {
        title
       }
    }
    
    imgDelayNoMore: imageSharp(id: { regex: "/delay_no_more_project.png/"}) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
  }

`