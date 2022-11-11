import React from "react";
import {
  Card,
  Grid,
  Header,
  Heading,
  Layout,
  Section,
} from "@components/index";
import bannerImg from "../../images/banner_bathroom.jpg";
import bathroomImg from "../../images/bathroom.jpg";
import tilingImg from "../../images/tiling.jpg";

export default function Services() {
  return (
    <Layout title="Services">
      <Header title="Services" image={bannerImg} />
      <Section title="Our services">
        <Grid sm={2}>
          <Card
            heading={<Heading el="h3">Bathrooms</Heading>}
            image={bathroomImg}
            href="/services/bathrooms"
          >
            Fully accredited bathroom refurbishment service
          </Card>
          <Card
            heading={<Heading el="h3">Tiling</Heading>}
            image={tilingImg}
            href="/services/tiling"
          >
            We can install many different styles
          </Card>
        </Grid>
      </Section>
    </Layout>
  );
}
