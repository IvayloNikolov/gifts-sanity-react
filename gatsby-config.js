module.exports = {
  siteMetadata: {
    title: `Pick the best gift possible`,
    siteUrl: 'https://www.pickthebest.gifts',
    description:
      "Pick the best gift possible for your friends.",
    url: "https://www.pickthebest.gifts", // No trailing slash allowed!
    image: ".src/images/down-arrow.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-5VN7QKW226", // Google Analytics / GA
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.pickthebest.gifts',
        sitemap: 'https://www.pickthebest.gifts/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options:{
          projectId: 'n1gslz9a',
          dataset: 'production'
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }
  ],
};