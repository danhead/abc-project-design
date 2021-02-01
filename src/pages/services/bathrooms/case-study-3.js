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
    <Layout location="/services/bathrooms/case-study-3">
      <Header image={images[0].full}>
        <Heading shadow="xl-black">Modest Shower Room</Heading>
        <Text size="lg">Location unknown</Text>
      </Header>
      <Section>
        <Table>
          <tbody>
            <tr>
              <td>Key features</td>
              <td>Accessible shower, False ceiling with spot lights</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>£4,300</td>
            </tr>
            <tr>
              <td>Time taken</td>
              <td>X days</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>Jan 2099</td>
            </tr>
          </tbody>
        </Table>
        <Text>
          Medium sized bathroom for an elderly lady who had trouble getting in
          and out of the bath.
        </Text>
        <Text>
          Complete refurbishment, bathroom was 20 years old and showed signs of
          damp. Completely stripped out old bathroom, disposed of all rubbish
          and lefy to air out with windows open for 3 days
        </Text>
        <Text>
          New bathroom installed with a fresh look and easy to maintain. 4 spot
          lights installed in false ceiling.
        </Text>
        <Text>Total price for labour and materials: £4,300.</Text>
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
      filter: { relativePath: { regex: "/bathroom-cs3(.*).jpg$/" } }
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
