import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { Footer, Nav } from "./components";
import { css, Global } from "@emotion/react";
import "@fontsource/cooper-hewitt/400.css";
import "@fontsource/cooper-hewitt/400-italic.css";
import "@fontsource/cooper-hewitt/700.css";

const GlobalStyles = css`
  :root {
    --page-max-width: 960px;
    --color-primary: #9c0905;
    --color-secondary: #9590a8;
    --color-tertiary: #bbcbcb;
    --color-light: #e5ffde;
    --color-dark: #000a61;
    --color-black: #000;
    --color-white: #fff;
    --color-light-grey: #ced;
    --color-mid-grey: #606069;
    --color-dark-grey: #233;
    --color-semi-transparent: rgba(255, 255, 255, 0.75);
    --base-font-size: 16px;
    --line-height: 1.6;
    --font-size-xs: 0.75rem; // 12px
    --font-size-sm: 0.875rem; // 14px
    --font-size-md: 1rem; // 16px
    --font-size-lg: 1.125rem; // 18px
    --font-size-xl: 1.375rem; // 22px
    --font-size-xxl: 1.625rem; // 26px
    --icon-size-md: 16px;
    --icon-size-lg: 24px;

    --spacing-y-xs: 4px;
    --spacing-y-sm: 8px;
    --spacing-y-md: 12px;
    --spacing-y-lg: 16px;
    --spacing-y-xl: 20px;
    --spacing-x-xs: 4px;
    --spacing-x-sm: 8px;
    --spacing-x-md: 12px;
    --spacing-x-lg: 16px;
    --spacing-x-xl: 20px;

    @media (min-width: 30em) {
      --spacing-y-xs: 8px;
      --spacing-y-sm: 16px;
      --spacing-y-md: 24px;
      --spacing-y-lg: 32px;
      --spacing-y-xl: 48px;
      --spacing-x-xs: 8px;
      --spacing-x-sm: 16px;
      --spacing-x-md: 24px;
      --spacing-x-lg: 32px;
      --spacing-x-xl: 48px;

      --base-font-size: 18px;
    }
  }

  html {
    font-size: var(--base-font-size);
  }

  body {
    box-sizing: border-box;
    margin: 0;
    font-family: "Cooper Hewitt", sans-serif;
    line-height: var(--line-height);
    color: var(--color-dark-grey);
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;

export default function Layout({ location, children }) {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          description
          keywords
          navData {
            title
            to
            subNav {
              title
              to
            }
          }
        }
      }
    }
  `);
  const { title, description, keywords, navData } = data.site.siteMetadata;
  const [navOpen, setNavOpen] = useState();
  return (
    <>
      <main>
        <Helmet
          title={title}
          meta={[
            { name: "description", content: description },
            { name: "keywords", content: keywords }
          ]}
          htmlAttributes={{
            lang: "en"
          }}
        />
        <Global styles={GlobalStyles} />
        <Global
          styles={
            navOpen && {
              body: {
                overflowY: "hidden"
              }
            }
          }
        />
        {children}
        <Footer />
      </main>
      <Nav
        location={location}
        data={navData}
        open={navOpen}
        setOpen={setNavOpen}
      />
    </>
  );
}
