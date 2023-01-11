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
import extensionImg from "../../images/extension.jpg";
import officeImg from "../../images/office.jpg";
import loftImg from "../../images/loft_conversion.jpg";

export default function Services() {
  return (
    <Layout title="Services">
      <Header title="Services" image={bannerImg} />
      <Section title="Our services">
        <Grid sm={2} md={3}>
          <Card
            heading={
              <Heading el="h3" size="md">
                Extensions
              </Heading>
            }
            image={extensionImg}
            href="/services/extensions"
          >
            Build a house extension
          </Card>
          <Card
            heading={
              <Heading el="h3" size="md">
                Loft conversions
              </Heading>
            }
            image={loftImg}
            href="/services/loft-conversions"
          >
            Add an extra bedroom
          </Card>
          <Card
            heading={
              <Heading el="h3" size="md">
                Garage conversions
              </Heading>
            }
            image={officeImg}
            href="/services/garage-conversions"
          >
            Repurpose your unused garage
          </Card>
          <Card
            heading={
              <Heading el="h3" size="md">
                Bathrooms
              </Heading>
            }
            image={bathroomImg}
            href="/services/bathrooms"
          >
            Fully accredited bathroom refurbishment service
          </Card>
          <Card
            heading={
              <Heading el="h3" size="md">
                Tiling
              </Heading>
            }
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
