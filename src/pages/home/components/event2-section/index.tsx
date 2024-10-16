import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { Container, SectionTitle } from '@/components'
import { invitationInfo } from '@/constants'
import { useInvitationContext } from '@/hooks/context/userInvitation'
import { THost } from '@/types'

import styles from './event-section.module.scss'

const eventTitle: Record<THost, string> = {
  thoan: 'Lễ Vu Quy',
  thinh: 'Lễ Thành Hôn',
}

interface Props {
  host: THost
  guestName: string
}

export const Event2Section = ({ host, guestName }: Props) => {
  const {
    state: { scroll_trigger },
  } = useInvitationContext()
  const locationList = invitationInfo[host].location

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
  useGSAP(() => {
    gsap.from('#event-bottons', {
      x: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#event-bottons',
        start: scroll_trigger,
        end: scroll_trigger,
        scrub: 2,
      },
    })
  })
  return (
    <Container className={styles.eventSectionWrapper} id="event">
      <SectionTitle description="" title={eventTitle[host]} />

      <p className={styles.p1}>Hôn lễ được cử hành tại TƯ GIA vào lúc</p>
      <p className={styles.p2}>
        {invitationInfo[host].hour1} giờ {invitationInfo[host].minute1} -{' '}
        {invitationInfo[host].weekDay} <br />
        Ngày {invitationInfo[host].day} tháng {invitationInfo[host].month} năm 2024
      </p>
      <p className={styles.p3}>
        (Nhằm ngày {invitationInfo[host].dayLunar} tháng {invitationInfo[host].monthLunar} năm Giáp
        Thìn)
      </p>

      <p className={styles.p4}>Trân trọng kính mời</p>
      <p className={styles.p5}>{guestName}</p>

      <p className={styles.p6}>
        Đến dự bữa tiệc chung vui <br /> cùng gia đình chúng tôi tại
      </p>

      <p className={styles.p7}>{locationList[1].name}</p>

      <p className={styles.p8}>{locationList[1].location}</p>

      <p className={styles.p9}>
        {invitationInfo[host].hour2} giờ {invitationInfo[host].minute2} -{' '}
        {invitationInfo[host].weekDay}
        <br /> Ngày 08 tháng 11 năm 2024
      </p>

      <p className={styles.p10}>
        (Nhằm ngày {invitationInfo[host].dayLunar} tháng {invitationInfo[host].monthLunar} năm Giáp
        Thìn)
      </p>

      <div className={styles.maps} id="event-bottons">
        <a href={locationList[0].mapUrl} target="_blank">
          Bản đồ tư gia
        </a>
        <a href={locationList[1].mapUrl} target="_blank">
          Bản đồ TTHTCĐ
        </a>
      </div>
    </Container>
  )
}
