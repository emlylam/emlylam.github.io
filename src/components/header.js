import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'
import { NavLink } from 'react-router-dom'

const ListLink = props =>
  <li style={{ display: 'inline-block', marginRight: '1rem', fontSize: '20px'}}>
    <NavLink
      exact to={props.to}
      style={{ textDecoration: 'none', color: '#000000' }}
      activeStyle={{borderBottomWidth: '2.3px', borderBottomStyle: 'solid'}}
    >
      {props.children}
    </NavLink>
  </li>

export default ({children}) => (
  <header style={{ marginBottom: '1.5rem' }}>
    <Link to="/" style={{ textDecoration: 'none', textShadow: 'none', backgroundImage: 'none' }}>
      <h3 style={{ display: 'inline', fontSize: '2rem', color: '#413F40'}}>emly</h3>
    </Link>
    <ul style={{ listStyle: 'none', float: 'right' }}>
      <ListLink exact to="/about/">About</ListLink>
      <ListLink exact to="/projects/">Projects</ListLink>
      <ListLink exact to="/contact/">Contact</ListLink>
    </ul>
  </header>
)






