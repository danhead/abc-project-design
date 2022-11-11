import React from "react";
import { Header, Layout, Link, Map, Section, Text } from "@components/index";
import { getGoogleAPIKey } from "../lib/env";

export default function AreaCovered({ apikey }) {
  return (
    <Layout title="Area covered">
      <Header map={<Map apikey={apikey} showRegion fullHeight />} />
      <Section title="Area covered">
        <Text>
          Our services are available, in London, Hertfordshire, Cambridgeshire,
          Essex and Kent.
        </Text>
        <Text>
          The area highlighted in the map is a rough guideline, if you are just
          outside the area then please do feel free to{" "}
          <Link href="/contact">get in touch</Link>.
        </Text>
      </Section>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      apikey: getGoogleAPIKey(),
    },
  };
}
