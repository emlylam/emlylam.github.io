import React from 'react'
import styles from './container.module.css'

export default ({ children }) => (
  <div className={styles.containerWrap}>
    {children}
  </div>
);
