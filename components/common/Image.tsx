import { ListingImageFragment } from 'types/graphql'
import { imigxUrls } from 'lib/image'
import NImage from 'next/image'
import React from 'react'

interface Props {
  image: ListingImageFragment;
  height?: number;
  width?: number;
  alt?: string;
  className?: string;
}

const Image = ({
  image: { url },
  alt,
  className,
  height = 240,
  width = height * 0.72,
}: Props): JSX.Element => {
  const { urls, fallbackUrl } = imigxUrls(url, { height })

  return (
    <picture>
      {urls.map((url) => (
        <source key={ url } srcSet={ url } />
      ))}
      {fallbackUrl && (
        <NImage
          className={ className }
          src={ fallbackUrl }
          alt={ alt }
          height={ height }
          width={ width }
        />
      )}
    </picture>
  )
}

export default Image
