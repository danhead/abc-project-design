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
    <Layout location="/services/tiling/case-study-5" title="Period Floor Tiles Case Study">
      <Header image={images[0].full}>
        <Heading shadow="xl-black">Period Floor Tiles</Heading>
        <Text size="lg">Chelsea, London</Text>
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
              <td>£5,600</td>
            </tr>
            <tr>
              <td>Time taken</td>
              <td>2 weeks</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>October 2020</td>
            </tr>
          </tbody>
        </Table>
        <Text>
          Existing floor consisted of dated tiles, client wanted to replace them
          and install under floor heating at the same time.
        </Text>
        <Text>Floor and adhesive was removed and disposed.</Text>
        <Text>
          Electric under floor heating system was installed and levelling
          compound applied.
        </Text>
        <Text>
          54m<sup>2</sup> new tiles were laid, grouted and sealed.
        </Text>
        <Text>Total price for labour and materials: £5,600.</Text>
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
      filter: { relativePath: { regex: "/tiling-cs5(.*).jpg$/" } }
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
