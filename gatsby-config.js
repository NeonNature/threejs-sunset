module.exports = {
  siteMetadata: {
    siteUrl: "https://threejssunsetmain.gatsbyjs.io/",
    title: "Sunset by Min Maung Maung",
    description: `Made with ThreeJS and Gatsby`,
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-fontawesome-css",
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
      {
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: 'Sunset by Min Maung Maung',
              short_name: 'Sunset by Min Maung Maung',
              start_url: '/',
              icon: 'src/images/icon.png',
          },
      }
  ],
};
