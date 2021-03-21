module.exports = {
  siteMetadata: {
    title: `Pick the best gift possible`,
    titleTemplate: "%s · test",
    description:
      "Pick the best gift possible for your friends.",
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
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