import 'lib/experimentEmitter'
import { Grid, Typography } from '@material-ui/core'
import { Mixpanel } from 'lib/mixpanel'
import ButtonWithArrow from 'components/common/ButtonWithArrow'
import BuySellTrack from 'assets/svg/BuySellTrack'
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
        <a href='https://prospect.cards'>
          <Imgix
            src='https://prospect-cards-assets.imgix.net/logos/Prospect_crownLogo_white.png?auto=format'
            width={ 174 }
          />
        </a>
        <div className={ classes.copy }>
          <Typography variant='h1'>JOIN PROSPECT CARDS.</Typography>
          <Typography variant='body1'>
            Welcome to Prospect Cards! We now allow all users to list cards for
            sale.
            <br />
            Click below to get started.
          </Typography>
        </div>
        <div>
          <ButtonWithArrow href='https://prospect.cards/register'>
            Join Prospect Cards
          </ButtonWithArrow>
        </div>
        <Imgix
          imgixParams={ { auto: 'compress,format' } }
          src='https://prospect-cards-assets.imgix.net/logos/Shield_MultiColor.png'
          width={ 49 }
          htmlAttributes={ {
            alt: 'Prospect Cards Shield Logo',
            width: 49,
          } }
        />
      </div>
      <div className={ classes.buySellTrack }>
        <BuySellTrack />
      </div>
    </Grid>
  )
}

export default Home
