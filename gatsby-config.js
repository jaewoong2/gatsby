/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  //grapql
  siteMetadata : {
    // site : {
      title : `Pandas Eating Lots`,
      description : `A simple description about pandas eating lots...`,
      author : `gatsby`,
      imgae : `./src/images/woong.jpg`
    // },
  },
  // plugin
  plugins: [
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  { 
    resolve: `gatsby-source-filesystem`,
    options: { path: `./src/images/` }
   },
    {
      resolve : `gatsby-plugin-manifest`,
      options : {
        name : 'GatsbyJS',
        short_name : 'GatsbyJS',
        start_url : '/',
        background_color : `#6b37bf`,
        theme_color : `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      }
    },
    {
      resolve : `gatsby-transformer-remark`,
      options : {
        plugins : [{
          resolve : `gatsby-remark-images`,
          options : {
            maxWidth : 1000,
          }
        }]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        // pathToConfigModule: `src/typ/ography/typography`,
      },
    },
  ],
}