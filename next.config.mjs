import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  async rewrites() {
    return [
      {
        source: '/((?!admin|api)):path*',
        destination: '/:tenantDomain/:path*',
        has: [
          {
            type: 'host',
            value: '(?<tenantDomain>.*)',
          },
        ],
      },
    ];
  },
}

export default withPayload(nextConfig)
