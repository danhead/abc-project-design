const path = require("path");
const { GMAPS_APIKEY } = process.env;

module.exports = {
  siteMetadata: {
    title: `ABC Project Design`,
    description: `Easy as ABC`,
    keywords: `Bathroom Tiling Fitting Installation London Essex Suffolk Hertfordshire`,
    secrets: { GMAPS_APIKEY },
    navData: [
      {
        title: "Home",
        to: "/"
      },
      {
        title: "Services",
        to: "/services",
        subNav: [
          {
            title: "Bathrooms",
            to: "/services/bathrooms"
          },
          {
            title: "Tiling",
            to: "/services/tiling"
          }
        ]
      },
      {
        title: "Area covered",
        to: "/area-covered"
      },
      {
        title: "About",
        to: "/about"
      },

      {
        title: "Contact",
        to: "/contact"
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ABC Project Design`,
        short_name: `ABC`,
        start_url: `/`,
        icon: `src/images/icon.png`,
        background_color: `#bbcbcb`,
        theme_color: `#9c0905`,
        display: `standalone`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`
  ]
};
