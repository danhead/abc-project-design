import React from "react";
import { graphql } from "gatsby";
import Layout from "../../layout";
import { Card, Grid, Header, Heading, Section, Text } from "../../components";

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
          {data.caseStudies.nodes.map((cs, i) => (
            <Card
              key={i}
              to={cs.path}
              image={data.images.nodes[i].childImageSharp.fluid}
              heading={<Heading el="h3">{cs.title}</Heading>}
            >
              {cs.location}
            </Card>
          ))}
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
    caseStudies: allCaseStudy(
      filter: { type: { eq: "bathrooms" } }
      sort: { fields: path }
    ) {
      nodes {
        title
        location
        path
      }
    }
    images: allFile(
      filter: {
        relativePath: { regex: "/bathrooms-cs(1a|2a|3a|4a|5a|6a|7a|8j).jpg$/" }
      }
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
