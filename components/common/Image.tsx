import { imigxUrl } from 'lib/image'
import NImage from 'next/image'
import React from 'react'

interface Props {
  url: string;
  height?: number;
  width?: number;
  alt?: string;
  className?: string;
}

// TODO: This doesn't work with Firefox, which does support Webp
function supportsWebp() {
  const elem = document.createElement('canvas')

  if (!!(elem.getContext && elem.getContext('2d'))) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0
  } else {
    // very old browser like IE 8, canvas not supported
    return false
  }
}

const Image = ({
  url,
  alt,
  className,
  height = 240,
  width = height,
}: Props): JSX.Element => {
  const src = imigxUrl(url, {
    height,
    width,
    fit: 'fill',
    fill: 'solid',
    fm: supportsWebp() ? 'webp' : 'png',
  })

  return (
    <NImage
      className={ className }
      src={ src }
      alt={ alt }
      height={ height }
      width={ width }
    />
  )
}

export default Image
