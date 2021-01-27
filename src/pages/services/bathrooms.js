import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import Layout from "../../layout";
import { Grid, Header, Section, Text } from "../../components";

const FullWidth = styled.div`
  grid-column: 1 / 3;
`;

export default function Index({ data }) {
  return (
    <Layout location="/services/bathrooms">
      <Header image={data.headerImage.childImageSharp.fluid}>
        <h1>Bathrooms</h1>
      </Header>
      <Section heading="We build bespoke bathrooms">
        <Grid columns={[1, 2]} breakpoints={["40em"]}>
          <div>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              risus ultricies tristique nulla aliquet enim tortor. Laoreet id
              donec ultrices tincidunt arcu non sodales. Eu ultrices vitae
              auctor eu augue ut lectus arcu bibendum. Egestas diam in arcu
              cursus euismod quis. Suspendisse potenti nullam ac tortor vitae
              purus faucibus ornare suspendisse.
            </Text>
          </div>
          <div>
            <Img fluid={data.image1.childImageSharp.fluid} />
          </div>
          <FullWidth>
            <Text>
              Lacus sed turpis tincidunt id aliquet. Faucibus ornare suspendisse
              sed nisi lacus sed viverra tellus in. In hac habitasse platea
              dictumst. Dolor sit amet consectetur adipiscing. Facilisis magna
              etiam tempor orci eu lobortis elementum. Sed enim ut sem viverra
              aliquet. Leo vel fringilla est ullamcorper eget nulla facilisi
              etiam. Sem integer vitae justo eget. Vitae elementum curabitur
              vitae nunc sed velit dignissim sodales. Felis imperdiet proin
              fermentum leo vel orci porta non. Donec et odio pellentesque diam
              volutpat commodo sed egestas. Cursus in hac habitasse platea
              dictumst quisque sagittis. Proin fermentum leo vel orci porta non
              pulvinar.
            </Text>
          </FullWidth>
          <div>
            <Img fluid={data.image2.childImageSharp.fluid} />
          </div>
          <div>
            <Text>
              Arcu dictum varius duis at consectetur. Blandit volutpat maecenas
              volutpat blandit. Varius morbi enim nunc faucibus a pellentesque
              sit amet. Mattis pellentesque id nibh tortor id aliquet lectus.
              Venenatis a condimentum vitae sapien pellentesque habitant morbi
              tristique.
            </Text>
          </div>
          <FullWidth>
            <Text>
              Commodo viverra maecenas accumsan lacus vel facilisis volutpat est
              velit. Consequat nisl vel pretium lectus quam id leo in vitae.
              Phasellus faucibus scelerisque eleifend donec. Ultricies mi quis
              hendrerit dolor magna eget est lorem ipsum. Vitae tempus quam
              pellentesque nec nam aliquam sem. Nulla at volutpat diam ut
              venenatis tellus in metus vulputate. Faucibus in ornare quam
              viverra. Neque ornare aenean euismod elementum nisi quis eleifend
              quam adipiscing. Egestas maecenas pharetra convallis posuere morbi
              leo. Proin nibh nisl condimentum id venenatis a condimentum vitae
              sapien.
            </Text>
            <Text>
              Phasellus egestas tellus rutrum tellus pellentesque eu. Facilisi
              nullam vehicula ipsum a. Eget lorem dolor sed viverra. Nulla
              facilisi nullam vehicula ipsum a arcu. Orci a scelerisque purus
              semper. Sed tempus urna et pharetra pharetra. Ac turpis egestas
              integer eget aliquet. Dui id ornare arcu odio. At volutpat diam ut
              venenatis tellus in metus vulputate. Eu nisl nunc mi ipsum
              faucibus vitae aliquet nec. Pharetra vel turpis nunc eget lorem.
              Duis tristique sollicitudin nibh sit amet. Id nibh tortor id
              aliquet lectus. Sed vulputate mi sit amet mauris commodo. Amet est
              placerat in egestas. Tincidunt id aliquet risus feugiat in ante
              metus dictum at. Vitae auctor eu augue ut lectus arcu bibendum at
              varius. Viverra justo nec ultrices dui sapien eget. Nisl
              condimentum id venenatis a. Nec dui nunc mattis enim ut tellus.
            </Text>
          </FullWidth>
        </Grid>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "bathroom2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image1: file(relativePath: { eq: "bathroom3.png" }) {
      childImageSharp {
        fluid(maxWidth: 640, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    image2: file(relativePath: { eq: "bathroom4.png" }) {
      childImageSharp {
        fluid(maxWidth: 640, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
