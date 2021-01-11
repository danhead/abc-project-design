import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import Header from "../components/header";
import HeaderLogo from "../components/header-logo";
import Section from "../components/section";
import ReviewSummary from "../components/review-summary";
import CustomSlick from "../components/custom-slick";
import Text from "../components/text";

export default function Index({ data }) {
  return (
    <Layout>
      <Header image={data.headerImage.childImageSharp.fluid}>
        <HeaderLogo />
      </Header>
      <Section>
        <Text>
          ABC Project Design Ltd is a medium sized family run business with more
          than 30 years experience in the building and construction industry. We
          offer a fully certified and accredited bathroom refurbishment service.
        </Text>
        <Text>
          We currently have 15 skilled tradesman within our workforce and
          operate in Essex, Hertfordshire, Kent and London.
        </Text>
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
