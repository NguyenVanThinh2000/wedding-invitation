import { Container, SectionTitle } from '@/components'
import { invitationInfo } from '@/constants'

import styles from './event-section.module.scss'

interface Props {
  mainName: 'thoan' | 'thinh'
  guestName: string
}
export const Event2Section = ({ mainName, guestName }: Props) => {
  const locationList = invitationInfo[mainName].location

  return (
    <Container className={styles.eventSectionWrapper} id="event">
      <SectionTitle description="" title="Sự Kiện Cưới" />

      <p className={styles.p1}>Hôn lễ được cử hành tại TƯ GIA vào lúc</p>
      <p className={styles.p2}>
        {invitationInfo[mainName].hour1} giờ {invitationInfo[mainName].minute1} -{' '}
        {invitationInfo[mainName].weekDay} <br />
        Ngày {invitationInfo[mainName].day} tháng {invitationInfo[mainName].month} năm 2024
      </p>
      <p className={styles.p3}>
        (Nhằm ngày {invitationInfo[mainName].dayLunar} tháng {invitationInfo[mainName].monthLunar}{' '}
        năm Giáp Thìn)
      </p>

      <p className={styles.p4}>Trân trọng kính mời</p>
      <p className={styles.p5}>{guestName}</p>

      <p className={styles.p6}>
        Đến dự bữa tiệc chung vui <br /> cùng gia đình chúng tôi tại
      </p>

      <p className={styles.p7}>{locationList[1].name}</p>

      <p className={styles.p8}>{locationList[1].location}</p>

      <p className={styles.p9}>
        {invitationInfo[mainName].hour2} giờ {invitationInfo[mainName].minute2} -{' '}
        {invitationInfo[mainName].weekDay}
        <br /> Ngày 08 tháng 11 năm 2024
      </p>

      <p className={styles.p10}>
        (Nhằm ngày {invitationInfo[mainName].dayLunar} tháng {invitationInfo[mainName].monthLunar}{' '}
        năm Giáp Thìn)
      </p>

      <div className={styles.maps}>
        <a href={locationList[0].mapUrl} target="_blank">
          Bản đồ tư gia
        </a>
        <a href={locationList[1].mapUrl} target="_blank">
          Bản đồ hội trường
        </a>
      </div>
    </Container>
  )
}
