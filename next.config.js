const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ignoreDuringBuilds: true
  },
  env: {
    // customKey: ''
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId },
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/about': { page: '/about' },
  //     '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
  //     '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
  //     '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
  //   };
  // },
  // async headers() {
  //   return [
  //     {
  //       source: '/about',
  //       headers: [
  //         {
  //           key: 'x-custom-header',
  //           value: 'my custom header value',
  //         },
  //         {
  //           key: 'x-another-custom-header',
  //           value: 'my other custom header value',
  //         },
  //       ],
  //     },
  //   ];
  // },
}

module.exports = nextConfig
