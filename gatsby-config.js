module.exports = {
  siteMetadata: {
    title: `Pick the best gift possible`,
    description:
      "Pick the best gift possible for your friends.",
    url: "https://www.pickthebest.gifts", // No trailing slash allowed!
    image: ".src/images/down-arrow.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
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