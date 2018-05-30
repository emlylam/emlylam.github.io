import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{display: "Block"}}
  >
    <ul
      style={{listStyleType: "None", margin: "0", padding: "0"}}
    >
      <li style={{display: "Inline", float: "Right", padding: "7px"}}>
        <Link
          to="/projects/"
          style={{textDecoration: "None"}}
        >Projects</Link>
      </li>
      <li style={{display: "Inline", float: "Right", padding: "7px"}}>
        <Link to="/"
              style={{textDecoration: "None"}}
        >
          Home
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
