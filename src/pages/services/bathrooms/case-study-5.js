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
      location="/services/bathrooms/case-study-5"
      title="En-suite Case Study"
    >
      <Header image={images[0].full}>
        <Heading shadow="xl-white">En-suite</Heading>
        <Text size="lg">Chelmsford, Essex</Text>
      </Header>
      <Section>
        <Table>
          <tbody>
            <tr>
              <td>Key features</td>
              <td>Feature wall with alcove shelf</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>£6,400</td>
            </tr>
            <tr>
              <td>Time taken</td>
              <td>11 days</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>December 2020</td>
            </tr>
          </tbody>
        </Table>
        <Text>
          2 bedroom flat Chelmsford. An en-suite bathroom. The existing bathroom
          was 10 years old and very dated.
        </Text>
        <Text>
          Client went for fairly cheap products and tiles to keep within their
          budget.
        </Text>
        <Text>
          Service included stripping out old bathroom and disposing of all
          rubbish, supplying and fitting everything.
        </Text>
        <Text>Total price for labour and materials: £6,400.</Text>
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
      filter: { relativePath: { regex: "/bathroom-cs5(.*).jpg$/" } }
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
