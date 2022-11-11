import React from "react";
import "@styles/globals.css";
import "@fontsource/cooper-hewitt/400.css";
import "@fontsource/cooper-hewitt/700.css";

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default Application;
