import styles from './CourseChip.module.css'

type Props = {
  courseName: string
}

const getStyle = (courseName: string) => {
  const lowerName = courseName.toLowerCase()
  if (lowerName.includes('chiên')) {
    return styles.chien
  }
  if (lowerName.includes('ấu')) {
    return styles.au
  }
  if (lowerName.includes('thiếu')) {
    return styles.thieu
  }
  if (lowerName.includes('nghĩa')) {
    return styles.nghia
  }
  if (lowerName.includes('hiệp')) {
    return styles.hiep
  }
}

export const CourseChip = ({courseName}: Props) => {
  if (!courseName) {
    return <></>
  }

  return <div className={styles.chip + ' ' + getStyle(courseName)}>
    {courseName}
  </div>
}
