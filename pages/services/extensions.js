import React from "react";
import { Header, Layout, Link, Section, Text } from "@components/index";
import extensionImg from "../../images/extension.jpg";

export default function Extensions() {
  return (
    <Layout title="Extensions">
      <Header title="Extensions" image={extensionImg} />
      <Section title="Build a house extension">
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
          discuss how we could help you realise your dream extension!
        </Text>
      </Section>
    </Layout>
  );
}
