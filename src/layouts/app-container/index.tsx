import { ReactNode } from 'react'

import styles from './app-container.module.scss'

interface AppContainerProps {
  children: ReactNode
}

const AppContainer = ({ children }: AppContainerProps) => {
  return <div className={styles.appContainer}>{children}</div>
}

export default AppContainer
