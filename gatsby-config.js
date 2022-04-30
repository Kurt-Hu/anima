module.exports = {
  siteMetadata: {
    title: `ANIMA - Health and Longevity`,
    description: `A personal website focused on providing accessible information about health and longevity.`,
    author: `@kurt-hu`,
    siteUrl: `https://kurt-hu.github.io/anima`,
    menuLinks:[
      {
        name:'Home',
        link:'/'
      },
      {
        name:'Food',
        link:'/food',
        sublinks: [
          {
            name:'dietary-restriction',
            link:'/dietary-restriction'
          },
        ]
      },
      {
        name:'Supplementation',
        link:'/supplementation'
      },
      {
        name:'Exercise',
        link:'/exercise'
      },
      {
        name:'Brain',
        link:'/brain'
      },
      {
        name:'Stages of Life',
        link:'/stages-of-life'
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-root-import',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "/anima",
}
