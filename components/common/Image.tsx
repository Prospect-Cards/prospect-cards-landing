import { ListingImageFragment } from 'types/graphql'
import { imigxUrls } from 'lib/image'
import React from 'react'

interface Props {
  image: ListingImageFragment;
  height?: number;
  alt?: string;
  className?: string;
}

const Image = ({
  image: { url },
  alt,
  className,
  height = 240,
}: Props): JSX.Element => {
  const { urls, fallbackUrl } = imigxUrls(url, { height })

  return (
    <picture>
      {urls.map((url) => (
        <source key={ url } srcSet={ url } />
      ))}
      {fallbackUrl && <img className={ className } src={ fallbackUrl } alt={ alt } />}
    </picture>
  )
}

export default Image
