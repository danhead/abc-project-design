const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Abc Project Design`,
    description: `Easy as ABC`,
    keywords: `Foo bar baz`,
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
          },
          {
            title: "Electrics",
            to: "/services/electrics"
          },
          {
            title: "Carpentry",
            to: "/services/carpentry"
          }
        ]
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
      }
    ]
  },
  plugins: [
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
    `gatsby-plugin-sharp`
  ]
};
