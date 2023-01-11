import React from "react";
import { Header, Layout, Link, Section, Text } from "@components/index";
import officeImg from "../../images/office.jpg";

export default function GarageConversions() {
  return (
    <Layout title="Garage Conversions">
      <Header title="Garage Conversions" image={officeImg} light />
      <Section title="Repurpose your unused garage">
        <Text>
          Do you want to create a new room in your house? Perhaps a snug or a
          home office? Repurposing your garage could be the answer.
        </Text>
        <Text>
          Here at ABC Project Ltd, we have over 15 years experience working on
          building projects. We can supply Architects, Structural Engineers and
          Surveyors to help you fulfill your dream extension from inception to
          completion.
        </Text>
        <Text>
          We only use the best building materials on our projects and our team
          of experienced builders are all employed by ABC Project Ltd, we do not
          use any contractors.
        </Text>
        <Text>
          Please do <Link href="/contact">get in touch</Link> if you'd like to
          discuss how your garage could be converted.
        </Text>
      </Section>
    </Layout>
  );
}
