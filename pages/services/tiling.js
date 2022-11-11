import React from "react";
import {
  Card,
  Grid,
  Header,
  Heading,
  Layout,
  Section,
  Text,
} from "@components/index";
import { getAllCaseStudyIds } from "../../lib/case-study";
import tilingImg from "../../images/tiling.jpg";

export default function Tiling({ caseStudies }) {
  return (
    <Layout title="Tiling">
      <Header title="Tiling" image={tilingImg} light />
      <Section title="We specialise in floor tiling">
        <Text>
          We can install both floor and wall tiles, including ceramic, natural
          stone, marble, quartz, porcelain and mosaic tiles.
        </Text>
        <Text>
          Our elite team of 3 stonemasons and 3 tilers has a combined total of
          112 years of experience within the industry.
        </Text>
      </Section>
      <Section variant="secondary" title="Case studies">
        <Grid sm={2} md={3}>
          {caseStudies.map((study) => (
            <Card
              heading={
                <Heading el="h3" size="md">
                  {study.params.title}
                </Heading>
              }
              image={`/case-studies/${study.params.id}/thumbs/${study.params.image}.jpg`}
              href={`/services/tiling/${study.params.slug}`}
              key={study.params.id}
            >
              {study.params.location}
            </Card>
          ))}
        </Grid>
      </Section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const caseStudies = getAllCaseStudyIds({ service: "tiling" });

  return {
    props: { caseStudies },
  };
};
