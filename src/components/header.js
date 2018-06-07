import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'

const ListLink = props =>
  <li style={{ display: 'inline-block', marginRight: '1rem',  }}>
    <Link to={props.to} style={{ textDecoration: 'none' }}>
      {props.children}
    </Link>
  </li>

export default ({children}) => (
  <header style={{ marginBottom: '1.5rem' }}>
    <Link to="/" style={{ textDecoration: 'none', textShadow: 'none', backgroundImage: 'none' }}>
      <h3 style={{ display: 'inline' }}>emly</h3>
    </Link>
    <ul style={{ listStyle: 'none', float: 'right' }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/projects/">Projects</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </header>
)
