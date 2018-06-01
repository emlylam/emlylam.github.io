import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Container from '../components/container'

const ListLink = props =>
  <li style={{ display: 'inline-block', marginRight: '1rem',  }}>
    <Link to={props.to} style={{ textDecoration: 'none' }}>
      {props.children}
    </Link>
  </li>

export default ({ children }) => (
  <Container>
    <div>
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
      <div>
        {children()}
      </div>
    </div>
  </Container>
);