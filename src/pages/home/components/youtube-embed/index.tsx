import { HTMLProps, forwardRef, useState } from 'react'

import clsx from 'clsx'
import { Play } from 'lucide-react'

import { getYouTubeVideoId } from '@/utils'

import styles from './youtube-embed.module.scss'

interface YoutubeEmbedProps extends HTMLProps<HTMLDivElement> {
  url: string
}

const YoutubeEmbed = forwardRef<HTMLDivElement, YoutubeEmbedProps>(
  ({ url, className, ...props }: YoutubeEmbedProps, ref) => {
    const videoId = getYouTubeVideoId(url)
    const [isShowVideo, setIsShowVideo] = useState(false)

    const toggleShowVideo = () => {
      setIsShowVideo(true)
    }

    return (
      <div ref={ref} className={clsx(styles.video, className)} {...props}>
        {isShowVideo ? (
          <iframe
            allowFullScreen
            allow="autoplay; encrypted-media"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            width="100%"
          />
        ) : (
          <div className={styles.thumbnail} onClick={toggleShowVideo}>
            <img alt="" src={`https://img.youtube.com/vi/${videoId}/0.jpg`} />
            <div className={styles.overlay}></div>
            <Play className={styles.icon} size={80} />
          </div>
        )}
      </div>
    )
  },
)
export default YoutubeEmbed
