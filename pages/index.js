import React from "react";
import Image from "next/image";
import {
  Button,
  Layout,
  Header,
  HeaderLogo,
  Heading,
  Section,
  Card,
  Grid,
  Text,
  Tile,
  Icon,
  Review,
} from "@components/index";
import {
  CheckCircleSvg,
  CalendarSvg,
  HammerSvg,
  PoundSvg,
  SmileSvg,
  SpySvg,
} from "../icons";
import bannerImg from "../images/banner_bathroom.jpg";
import bathroomImg from "../images/bathroom.jpg";
import tilingImg from "../images/tiling.jpg";
import victorianImg from "../images/victorian_plumbing_logo.png";

export default function Home() {
  return (
    <Layout>
      <Header image={bannerImg}>
        <HeaderLogo transition />
      </Header>
      <Section title="What we do">
        <Grid sm={2}>
          <Card
            heading={
              <Heading el="h3" size="md">
                Bathrooms
              </Heading>
            }
            image={bathroomImg}
            href="/services/bathrooms"
          >
            Fully accredited bathroom refurbishment service
          </Card>
          <Card
            heading={
              <Heading el="h3" size="md">
                Tiling
              </Heading>
            }
            image={tilingImg}
            href="/services/tiling"
          >
            We can install many different styles
          </Card>
        </Grid>
      </Section>
      <Section variant="secondary" title="Products">
        <Grid sm={2}>
          <div>
            <Image src={victorianImg} width={320} height={98} />
          </div>
          <div>
            <Text>
              Victorian Plumbing is a leading retailer of bathrooms online and
              our preferred supplier of bathroom suites.
            </Text>
            <Button href="https://www.victorianplumbing.co.uk/bathroom-suites">
              View products
            </Button>
          </div>
        </Grid>
      </Section>
      <Section title="All of our work is guaranteed!">
        <Text>
          If you are looking for a one-stop shop for your new bathroom, look no
          further. We can take care of all jobs required to complete your new
          bathroom, including plumbing, tiling and electrical works.
        </Text>
        <Grid sm={2} md={3}>
          <Tile>
            <Icon size="xl">
              <CheckCircleSvg />
            </Icon>
            <Heading el="h3" size="lg">
              100% Guaranteed
            </Heading>
            <Text>
              We guarantee all of our work. If you have any issues, we will fix
              it at no additional cost.
            </Text>
          </Tile>
          <Tile>
            <Icon size="xl">
              <PoundSvg />
            </Icon>
            <Heading el="h3" size="lg">
              Competitive Fees
            </Heading>
            <Text>
              We have affordable pricing and we strive to be as competitive as
              possible.
            </Text>
          </Tile>
          <Tile>
            <Icon size="xl">
              <SpySvg />
            </Icon>
            <Heading el="h3" size="lg">
              No hidden charges
            </Heading>
            <Text>
              All costs will be clearly stated up front in the contact.
            </Text>
          </Tile>
          <Tile>
            <Icon size="xl">
              <HammerSvg />
            </Icon>
            <Heading el="h3" size="lg">
              High Quality Craftmanship
            </Heading>
            <Text>
              Our skilled tradesmen have many years of experience in their craft
              and will ensure full compliance with industry standards and
              guidelines.
            </Text>
          </Tile>
          <Tile>
            <Icon size="xl">
              <CalendarSvg />
            </Icon>
            <Heading el="h3" size="lg">
              Transparent Deadlines
            </Heading>
            <Text>
              We will provide you with a start and finish date with your
              contract.
            </Text>
          </Tile>
          <Tile>
            <Icon size="xl">
              <SmileSvg />
            </Icon>
            <Heading el="h3" size="lg">
              Friendly Team
            </Heading>
            <Text>
              We will be friendly, respectful and curtious from start to finish.
            </Text>
          </Tile>
        </Grid>
      </Section>
      <Section variant="secondary" title="What our clients think of us">
        <Review
          type="Checkatrade"
          title="Full redecoration schedule bungalow"
          author="Mrs Ford"
          date="February 2021"
        >
          <Text italic>
            I have pleasure in providing this reference for Daniel. For the last
            7 weeks he has been working on the bungalow belonging to my aged
            uncle for whom I have Power of Attorney, to prepare the property,
            which was formerly a small holding, for the market. The house had to
            be cleared,of furniture, repairs carried out with a full
            redecoration schedule. In addition there were numerous outbuildings
            to clear and a 4 acre site, which was completely overgrown, to be
            brought up to standard. It was a huge undertaking but Daniel and his
            team took it on willingly.
          </Text>
        </Review>
      </Section>
    </Layout>
  );
}
