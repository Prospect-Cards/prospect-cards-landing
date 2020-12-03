interface ImigxOpts {
  fm?: string;
  height?: number;
  width?: number;
  fit?: 'clamp' | 'clip' | 'crop' | 'facearea' | 'fill' | 'fillmax' | 'max' | 'min' |  'scale'
  fill?: string;
}

export const acceptedFormats = [
  'image/apng',
  'image/bmp',
  'image/gif',
  'image/jpeg',
  'image/jpg',
  'image/jp2',
  'image/png',
  'image/png8',
  'image/tiff',
  'image/webp',
  'application/pdf',
  'application/x-pdf',
  'image/heic',
]

export const openGraphUrl = (baseUrl: string): string => {
  return imigxUrl(baseUrl, { width: 1200, height: 1200 })
}

export const imigxUrl = (baseUrl: string, opts: ImigxOpts = {}): string => {
  if (baseUrl.indexOf('?') === -1) {
    baseUrl = baseUrl + '?'
  } else {
    baseUrl = baseUrl + '&'
  }

  const params = Object.entries(opts)
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join('&')

  return baseUrl + params
}

export const imigxUrls = (
  baseUrl: string,
  opts: ImigxOpts = {},
): {
  fallbackUrl: string;
  urls: string[];
} => {
  // We prefer webp for its compression, but have the fallback for browsers
  // that don't support it.
  return {
    fallbackUrl: imigxUrl(baseUrl, { ...opts, fm: 'png' }),
    urls: [imigxUrl(baseUrl, { ...opts, fm: 'webp' })],
  }
}


// TODO: This doesn't work with Firefox, which does support Webp
export const supportsWebp = (): boolean => {
  const elem = document.createElement('canvas')

  if (!!(elem.getContext && elem.getContext('2d'))) {
    // was able or not to get WebP representation
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0
  } else {
    // very old browser like IE 8, canvas not supported
    return false
  }
}
