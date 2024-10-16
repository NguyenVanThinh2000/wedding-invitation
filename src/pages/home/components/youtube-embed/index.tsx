import { HTMLProps, forwardRef, useEffect, useRef } from 'react'

import clsx from 'clsx'

import { getYouTubeVideoId } from '@/utils'

import styles from './youtube-embed.module.scss'

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void
    YT: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Player: new (elementId: string, options: any) => any
      PlayerState: {
        PLAYING: number
        PAUSED: number
      }
    }
  }
}

interface YoutubeEmbedProps extends HTMLProps<HTMLDivElement> {
  url: string
  setSoundPlay: (value: boolean) => void
}

export const YoutubeEmbed = forwardRef<HTMLDivElement, YoutubeEmbedProps>(
  ({ url, className, setSoundPlay, ...props }: YoutubeEmbedProps, ref) => {
    const videoId = getYouTubeVideoId(url)
    const playerRef = useRef(null)

    useEffect(() => {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag)

      window.onYouTubeIframeAPIReady = () => {
        playerRef.current = new window.YT.Player(`youtube-player-${videoId}`, {
          videoId: videoId,
          events: {
            onStateChange: onPlayerStateChange,
          },
        })
      }

      const onPlayerStateChange = (event: { data: number }) => {
        if (event.data === window.YT.PlayerState.PLAYING) {
          setSoundPlay(false)
        } else if (event.data === window.YT.PlayerState.PAUSED) {
          setSoundPlay(true)
        }
      }
    }, [videoId])

    return (
      <div ref={ref} className={clsx(styles.video, className)} {...props}>
        <div id={`youtube-player-${videoId}`} style={{ width: '100%' }} />
      </div>
    )
  },
)
