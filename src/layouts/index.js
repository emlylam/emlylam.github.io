import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Container from '../components/container'
import Footer from '../components/footer'
import Header from '../components/header'
import '../../node_modules/font-awesome/css/font-awesome.min.css'



export default ({ children }) => (
  <div>
    <Helmet>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Helmet>

    <Container>
       <Header>
       </Header>
        <div>
          {children()}
        </div>
    </Container>
    {/*<Footer>*/}
    {/*</Footer>*/}
  </div>

);