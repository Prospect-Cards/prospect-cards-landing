// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  webpack: (config) => {
    config.externals = [...config.externals, { moment: 'moment' }]
    return config
  },
  images: {
    domains: ['krispy-kards-local.imgix.net', 'krispy-kards.imgix.net'],
  },
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
})
