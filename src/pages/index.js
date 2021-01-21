import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import {
  Card,
  CustomSlick,
  Header,
  HeaderLogo,
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
          image={data.bathroomImage.childImageSharp.fixed}
        >
          Bathrooms
        </Card>
        <Card
          to="/services/tiling"
          image={data.tilingImage.childImageSharp.fixed}
        >
          Tiling
        </Card>
        <Card
          to="/services/electrics"
          image={data.electricsImage.childImageSharp.fixed}
        >
          Electrics
        </Card>
        <Card
          to="/services/carpentry"
          image={data.carpentryImage.childImageSharp.fixed}
        >
          Carpentry
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
        fixed(width: 96, height: 54, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    tilingImage: file(relativePath: { eq: "service_tiling.png" }) {
      childImageSharp {
        fixed(width: 96, height: 54, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    electricsImage: file(relativePath: { eq: "service_electrics.png" }) {
      childImageSharp {
        fixed(width: 96, height: 54, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    carpentryImage: file(relativePath: { eq: "service_carpentry.png" }) {
      childImageSharp {
        fixed(width: 96, height: 54, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
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
