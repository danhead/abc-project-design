import React, { useRef, useState } from "react";
import {
  Button,
  ContactButton,
  Grid,
  Header,
  Icon,
  IconWithText,
  InputField,
  Interrupt,
  Label,
  Layout,
  Link,
  Map,
  Section,
  Select,
  Text,
} from "@components/index";
import { getGoogleAPIKey } from "../lib/env";
import { CheckCircleSvg, EnvelopeSvg, MobileSvg, TeamSvg } from "../icons";
import bannerImg from "../images/banner_bathroom.jpg";

export default function About({ apikey }) {
  const formRef = useRef();
  const [formState, setFormState] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("submitting");
    const body = new FormData(formRef.current);
    fetch("/contact", { method: "POST", body })
      .then((res) => {
        if (res.status !== 200) {
          setFormState("error");
        } else {
          setFormState("success");
        }
      })
      .catch(() => setFormState("error"));
  };

  return (
    <Layout title="Contact us">
      <Header image={bannerImg} position="br">
        <Text size="xl" weight="bold" noMargin>
          <em>Get in</em> touch
        </Text>
      </Header>
      <Section>
        <Text size="xl">
          Are you planning some work on your house? Are you looking for
          inspiration? Our team are ready to help you through every step of the
          journey.
        </Text>
        <Grid md={2}>
          <div style={{ position: "relative" }}>
            {formState === "success" && (
              <>
                <IconWithText
                  icon={
                    <Icon color="dark" size="lg">
                      <CheckCircleSvg />
                    </Icon>
                  }
                >
                  <Text size="lg" color="dark" noMargin>
                    Thank you for contacting us!
                  </Text>
                </IconWithText>
                <Text>
                  We will get back to you in the next two working days.
                </Text>
              </>
            )}

            {formState !== "success" && (
              <>
                {formState === "submitting" && <Interrupt />}
                <IconWithText
                  icon={
                    <Icon size="lg" color="dark">
                      <EnvelopeSvg />
                    </Icon>
                  }
                >
                  <Text size="lg" color="dark" noMargin>
                    Contact us
                  </Text>
                </IconWithText>
                {formState === "error" && (
                  <>
                    <Text size="lg" color="primary" weight="bold">
                      There was an error submitting the form, please try again
                      later.
                    </Text>
                    <Text color="primary">
                      Alternatively, please feel free to email us at{" "}
                      <Link href="mailto:quotations@abcprojectdesign.com">
                        quotations@abcprojectdesign.com
                      </Link>
                      .
                    </Text>
                  </>
                )}
                <form
                  name="contact"
                  method="POST"
                  action="/contact"
                  onSubmit={(e) => handleSubmit(e, scroll)}
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  ref={formRef}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <Label htmlFor="contact-name">Name</Label>
                  <InputField id="contact-name" name="name" />
                  <Label htmlFor="contact-email">Email</Label>
                  <InputField id="contact-email" name="email" />
                  <Label htmlFor="contact-telephone">Telephone</Label>
                  <InputField id="contact-telephone" name="telephone" />
                  <Label htmlFor="contact-stage">
                    What stage of planning are you at?
                  </Label>
                  <Select
                    id="contact-stage"
                    name="stage"
                    options={[
                      { value: "", label: "" },
                      { value: "ready to hire", label: "I'm ready to hire" },
                      {
                        value: "budgeting and planning",
                        label: "I'm planning and budgeting",
                      },
                      {
                        value: "quote for insurance",
                        label: "I need a quote for insurance",
                      },
                    ]}
                  />
                  <Label htmlFor="contact-start">
                    When would you like the job to start?
                  </Label>
                  <Select
                    id="contact-start"
                    name="start"
                    options={[
                      { value: "", label: "" },
                      { value: "urgently", label: "Urgently" },
                      { value: "within 1 week", label: "Within 1 week" },
                      { value: "within 2 weeks", label: "Within 2 weeks" },
                      { value: "within 1 month", label: "Within 1 month" },
                      { value: "within 2 months", label: "Within 2 months" },
                      { value: "not sure", label: "Not sure" },
                    ]}
                  />
                  <Label htmlFor="contact-status">
                    Are you the owner of the property?
                  </Label>
                  <Select
                    id="contact-status"
                    name="status"
                    options={[
                      { value: "", label: "" },
                      { value: "owner", label: "I own the property" },
                      { value: "landlord", label: "I am the landlord" },
                      { value: "tenant", label: "I am a tenant" },
                      {
                        value: "council property",
                        label: "It's a council property",
                      },
                    ]}
                  />
                  <Label htmlFor="contact-budget">What is your budget?</Label>
                  <Select
                    id="contact-budget"
                    name="budget"
                    options={[
                      { value: "under £2,000", label: "Under £2,000" },
                      { value: "under £3,000", label: "Under £3,000" },
                      { value: "under £4,000", label: "Under £4,000" },
                      { value: "under £5,000", label: "Under £5,000" },
                      { value: "under £6,000", label: "Under £6,000" },
                      { value: "under £7,000", label: "Under £7,000" },
                      { value: "under £8,000", label: "Under £8,000" },
                      { value: "under £9,000", label: "Under £9,000" },
                      { value: "under £10,000", label: "Under £10,000" },
                      { value: "under £15,000", label: "Under £15,000" },
                      { value: "under £20,000", label: "Under £20,000" },
                    ]}
                  />
                  <Label htmlFor="contact-message">
                    Describe what needs to be done
                  </Label>
                  <InputField id="contact-message" name="message" textArea />
                  <Button type="submit">
                    {formState === "submitting" ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </>
            )}
          </div>
          <div>
            <IconWithText
              icon={
                <Icon color="dark" size="lg">
                  <TeamSvg />
                </Icon>
              }
            >
              <Text size="lg" color="dark" noMargin>
                The Team
              </Text>
            </IconWithText>
            <div>
              <Text noMargin>
                <strong>Daniel Costea</strong> &ndash; Project Director
              </Text>
              <ContactButton href="tel:+447378839358" size="sm">
                <Icon size="sm">
                  <MobileSvg />
                </Icon>
                07378839358
              </ContactButton>
              <ContactButton
                href="mailto:quotations@abcprojectdesign.com"
                size="sm"
              >
                <Icon size="sm">
                  <EnvelopeSvg />
                </Icon>
                quotations@abcprojectdesign.com
              </ContactButton>
            </div>
          </div>
        </Grid>
      </Section>
      <Map apikey={apikey} zoom={10} showMarker />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      apikey: getGoogleAPIKey(),
    },
  };
}
