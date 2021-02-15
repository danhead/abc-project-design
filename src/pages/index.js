import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import Layout from "../layout";
import {
  Button,
  Card,
  CustomSlick,
  Grid,
  Header,
  HeaderLogo,
  Heading,
  Link,
  ReviewSummary,
  Section,
  Text,
  Tile
} from "../components";
import Calendar from "../icons/calendar.svg";
import Checkatrade from "../icons/checkatrade.svg";
import CheckCircle from "../icons/check-circle.svg";
import Hammer from "../icons/hammer.svg";
import Pound from "../icons/pound.svg";
import RatedPeople from "../icons/rated-people-full.svg";
import Smile from "../icons/smile.svg";
import Spy from "../icons/spy.svg";

const LogoItem = styled.div`
  text-align: center;
`;

const Logo = styled.span`
  display: block;
  height: 32px;

  svg {
    height: 100%;
  }
`;

export default function Index({ data }) {
  return (
    <Layout location="/">
      <Header image={data.headerImage.childImageSharp.fluid}>
        <HeaderLogo transition={true} />
      </Header>
      <Section heading="What we do">
        <Grid columns={[1, 2]}>
          <Card
            to="/services/bathrooms"
            image={data.bathroomImage.childImageSharp.fluid}
            heading={<Heading el="h3">Bathrooms</Heading>}
          >
            Fully accredited bathroom refurbishment service
          </Card>
          <Card
            to="/services/tiling"
            image={data.tilingImage.childImageSharp.fluid}
            heading={<Heading el="h3">Tiling</Heading>}
          >
            We can install many different styles
          </Card>
        </Grid>
      </Section>
      <Section variant="primary" heading="Products">
        <Grid columns={[1, 2]}>
          <div>
            <Img fluid={data.vpImage.childImageSharp.fluid} />
          </div>
          <div>
            <Text>
              Victorian Plumbing is a leading retailer of bathrooms online and
              our preferred supplier of bathroom suites.
            </Text>
            <Button to="https://www.victorianplumbing.co.uk/bathroom-suites">
              View products
            </Button>
          </div>
        </Grid>
      </Section>
      <Section heading="All of our work is guaranteed!">
        <Text align="center">
          If you are looking for a one-stop shop for your new bathroom, look no
          further. We can take care of all jobs required to complete your new
          bathroom, including plumbing, tiling and electrical works.
        </Text>
        <Grid columns={[2, 3, 6]} breakpoints={["30em", "60em"]}>
          <Tile icon={<CheckCircle />}>
            <Heading el="h3">100% Guaranteed</Heading>
            <Text size="sm">
              We guarantee all of our work. If you have any issues, we will fix
              it at no additional cost.
            </Text>
          </Tile>
          <Tile icon={<Pound />}>
            <Heading el="h3">Competitive Fees</Heading>
            <Text size="sm">
              We have affordable pricing and we strive to be as competitive as
              possible.
            </Text>
          </Tile>
          <Tile icon={<Spy />}>
            <Heading el="h3">No hidden charges</Heading>
            <Text size="sm">
              All costs will be clearly stated up front in the contact.
            </Text>
          </Tile>
          <Tile icon={<Hammer />}>
            <Heading el="h3">High Quality Craftmanship</Heading>
            <Text size="sm">
              Our skilled tradesmen have many years of experience in their craft
              and will ensure full compliance with industry standards and
              guidelines.
            </Text>
          </Tile>
          <Tile icon={<Calendar />}>
            <Heading el="h3">Transparent Deadlines</Heading>
            <Text size="sm">
              We will provide you with a start and finish date with your
              contract.
            </Text>
          </Tile>
          <Tile icon={<Smile />}>
            <Heading el="h3">Friendly Team</Heading>
            <Text size="sm">
              We will be friendly, respectful and curtious from start to finish.
            </Text>
          </Tile>
        </Grid>
      </Section>
      <Section variant="primary" heading="What our clients think of us">
        <CustomSlick>
          {data.allReview.nodes.map((review, i) => (
            <ReviewSummary key={i} review={review} />
          ))}
        </CustomSlick>
        <Heading el="h3" align="center">
          See all of our reviews
        </Heading>
        <Grid columns={[1, 3]} breakpoints={["45em"]}>
          <LogoItem>
            <Link
              to="https://www.bark.com/en/gb/company/abc-project-design-ltd/alJKp"
              aria-label="Bark"
            >
              <Logo>
                <Img fixed={data.barkImage.childImageSharp.fixed} />
              </Logo>
            </Link>
          </LogoItem>
          <LogoItem>
            <Link
              to="https://www.checkatrade.com/trades/AbcProject/reviews"
              aria-label="Checkatrade"
            >
              <Logo>
                <Checkatrade />
              </Logo>
            </Link>
          </LogoItem>
          <LogoItem>
            <Link
              to="https://www.ratedpeople.com/profile/ciprian-jitariuc#ratings"
              aria-label="Rated People"
            >
              <Logo>
                <RatedPeople />
              </Logo>
            </Link>
          </LogoItem>
        </Grid>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query {
    headerImage: file(relativePath: { eq: "banner_bathroom.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bathroomImage: file(relativePath: { eq: "bathroom.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 480, maxHeight: 320, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    tilingImage: file(relativePath: { eq: "tiling.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 480, maxHeight: 320, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    vpImage: file(relativePath: { eq: "victorian_plumbing_logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 320, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    barkImage: file(relativePath: { eq: "bark_logo.png" }) {
      childImageSharp {
        fixed(width: 106, height: 32, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    allReview {
      nodes {
        name
        title
        text
        author
        date
      }
    }
  }
`;
