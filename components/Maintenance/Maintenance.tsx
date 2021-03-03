import { Box, Grid, Typography } from '@material-ui/core'
import { Instagram } from '@material-ui/icons'
import Badge from 'assets/svg/Badge'
import BuySellTrack from 'assets/svg/BuySellTrack'
import Imgix from 'react-imgix'
import React from 'react'
import useStyles from './styles'

const Maintenance = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Grid container className={ classes.container }>
      <div className={ classes.buySellTrack }>
        <BuySellTrack />
      </div>
      <div className={ classes.content }>
        <a href='https://prospect.cards'>
          <Imgix
            src='https://prospect-cards-assets.imgix.net/logos/Prospect_crownLogo_white.png?auto=format'
            width={ 174 }
          />
        </a>
        <div className={ classes.copy }>
          <Typography variant='h1' className={ classes.header }>
            UNDER MAINTENANCE.
          </Typography>
          <Typography variant='h4' component='h2'>
            Hold tight. If you see this page, it means something good is coming!
            <br />
            Thanks for your patience!
          </Typography>
        </div>
        <Box textAlign='center'>
          <Typography variant='h5' component='h2' gutterBottom>
            In the mean time, check us out on IG
          </Typography>
          <a
            href='https://www.instagram.com/prospect.cards/'
            aria-label='Instagram Account'
          >
            <Instagram />
          </a>
        </Box>
        <Badge />
      </div>
      <div className={ classes.buySellTrack }>
        <BuySellTrack />
      </div>
    </Grid>
  )
}

export default Maintenance
