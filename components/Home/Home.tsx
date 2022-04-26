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
import clsx from 'clsx'
import {useRouter} from 'next/router'

const Home = (): JSX.Element => {
  const classes = useStyles()

  // Want it to look good for printing? Add `?print=1` to query string.
  const router = useRouter()
  const { print } = router.query
  
  useEffect(() => {
    Mixpanel.track('Landing Page Visit', {})
  }, [Mixpanel])

  return (
    <Grid container className={ classes.container }>
      <div className={ classes.buySellTrack }>
        <BuySellTrack />
      </div>
      <div className={ classes.content }>
        <div className={ classes.center }>
          <Typography variant='h1' className={ classes.bannerText }>
            ENTER TO WIN.
          </Typography>
        </div>
        <div className={ classes.center }>
          <Image
            src='/images/JaysonTatum_Giveaway.png'
            className={ classes.cardImg }
            width={ print ? 250 : 150 }
            height={ print ? 420 : 252 }
          />
          <div className={ classes.mt }>
            <Typography variant='h3'>
              Jayson Tatum PSA 10 Optic Shock Rated Rookie!
            </Typography>
          </div>
        </div>
        <div className={ classes.center }>
          <Typography variant='body1'>Runner Up Wins</Typography>
          <Typography variant='h5' gutterBottom>$50 Credit on Prospect Cards</Typography>
        </div>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-around'
        >
          <img src='/images/TheUnionLogo.png' height='auto' width={ 150 } />
          <Box display='flex' alignItems='center'>
            <Typography variant='h1' className={ classes.times }>
              &times;
            </Typography>
          </Box>
          <a href='https://prospect.cards'>
            <Imgix
              src='https://prospect-cards-images.imgix.net/logos/Prospect_crownLogo_white.png?auto=format'
              width={ 100 }
            />
          </a>
        </Box>
        <div>
          <div className={ classes.printSpacer  }/>

          <span className={ classes.formContainer }>
            <EmailForm promotion='CardStock_22_01_29' />
          </span>
          <Typography variant='caption' align='center' component='p'>
            Winner will be chosen on May 1st, 2022 and will be asked to
            provide a United States mailing address at that time.
            <br />
            No purchase necessary to enter.
          </Typography>
        </div>

        {/*<Imgix*/}
        {/*  imgixParams={ { auto: 'compress,format' } }*/}
        {/*  src='https://prospect-cards-images.imgix.net/logos/Shield_MultiColor.png'*/}
        {/*  width={ 49 }*/}
        {/*  htmlAttributes={ {*/}
        {/*    alt: 'Prospect Cards Shield Logo',*/}
        {/*    width: 49,*/}
        {/*  } }*/}
        {/*/>*/}
      </div>
      <div className={ classes.buySellTrack }>
        <BuySellTrack />
      </div>
    </Grid>
  )
}

export default Home
