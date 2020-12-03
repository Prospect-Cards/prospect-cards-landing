import { imigxUrl, supportsWebp } from 'lib/image'
import NImage from 'next/image'
import React, {useMemo} from 'react'

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
  const useWebP = useMemo(supportsWebp, [])
  const src = imigxUrl(url, {
    height,
    width,
    fit: 'fill',
    fill: 'solid',
    fm: useWebP ? 'webp' : 'png',
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
