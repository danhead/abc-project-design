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
    <Layout location="/services/tiling/case-study-1">
      <Header image={images[3].full}>
        <Heading shadow="xl-black">New Extension</Heading>
        <Text size="lg">Eltham, London</Text>
      </Header>
      <Section>
        <Table>
          <tbody>
            <tr>
              <td>Key features</td>
              <td>Under floor heating</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>£2,400</td>
            </tr>
            <tr>
              <td>Time taken</td>
              <td>4 days</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>November 2020</td>
            </tr>
          </tbody>
        </Table>
        <Text>
          20m<sup>2</sup> of floor tiles laid in a new extension.
        </Text>
        <Text>
          We fitted under floor heating before laying self levelling compound.
        </Text>
        <Text>The tiles were also grouted and sealed.</Text>
        <Text>The project took 4 days to complete.</Text>
        <Text>Total price for labour and materials: £2,400.</Text>
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
      filter: { relativePath: { regex: "/tiling-cs1(.*).jpg$/" } }
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
