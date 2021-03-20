module.exports = {
  siteMetadata: {
    title: `Gatsby`,
  },
  plugins: [
    'gatsby-plugin-postcss',
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