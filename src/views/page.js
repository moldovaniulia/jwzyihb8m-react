import React from 'react'

import Helmet from 'react-helmet'

import AppComponent from '../components/component'
import styles from './page.module.css'

const Page = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>5jwZYiHb8M</title>
        <meta property="og:title" content="5jwZYiHb8M" />
      </Helmet>
      <AppComponent src="/playground_assets/p1-1200h.jpg"></AppComponent>
    </div>
  )
}

export default Page
