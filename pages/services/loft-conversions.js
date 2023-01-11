import React from "react";
import { Header, Layout, Link, Section, Text } from "@components/index";
import loftImg from "../../images/loft_conversion.jpg";

export default function LoftConversions() {
  return (
    <Layout title="Loft Conversions">
      <Header title="Loft Conversions" image={loftImg} light />
      <Section title="Add an extra bedroom">
        <Text>
          Do you want to make use of your unused loft space? You could add an
          extra bedroom and possibly an en suite bathroom.
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
          discuss converting your loft space.
        </Text>
      </Section>
    </Layout>
  );
}
