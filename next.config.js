/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");

module.exports = withSvgr()({
    // Your Next.js config options go here
    // For example, you can add additional configuration options like this:
    // webpack: (config, { isServer }) => {
    //   if (!isServer) {
    //     // Additional webpack configuration for the client
    //   }
    //   return config;
    // },
    // Other Next.js configuration options...
});
