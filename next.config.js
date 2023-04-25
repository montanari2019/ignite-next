/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images:{
    domains:[
      'files.stripe.com'
    ]
  }
}


module.exports = {
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
