/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          `oswald\:100,200i`,
          `roboto`,
          `maven pro\:200,400,500,600,800`,
          `source sans pro\:300,400,400i,700`,
        ],
        display: "swap",
      },
    },
  ],
}
