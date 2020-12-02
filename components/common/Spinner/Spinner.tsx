import React from 'react'
import styles from 'styles/Spinner.module.css'
import useStyles from './styles'

interface Props {
  fullHeight?: boolean;
}
const Spinner = ({ fullHeight }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <span className={ `${fullHeight ? classes.container : ''}` }>
      <div className={ `${styles.loader} ${styles['loader-1']}` } />
    </span>
  )
}

export default Spinner
