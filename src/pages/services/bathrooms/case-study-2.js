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
    <Layout location="/services/bathrooms/case-study-2" title="Compact Bathroom Case Study">
      <Header image={images[0].full}>
        <Heading shadow="xl-black">Compact Bathroom</Heading>
        <Text size="lg">Hackney, London</Text>
      </Header>
      <Section>
        <Table>
          <tbody>
            <tr>
              <td>Key features</td>
              <td>Damp proofing, Recessed shower mixer</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>£4,000</td>
            </tr>
            <tr>
              <td>Time taken</td>
              <td>10 days</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>November 2020</td>
            </tr>
          </tbody>
        </Table>
        <Text>Very small bathroom in a block of flats In Hackney, E9.</Text>
        <Text>
          Existing bathroom was extremely old. We stripped the bathroom back to
          the shell and addressed damp issues.
        </Text>
        <Text>
          Client went with our suggestion of using two different wall tiles.
        </Text>
        <Text>
          Shower mixer was inserted in to wall to give the bathroom a modern,
          minimal feel.
        </Text>
        <Text>Bathroom went from old and dated to fresh and modern.</Text>
        <Text>Total price for labour and materials: £4,000.</Text>
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
      filter: { relativePath: { regex: "/bathroom-cs2(.*).jpg$/" } }
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
