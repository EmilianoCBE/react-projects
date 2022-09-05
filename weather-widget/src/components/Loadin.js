import React from 'react'

import styles from './Loadin.module.css'

const Loadin = () => {
  return (
    <div className={styles.loadingContainer}>
        <div className={styles.loader}>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Loadin