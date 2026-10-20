/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        // Keep app metadata SVG files on Next.js's normal asset pipeline.
        condition: { path: /src\/components\// },
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
}

module.exports = nextConfig
