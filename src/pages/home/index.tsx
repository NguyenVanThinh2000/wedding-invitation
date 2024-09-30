import { TitleSection } from './components'
import AlbumSection from './components/album-section'
import InvitationSection from './components/invitation-section'
import LoveStory from './components/love-story'
import VideoWeddingSection from './components/video-wedding-section'
import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <TitleSection />
      <VideoWeddingSection />
      <AlbumSection />
      <LoveStory />
      <InvitationSection />
    </div>
  )
}

export default Home
