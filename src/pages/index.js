import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import {
  Card,
  CustomSlick,
  Header,
  HeaderLogo,
  Heading,
  ReviewSummary,
  Section,
  Text
} from "../components";

export default function Index({ data }) {
  return (
    <Layout>
      <Header image={data.headerImage.childImageSharp.fluid}>
        <HeaderLogo transition={true} />
      </Header>
      <Section grid={2} heading="What we do">
        <Card
          to="/services/bathrooms"
          image={data.bathroomImage.childImageSharp.fluid}
          heading={<Heading el="h3">Bathrooms</Heading>}
        >
          Fully accredited bathroom refurbishment service
        </Card>
        <Card
          to="/services/tiling"
          image={data.tilingImage.childImageSharp.fluid}
          heading={<Heading el="h3">Tiling</Heading>}
        >
          Our tiling is primo!
        </Card>
        <Card
          to="/services/electrics"
          image={data.electricsImage.childImageSharp.fluid}
          heading={<Heading el="h3">Electrics</Heading>}
        >
          Bring some light to your next project
        </Card>
        <Card
          to="/services/carpentry"
          image={data.carpentryImage.childImageSharp.fluid}
          heading={<Heading el="h3">Carpentry</Heading>}
        >
          Our woodworking is sharp!
        </Card>
      </Section>
      <Section variant="primary">
        <CustomSlick>
          {data.site.siteMetadata.reviews.map((review, i) => (
            <ReviewSummary key={i} review={review} />
          ))}
        </CustomSlick>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "bathroom.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bathroomImage: file(relativePath: { eq: "service_bathroom.png" }) {
      childImageSharp {
        fluid(maxWidth: 480, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    tilingImage: file(relativePath: { eq: "service_tiling.png" }) {
      childImageSharp {
        fluid(maxWidth: 480, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    electricsImage: file(relativePath: { eq: "service_electrics.png" }) {
      childImageSharp {
        fluid(maxWidth: 480, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    carpentryImage: file(relativePath: { eq: "service_carpentry.png" }) {
      childImageSharp {
        fluid(maxWidth: 480, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        reviews {
          name
          title
          text
          author
          date
        }
      }
    }
  }
`;
