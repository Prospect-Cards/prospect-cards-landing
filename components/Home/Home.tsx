import 'lib/experimentEmitter'
import { Box, Grid, Typography } from '@material-ui/core'
import { Mixpanel } from 'lib/mixpanel'
import ButtonWithArrow from 'components/common/ButtonWithArrow'
import BuySellTrack from 'assets/svg/BuySellTrack'
import EmailForm from 'components/EmailForm'
import Image from 'next/image'
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
      <div className={ classes.buySellTrack }>{/*<BuySellTrack />*/}</div>
      <div className={ classes.content }>
        <Image
          src='/images/kobe-CC-9-front-coined.jpeg'
          className={ classes.cardImg }
          width={ 300 }
          height={ 504 }
        />
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-around'
          width='75%'
        >
          <Image src='/images/LA_Proper_logo.png' width={ 174 } height={ 174 } />
          <Typography variant='h1' className={ classes.times }>
            &times;
          </Typography>

          <a href='https://prospect.cards'>
            <Imgix
              src='https://prospect-cards-images.imgix.net/logos/Prospect_crownLogo_white.png?auto=format'
              width={ 174 }
            />
          </a>
        </Box>
        <div className={ classes.copy }>
          <Typography variant='h1'>ENTER TO WIN.</Typography>
          <Typography variant='body1'>
            {/*Welcome to Prospect Cards!*/}
            {/*<br />*/}
            Enter your email address below for your chance to win a PSA 9
            Collector's Choice Kobe rookie card!
          </Typography>
        </div>
        <div>
          <EmailForm promotion='LaProper_21_11_13' />
          <Typography variant='body2' align='center'>
            Winner will be chosen on November 13th, 2021 and will be asked to
            provide a United States mailing address at that time.
            <br />
            No purchase necessary to enter.
          </Typography>
        </div>

        <Imgix
          imgixParams={ { auto: 'compress,format' } }
          src='https://prospect-cards-images.imgix.net/logos/Shield_MultiColor.png'
          width={ 49 }
          htmlAttributes={ {
            alt: 'Prospect Cards Shield Logo',
            width: 49,
          } }
        />
      </div>
      <div className={ classes.buySellTrack }>{/*<BuySellTrack />*/}</div>
    </Grid>
  )
}

export default Home
