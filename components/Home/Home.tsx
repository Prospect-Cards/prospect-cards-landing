import { Grid, Typography } from '@material-ui/core'
import { Mixpanel } from 'lib/mixpanel'
import Badge from 'assets/svg/Badge'
import BuySellTrack from 'assets/svg/BuySellTrack'
import EmailForm from 'components/EmailForm'
import Imgix from 'react-imgix'
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
        <Imgix
          src='https://prospect-cards-assets.imgix.net/logos/Prospect_crownLogo_white.png?auto=format'
          width={ 174 }
        />
        <div className={ classes.copy }>
          <Typography variant='h1'>BECOME A SELLER.</Typography>
          <Typography variant='body1'>
            Enter your email address below to join our waitlist to become a
            seller.
            <br/>
            We'll let you know as soon as you're approved!
          </Typography>
        </div>
        <EmailForm />
        <Badge />
      </div>
      <div className={ classes.buySellTrack }>
        <BuySellTrack />
      </div>
    </Grid>
  )
}

export default Home
