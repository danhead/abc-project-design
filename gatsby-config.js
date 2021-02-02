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
    ],
    reviews: [
      {
        name: "Rated People",
        title: "Bathroom fitter",
        text:
          "I am so pleased with my bathroom. This is the second time I have used this company. The first time they did both my bathrooms and they looked incredible. This time they installed under floor heating and also did the tiling. They go way above what they need to do, always making great suggestions. They even let me use there trade card at top tiles so I could save money. Would 100% recommend these guys.",
        author: "Lee",
        date: "01/01/2021"
      },
      {
        name: "Rated People",
        title: "Tiler",
        text:
          "Nick and Daniel agreed to level and tile my kitchen floor at very short notice. The quote was very competitively priced and Daniel's workmanship is exceptional. I would definitely recommend them.",
        author: "Daniel",
        date: "21/12/2020"
      },
      {
        name: "Bark",
        title: "New bathroom",
        text:
          "Excellent, my mother's bathroom was gutted and refitted in 7 days. They tiled the necessary areas shower, the floor, a quadrant shower fitted, new sink and toilet fitted. A new ceiling with 4 spot lights and remaining walls plastered and painted. They also fitted a heated towel rail and mirrored cabinet. My mother was delighted and so was I to see her smile at her new bathroom. Worked cleanly and removed all the old bathroom. Very friendly and provided a quick quote. Would highly recommend.",
        author: "Mrs Wittiker",
        date: "10/01/2021"
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
