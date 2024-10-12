import { Outlet } from 'react-router-dom'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { useInvitationContext } from '@/hooks/context/userInvitation'
import useScrollLock from '@/hooks/useScrollLock'
import '@/styles/index.scss'

import AppContainer from '../app-container'
import Header from '../header'
import styles from './main-layout.module.scss'

gsap.registerPlugin(ScrollTrigger)

const MainLayout = () => {
  const {
    state: { isScrollLock },
  } = useInvitationContext()

  useScrollLock(isScrollLock)
  return (
    <div className={styles.appWrapper}>
      <AppContainer>
        <Header />
        <Outlet />
      </AppContainer>
    </div>
  )
}

export default MainLayout
