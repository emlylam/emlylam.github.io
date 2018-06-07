import React from 'react'
import Link from 'gatsby-link'
import styles from './index.module.css'
import Helmet from 'react-helmet'

const IndexPage = () => (
  <div className={styles.indexContainer}>
    <Helmet>
      <title>emlylam</title>
    </Helmet>

    <h1>Emily Lam</h1>
    <p>I'm currently a master's student studying Digital Business Strategy at accadis Hochschule
      Bad Homburg.</p>
    <p>Before moving to Germany, I graduated from the University of Hong Kong with a Bachelor
      of Business Administration, double majoring in Information Systems and Computer Science.</p>

    <p>In case you were wondering - I call myself 'emly' or 'emlylam' on the Internet because the username
      'emilylam' is always taken. So no, I didn't <i>stylize</i> it just to look cool.
    </p>
    {/*<p>Extra facts about me: I learned German as a hobby and I'm also a die-hard believer of index funds.</p>*/}
  </div>
)
export default IndexPage

