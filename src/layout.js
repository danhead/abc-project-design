import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { createGlobalStyle } from "styled-components";
import "@fontsource/cooper-hewitt/400.css";
import "@fontsource/cooper-hewitt/400-italic.css";
import "@fontsource/cooper-hewitt/700.css";

const GlobalStyle = createGlobalStyle`
  :root {
    --theme-max-width: 960px;
    --theme-color-primary: #9c0905;
    --theme-color-secondary: #9590a8;
    --theme-color-tertiary: #bbcbcb;
    --theme-color-light: #e5ffde;
    --theme-color-dark: #000a61;
    --color-black: #000;
    --color-white: #fff;
    --color-light-grey: #ced;
    --color-dark-grey: #333;
    --color-semi-transparent: rgba(255, 255, 255, 0.75);
    --base-font-size: 16px;
    --font-size-sm: 14px;
    --font-size-lg: 20px;
    --font-size-xl: 24px;
    --font-size-xxl: 32px;

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
      --font-size-sm: 16px;
      --font-size-lg: 24px;
      --font-size-xl: 32px;
      --font-size-xxl: 42px;
    }
  }

  html {
    font-size: var(--base-font-size);
  }

  body {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Cooper Hewitt', sans-serif; 
    overflow-x: hidden;
    overflow-y: ${props => (props.navOpen ? "hidden" : "auto")};
  }

  *, *:before, *:after {
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

export default function Layout({ children }) {
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
  const [loaded, setLoaded] = useState();
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
          onChangeClientState={() => setLoaded(true)}
        />
        <GlobalStyle navOpen={navOpen} />
        {loaded && (
          <>
            {children}
            <Footer />
          </>
        )}
      </main>
      {loaded && <Nav data={navData} open={navOpen} setOpen={setNavOpen} />}
    </>
  );
}
