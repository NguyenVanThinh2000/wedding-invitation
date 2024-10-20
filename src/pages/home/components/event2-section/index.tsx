import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { Container, SectionTitle } from '@/components'
import { invitationInfo } from '@/constants'
import { useInvitationContext } from '@/hooks/context/userInvitation'
import { TGuest, THost } from '@/types'

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
  const locationList = guest && invitationInfo[guest.host].location

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
  // useGSAP(() => {
  //   gsap.from('#event-bottons', {
  //     x: 100,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: '#event-bottons',
  //       start: scroll_trigger,
  //       end: scroll_trigger,
  //       scrub: 2,
  //     },
  //   })
  // })
  return (
    <Container className={styles.eventSectionWrapper} id="event">
      <SectionTitle description="" title={guest ? eventTitle[guest.host] : ''} />

      <p className={styles.p1}>Hôn lễ được cử hành tại TƯ GIA vào lúc</p>
      <p className={styles.p2}>
        {guest && (
          <>
            {invitationInfo[guest.host].hour1} giờ {invitationInfo[guest.host].minute1} -{' '}
            {invitationInfo[guest.host].weekDay} <br />
            Ngày {invitationInfo[guest.host].day} tháng {invitationInfo[guest.host].month} năm 2024
          </>
        )}
      </p>
      <p className={styles.p3}>
        {guest && (
          <>
            (Nhằm ngày {invitationInfo[guest.host].dayLunar} tháng{' '}
            {invitationInfo[guest.host].monthLunar} năm Giáp Thìn)
          </>
        )}
      </p>

      <p className={styles.p4}>Trân trọng kính mời</p>
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
        {guest && (
          <>
            {invitationInfo[guest.host].hour2} giờ {invitationInfo[guest.host].minute2} -{' '}
            {invitationInfo[guest.host].weekDay}
            <br /> Ngày 08 tháng 11 năm 2024
          </>
        )}
      </p>

      <p className={styles.p10}>
        {guest && (
          <>
            (Nhằm ngày {invitationInfo[guest.host].dayLunar} tháng{' '}
            {invitationInfo[guest.host].monthLunar} năm Giáp Thìn)
          </>
        )}
      </p>

      <div className={styles.maps} id="event-bottons">
        <a href={locationList?.[0].mapUrl} target="_blank">
          Bản đồ tư gia
        </a>
        <a href={locationList?.[1].mapUrl} target="_blank">
          Bản đồ TTHTCĐ
        </a>
      </div>
    </Container>
  )
}
