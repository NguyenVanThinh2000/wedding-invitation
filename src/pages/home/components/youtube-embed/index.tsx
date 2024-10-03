import { HTMLProps, forwardRef } from 'react'

import clsx from 'clsx'

import { getYouTubeVideoId } from '@/utils'

import styles from './youtube-embed.module.scss'

interface YoutubeEmbedProps extends HTMLProps<HTMLDivElement> {
  url: string
}

export const YoutubeEmbed = forwardRef<HTMLDivElement, YoutubeEmbedProps>(
  ({ url, className, ...props }: YoutubeEmbedProps, ref) => {
    const videoId = getYouTubeVideoId(url)

    return (
      <div ref={ref} className={clsx(styles.video, className)} {...props}>
        <iframe
          allowFullScreen
          allow="autoplay; encrypted-media"
          src={`https://www.youtube.com/embed/${videoId}`}
          width="100%"
        />
      </div>
    )
  },
)
