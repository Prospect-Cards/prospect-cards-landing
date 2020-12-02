import { imigxUrls } from 'lib/image'
import NImage from 'next/image'
import React from 'react'

interface Props {
  url: string;
  height?: number;
  width?: number;
  alt?: string;
  className?: string;
}

const Image = ({
  url,
  alt,
  className,
  height = 240,
  width = height,
}: Props): JSX.Element => {
  const { urls, fallbackUrl } = imigxUrls(url, {
    height,
    width,
    fit: 'fill',
    fill: 'solid',
  })

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
