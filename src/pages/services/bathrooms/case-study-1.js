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
    <Layout location="/services/bathrooms/case-study-1">
      <Header image={images[0].full}>
        <Heading shadow="xl-black">Modern Bathroom</Heading>
        <Text size="lg">Maldon, Essex</Text>
      </Header>
      <Section>
        <Table>
          <tbody>
            <tr>
              <td>Key features</td>
              <td>Damp proofing, Tiling, Alcove lighting</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>£4,900</td>
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
          This medium sized bathroom in Maldon, Essex came with very few design
          problems. The old bathroom was completely stripped out to a shell. The
          bathroom showed small signs of damp which was easily rectified with a
          waterproof membrane inserted within the shower walls.
        </Text>
        <Text>
          The client decided to replace the old bath with a large walk-in
          shower. Client chose to have a false ceiling installed with spot
          lights and an alcove with electrics and lighting was fitted to give
          the bathroom a warm feeling.
        </Text>
        <Text>
          We stripped out the old bathroom and disposed of all rubbish. We
          tiled, plastered and painted the floor and walls, installed the new
          bathroom with tiling, plastering, painting and all electrical works.
        </Text>
        <Text>Total price for labour and building materials: £4,900.</Text>
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
      filter: { relativePath: { regex: "/bathroom-cs1(.*).jpg$/" } }
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
