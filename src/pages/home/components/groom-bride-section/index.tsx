import { Container, SectionTitle } from '@/components'
import { groomBrideInfo } from '@/constants'

import styles from './groom-bride-section.module.scss'

export const GroomBrideSection = () => {
  return (
    <Container className={styles.groomBrideSectionWrapper}>
      <SectionTitle
        description="Giới thiệu một chú rể đẹp trai và cô dâu xinh đẹp"
        title="- Groom & Bride -"
      />

      <p className={styles.name}>Thoan Thoan ♥ Thịnh Nguyễn</p>

      <div className={styles.groomBrideInfo}>
        {groomBrideInfo.map((info, index) => (
          <div key={index} className={styles.groomBride}>
            <div className={styles.front}>
              <img alt={info.tag} src={info.image} />
              <p className={styles.tag}>{info.tag}</p>
              <p className={styles.dad}>
                Con ông: <span>{info.dad}</span>
              </p>
              <p className={styles.mom}>
                Con bà: <span>{info.mom}</span>
              </p>
            </div>
            <div className={styles.back}>
              <p className={styles.description}>{info.description}</p>
              <div className={styles.social}>
                {info.social.map((social, index) => (
                  <a key={index} href={social.link} rel="noreferrer" target="_blank">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
