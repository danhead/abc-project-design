import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../layout";
import {
  CustomGallery,
  Header,
  Heading,
  Section,
  Table,
  Text
} from "../../../components";

export default function Index({ data }) {
  const images = data.images.nodes.map(node => node.childImageSharp);
  return (
    <Layout
      location="/services/bathrooms/case-study-4"
      title="Period with a Modern Twist Case Study"
    >
      <Header image={images[0].full}>
        <Heading shadow="xl-white">Period with a Modern Twist</Heading>
        <Text size="lg">Hampstead, London</Text>
      </Header>
      <Section>
        <Table>
          <tbody>
            <tr>
              <td>Key features</td>
              <td>Period features with modern twist</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>£7,800</td>
            </tr>
            <tr>
              <td>Time taken</td>
              <td>3 weeks</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>October 2020</td>
            </tr>
          </tbody>
        </Table>
        <Text>
          A complete refurbishment in a three bedroom house in Hampstead,
          London.
        </Text>
        <Text>
          Existing bathroom was more than 20 years old. We completely stripped
          out the old bathroom and disposed of all rubbish.
        </Text>
        <Text>Client went for a Victorian style with a modern twist</Text>
        <Text>Total price for labour and materials: £7,800.</Text>
      </Section>
      <Section heading="Gallery" variant="primary">
        <CustomGallery images={images} />
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query {
    images: allFile(
      filter: { relativePath: { regex: "/bathroom-cs4(.*).jpg$/" } }
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
