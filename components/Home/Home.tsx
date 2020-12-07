import { Grid, Typography } from '@material-ui/core'
import { Mixpanel } from 'lib/mixpanel'
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
      <Grid item className={ classes.other }>
        <Grid item className={ classes.content }>
          <Imgix
            src='https://prospect-cards-assets.imgix.net/logo.png'
            width={ 250 }
          />
          <div>
            <Typography variant='h1'>COMING SOON.</Typography>
            <Typography>
              Sign up to be notified when the site launches
            </Typography>
          </div>
          <EmailForm />
        </Grid>
      </Grid>
      <Grid item className={ classes.rightPane }>
        <Imgix
          src='https://prospect-cards-assets.imgix.net/logo-badge.png'
          width={ 65 }
        />
        Buy Sell Track
      </Grid>
    </Grid>
  )
}

export default Home
