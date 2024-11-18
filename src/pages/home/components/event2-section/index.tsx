import { useGSAP } from '@gsap/react'
import clsx from 'clsx'
import gsap from 'gsap'

import { Container, SectionTitle } from '@/components'
import { useInvitationContext } from '@/hooks/context/userInvitation'
import { TGuest, THost } from '@/types'
import { getInformation } from '@/utils'

import styles from './event-section.module.scss'

const eventTitle: Record<THost, string> = {
  thoan: 'Lễ Vu Quy',
  thinh: 'Lễ Thành Hôn',
}

interface Props {
  guest?: TGuest
}

export const Event2Section = ({ guest }: Props) => {
  const {
    state: { scroll_trigger },
  } = useInvitationContext()
  const data = guest && getInformation(guest.location)[guest.host]
  const locationList = data?.location

  useGSAP(() => {
    gsap.from('#event', {
      x: -100,
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#event',
        start: scroll_trigger,
        end: scroll_trigger,
        scrub: 2,
      },
    })
  })
  const title = guest && (guest?.location === 'saigon' ? 'Lễ Báo Hỷ' : eventTitle[guest.host])
  return (
    <Container className={styles.eventSectionWrapper} id="event">
      <SectionTitle description="" title={title ?? ''} />

      {guest?.location !== 'saigon' && (
        <>
          <p className={styles.p1}>Hôn lễ được cử hành tại TƯ GIA vào lúc</p>
          <p className={styles.p2}>
            {data?.hour1} giờ {data?.minute1} - {data?.weekDay} <br />
            Ngày {data?.day} tháng {data?.month} năm 2024
          </p>
          <p className={styles.p3}>
            (Nhằm ngày {data?.dayLunar} tháng {data?.monthLunar} năm Giáp Thìn)
          </p>
        </>
      )}

      <p
        className={clsx(styles.p4, {
          [styles.saigon]: guest?.location === 'saigon',
        })}
      >
        Trân trọng kính mời
      </p>
      <p className={styles.p5}>{guest?.nameInInvitation}</p>

      <p className={styles.p6}>
        Đến dự bữa tiệc chung vui <br /> cùng gia đình chúng tôi tại
      </p>

      <p
        dangerouslySetInnerHTML={{
          __html: locationList ? locationList?.[1].name : '',
        }}
        className={styles.p7}
      ></p>

      <p className={styles.p8}>{locationList?.[1].location}</p>

      <p className={styles.p9}>
        {data?.hour2} giờ {data?.minute2} - {data?.weekDay}
        <br /> Ngày {data?.day} tháng {data?.month} năm 2024
      </p>

      <p className={styles.p10}>
        (Nhằm ngày {data?.dayLunar} tháng {data?.monthLunar} năm Giáp Thìn)
      </p>

      <div className={styles.maps} id="event-bottons">
        {guest?.location !== 'saigon' && (
          <a href={locationList?.[0].mapUrl} target="_blank">
            Bản đồ tư gia
          </a>
        )}
        <a href={locationList?.[1].mapUrl} target="_blank">
          {guest?.location !== 'saigon' ? 'Bản đồ TTHTCĐ' : 'Bản đồ nhà hàng'}
        </a>
      </div>
    </Container>
  )
}
