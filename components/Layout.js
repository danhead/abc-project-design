import React from "react";
import Head from "next/head";
import { Footer, Nav } from ".";
import styles from "./Layout.module.css";

export default function Layout({ title, children }) {
  const pageTitle = `${title ? `${title} : ` : ""}ABC Project Ltd`;
  return (
    <div className={styles.block}>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
