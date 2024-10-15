import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { Container, SectionTitle } from '@/components'
import { loveStories } from '@/constants'
import { useInvitationContext } from '@/hooks/context/userInvitation'

import styles from './love-story.module.scss'

export const LoveStory = () => {
  const {
    state: { scroll_trigger },
  } = useInvitationContext()

  useGSAP(() => {
    gsap.from('#story1', {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#story1',
        start: scroll_trigger,
        end: scroll_trigger,
        scrub: 2,
      },
    })

    loveStories.forEach((_story, index) => {
      gsap.from(`#story2_${index}`, {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        scrollTrigger: {
          trigger: `#story2_${index}`,
          start: scroll_trigger,
          end: scroll_trigger,
          scrub: 2,
        },
      })
    })
  })

  return (
    <Container className={styles.loveStoryWrapper}>
      <div id="story1">
        <SectionTitle
          description={`Chỉ mất 3 giây để nói lời yêu nhưng mất cả cuộc đời để chứng minh điều đó.`}
          title="Câu chuyện tình yêu"
        />
      </div>

      <div className={styles.stories}>
        {loveStories.map((story, index) => (
          <div key={story.id} className={styles.story} id={`story2_${index}`}>
            <p className={styles.date}>{story.date}</p>
            <h2
              dangerouslySetInnerHTML={{
                __html: story.title,
              }}
              className={styles.title}
            ></h2>
            <p
              dangerouslySetInnerHTML={{
                __html: story.content,
              }}
              className={styles.content}
            ></p>
            <div className={styles.image}>
              <img
                alt=""
                src={story.image}
                onLoad={() => {
                  ScrollTrigger.refresh(true)
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
