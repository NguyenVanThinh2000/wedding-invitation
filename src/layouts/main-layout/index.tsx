import { Outlet } from 'react-router-dom'
import { Snowfall } from 'react-snowfall'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import '@/styles/index.scss'

import AppContainer from '../app-container'
import Header from '../header'
import styles from './main-layout.module.scss'

gsap.registerPlugin(ScrollTrigger)

const MainLayout = () => {
  return (
    <div className={styles.appWrapper}>
      <AppContainer>
        <Header />
        <Outlet />
      </AppContainer>
      <Snowfall
        color="#e57d90"
        snowflakeCount={20}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </div>
  )
}

export default MainLayout
