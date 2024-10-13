import styles from './section-title.module.scss'

interface ISectionTitleProps {
  title: string
  description: string
}
export const SectionTitle = ({ title, description }: ISectionTitleProps) => {
  return (
    <div className={styles.sectionTitleWrapper}>
      <h2
        dangerouslySetInnerHTML={{
          __html: title,
        }}
        className={styles.title}
      ></h2>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
