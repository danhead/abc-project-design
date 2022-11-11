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
import bannerImg from "../../images/banner_bathroom.jpg";

export default function Bathrooms({ caseStudies }) {
  return (
    <Layout title="Bathrooms">
      <Header title="Bathrooms" image={bannerImg} />
      <Section title="We build bespoke bathrooms">
        <Text>
          It's more than likely the most important room in your house and one of
          the biggest investments you will ever make. We offer a professional
          design service and an expert installation service. All our tradesman
          are vetted and handpicked based on their skills within their chosen
          fields.
        </Text>
        <Text>
          With over 30 years experience in bathroom installation we will help
          you choose the perfect bathroom for your home. We can complete your
          whole bathroom installation including electrics, plastering, plumbing
          and paint and decorating.
        </Text>
        <Text>
          If you want a high quality bathroom you have come to the right place.
        </Text>
        <Text>
          We provide an initial consultation followed by a competitive quote.
        </Text>
        <Text>
          To ensure complete satisfaction we insist on managing the entire
          installation process. All of our quotations are for a fully inclusive
          installation service, one price to deliver a fully functioning and
          completed bathroom.
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
              href={`/services/bathrooms/${study.params.slug}`}
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
  const caseStudies = getAllCaseStudyIds({ service: "bathrooms" });

  return {
    props: { caseStudies },
  };
};
