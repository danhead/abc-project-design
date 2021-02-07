import React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";
import {
  CustomGallery,
  Header,
  Heading,
  Section,
  Table,
  Text
} from "./components";

const shadows = {
  white: "xl-white",
  "dark-grey": "xl-black"
};

export default function CaseStudy({ data }) {
  const {
    path,
    title,
    titleColor,
    location,
    image,
    key_features,
    price,
    time_taken,
    date,
    content
  } = data.caseStudy;
  const images = data.images.nodes.map(node => node.childImageSharp);
  return (
    <Layout location={path} title={`${title} Case Study`}>
      <Header image={images[image].full}>
        <Heading shadow={shadows[titleColor]} color={titleColor}>
          {title}
        </Heading>
        <Text size="lg" color={titleColor}>
          {location}
        </Text>
      </Header>
      <Section>
        <Table>
          <tbody>
            <tr>
              <td>Key features</td>
              <td>{key_features}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{price}</td>
            </tr>
            <tr>
              <td>Time taken</td>
              <td>{time_taken}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>{date}</td>
            </tr>
          </tbody>
        </Table>
        {content.map((child, i) => (
          <Text key={i}>{child}</Text>
        ))}
      </Section>
      <Section heading="Gallery" variant="primary">
        <CustomGallery images={images} />
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query CaseStudyQuery($pagePath: String!, $images: String!) {
    caseStudy(path: { eq: $pagePath }) {
      path
      title
      titleColor
      location
      image
      key_features
      price
      time_taken
      date
      content
    }
    images: allFile(
      filter: { relativePath: { regex: $images } }
      sort: { fields: relativePath }
    ) {
      nodes {
        childImageSharp {
          thumb: fluid(maxWidth: 256, maxHeight: 256, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
          full: fluid(maxWidth: 1280, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
/*
    images: allFile
      filter: { relativePath: { regex: $images } }
      sort: { fields: relativePath }
    ) {
      nodes {
        childImageSharp {
          thumb: fluid(maxWidth: 256, maxHeight: 256, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
          full: fluid(maxWidth: 1280, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;*/
