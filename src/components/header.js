import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'
import { NavLink } from 'react-router-dom'

// const ListLink = props =>
//   <li className={styles.liStyle}>
//     <NavLink
//       exact to={props.to}
//       className={styles.navLinkStyle}
//       activeStyle={{borderBottomWidth: '2.5px', borderBottomStyle: 'solid'}}
//     >
//       {props.children}
//     </NavLink>
//   </li>
//
// export default ({children}) => (
//   <header className={styles.headerLeft}>
//     <Link to="/" style={{ textDecoration: 'none', textShadow: 'none', backgroundImage: 'none' }}>
//       <h3 className={styles.logoStyle}>emly</h3>
//     </Link>
//     <div className={styles.headerRight}>
//       <ul className={styles.headerRightUL}>
//         <ListLink exact to="/about/">About</ListLink>
//         <ListLink exact to="/projects/">Projects</ListLink>
//         <ListLink exact to="/contact/">Contact</ListLink>
//       </ul>
//     </div>
//   </header>
// )


const MenuLink = props =>
  <NavLink
    exact to={props.to}
    className={styles.menuLink}
    activeStyle={{borderBottomWidth: '2.5px', borderBottomStyle: 'solid'}}
    // activeStyle={{backgroundColor: 'yellow'}}
  >
    {props.children}
  </NavLink>

export default ({children}) => (
  <header className={styles.header}>
    <Link to="/"
          style={{ textDecoration: 'none', textShadow: 'none', backgroundImage: 'none' }}
          className={styles.logo}
    >
      <h3 className={styles.logoText}>emly</h3>
    </Link>
    <div className={styles.headerRight}>
        <MenuLink exact to="/about/" className={styles.about}>About</MenuLink>
        <MenuLink exact to="/projects/" className={styles.projects}>Projects</MenuLink>
        <MenuLink exact to="/contact/" className={styles.contact}>Contact</MenuLink>
    </div>
  </header>
)








