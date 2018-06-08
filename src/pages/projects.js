import React from 'react'
import Link from 'gatsby-link'
import styles from './projects.module.css'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

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
          <br></br>
          <Img sizes={this.props.data.imgDelayNoMore.sizes} />
          <br></br>
          <p className={styles.projectsP}>In a nutshell, the main objective of Delay No More for
            the users is to grow and level-up their own virtual farm by avoiding their own self-defined
            'blacklisted' websites (such as Facebook & YouTube) that distract them from their work.
            The browsing analytics feature also allows users to visualize their day to day browsing habits.
            Click <a href="https://github.com/IIMT4601/delay-no-more" target="_blank" style={{textDecoration: 'none', color:'#03A9F4'}}> here</a> to
            view the source code on GitHub.
          </p>
        </div>
        <br></br>
        {/*<div className={styles.projectContainer}>*/}
          {/*<h1>WordPress Site Setups and SEO</h1>*/}
          {/*<p className={styles.projectsP}>Sample Text sample text.</p>*/}
        {/*</div>*/}
      </div>
    )
  }
}
export default ProjectsPage

export const pageQuery = graphql `
  query ProjectQuery {
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