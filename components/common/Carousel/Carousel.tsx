import { ListingFragment } from 'types/graphql'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'
import Image from 'components/common/Image'
import React from 'react'
import useStyles from './styles'

interface Props {
  listing: ListingFragment;
  height: number;
}

const Carousel = ({ listing, height }: Props): JSX.Element => {
  const classes = useStyles({ height })

  return (
    <div className={ classes.root }>
      <ReactCarousel
        showThumbs={ false }
        showStatus={ false }
        infiniteLoop
        centerMode={ listing.images.length > 1 }
        showIndicators={ listing.images.length > 1 }
      >
        {listing.images.map((image) => {
          return (
            <Image
              key={ image.id }
              url={ image.url }
              height={ height }
              width={ Math.floor(height * 0.7) }
              alt={ listing.title }
              className={ classes.img }
            />
          )
        })}
      </ReactCarousel>
    </div>
  )
}

export default Carousel
