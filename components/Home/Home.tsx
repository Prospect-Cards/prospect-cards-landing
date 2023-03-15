import 'lib/experimentEmitter'
import { Grid, Typography } from '@material-ui/core'
import { Mixpanel } from 'lib/mixpanel'
import BuySellTrack from 'assets/svg/BuySellTrack'
import EmailForm from 'components/EmailForm'
import React, { useEffect } from 'react'
import useStyles from './styles'

const Home = (): JSX.Element => {
  const classes = useStyles()

  useEffect(() => {
    Mixpanel.track('Landing Page Visit', {})
  }, [Mixpanel])

  return (
    <Grid container className={ classes.container }>
      <div className={ classes.buySellTrack }>
        <BuySellTrack />
      </div>
      <div className={ classes.content }>
        <div className={ classes.copy }>
          <Typography variant='body1'>
            Welcome to Prospect Cards!
          </Typography>
        </div>
        <div className={ classes.inputContainer }>
          <Typography variant='body2' align='center'>
            My email address: e.kenney@prospect.cards
          </Typography>
        </div>
      </div>
      <div className={ classes.buySellTrack }>
        <BuySellTrack />
      </div>
    </Grid>
  )
}

export default Home
