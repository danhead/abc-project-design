import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../layout";
import {
  Card,
  Grid,
  Header,
  Heading,
  Section,
  Text
} from "../../../components";

export default function Index({ data }) {
  return (
    <Layout location="/services/bathrooms" title="Bathrooms">
      <Header image={data.headerImage.childImageSharp.fluid}>
        <Heading shadow="xl-white">Bathrooms</Heading>
      </Header>
      <Section heading="We build bespoke bathrooms">
        <Text>
          It's more than likely the most important room in your house and one of
          the biggest investments you will ever make. We offer a professional
          design service and an expert installation service. All our tradesman
          are vetted and handpicked based on their skills within their chosen
          fields.
        </Text>
        <Text>
          With over 30 years experience in bathroom installation we will help
          you choose the perfect bathroom for your home. We can complete your
          whole bathroom installation including electrics, plastering, plumbing
          and paint and decorating.
        </Text>
        <Text>
          If you want a high quality bathroom you have come to the right place.
        </Text>
        <Text>
          We provide an initial consultation followed by a competitive quote.
        </Text>
        <Text>
          To ensure complete satisfaction we insist on managing the entire
          installation process. All of our quotations are for a fully inclusive
          installation service, one price to deliver a fully functioning and
          completed bathroom.
        </Text>
      </Section>
      <Section heading="Case studies" variant="primary">
        <Grid columns={[1, 2, 3]} breakpoints={["25em", "50em"]}>
          <Card
            to="/services/bathrooms/case-study-1"
            image={data.images.nodes[0].childImageSharp.fluid}
            heading={<Heading el="h3">Modern Bathroom</Heading>}
          >
            Maldon, Essex
          </Card>
          <Card
            to="/services/bathrooms/case-study-2"
            image={data.images.nodes[1].childImageSharp.fluid}
            heading={<Heading el="h3">Compact Bathroom</Heading>}
          >
            Hackney, London
          </Card>
          <Card
            to="/services/bathrooms/case-study-3"
            image={data.images.nodes[2].childImageSharp.fluid}
            heading={<Heading el="h3">Modest Shower Room</Heading>}
          >
            Location unknown
          </Card>
          <Card
            to="/services/bathrooms/case-study-4"
            image={data.images.nodes[3].childImageSharp.fluid}
            heading={<Heading el="h3">Period with a Modern Twist</Heading>}
          >
            Hampstead, London
          </Card>
          <Card
            to="/services/bathrooms/case-study-5"
            image={data.images.nodes[4].childImageSharp.fluid}
            heading={<Heading el="h3">En-suite</Heading>}
          >
            Chelmsford, Essex
          </Card>
        </Grid>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "banner_bathroom.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    images: allFile(
      filter: { relativePath: { regex: "/bathroom-cs(.*)a.jpg$/" } }
      sort: { fields: relativePath }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 640, maxHeight: 480, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
