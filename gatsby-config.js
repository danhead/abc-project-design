const path = require("path");
const { GMAPS_APIKEY } = process.env;

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = `https://abcprojectdesign.com`,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    siteUrl,
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
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: `*` }]
          },
          "branch-deploy": {
            policy: [{ userAgent: `*`, disallow: [`/`] }],
            sitemap: null,
            host: null
          },
          "deploy-preview": {
            policy: [{ userAgent: `*`, disallow: [`/`] }],
            sitemap: null,
            host: null
          }
        }
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`
  ]
};
