import React, { useState } from "react";
import { graphql } from "gatsby";
import { Marker } from "google-maps-react";
import Layout from "../layout";
import {
  Button,
  Grid,
  Header,
  Heading,
  Icon,
  IconWithContent,
  InputText,
  Interrupt,
  Label,
  Link,
  Map,
  Section,
  Select,
  Team,
  Text
} from "../components";
import CheckCircleIcon from "../icons/check-circle.svg";
import EnvelopeIcon from "../icons/envelope.svg";
import PhoneIcon from "../icons/phone.svg";
import TeamIcon from "../icons/team.svg";

const encode = data => {
  const formData = new FormData();
  Object.keys(data).forEach(k => {
    formData.append(k, data[k]);
  });
  return formData;
};

export default function Index({ data }) {
  const [formState, setFormState] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    setFormState("submitting");
    const body = encode({
      "form-name": "contact",
      name: e.target.name.value,
      email: e.target.email.value,
      telephone: e.target.telephone.value,
      start: e.target.start.value,
      stage: e.target.stage.value,
      status: e.target.status.value,
      budget: e.target.budget.value,
      message: e.target.message.value
    });
    fetch("/contact", { method: "POST", body })
      .then(res => {
        if (res.status !== 200) {
          setFormState("error");
        } else {
          setFormState("success");
        }
      })
      .catch(() => setFormState("error"));
  };
  return (
    <Layout location="/contact" title="Contact us">
      <Header
        image={data.headerImage.childImageSharp.fluid}
        position="bottom right"
      >
        <Heading shadow="xl-white">
          <em>Get in</em> touch
        </Heading>
      </Header>
      <Section>
        <Text size="xl">
          Are you planning a new bathroom? Are you looking for inspiration? Our
          team are ready to help you through every step of the journey.
        </Text>
        <Text>
          A typical bathroom refurbishment starts from £3,500, increasing up to
          £20,000. Our quotes include stripping out the old bathroom, disposal
          of rubbish, fitting the new bathroom, labour and building materials
          for tiling, plastering, painting and decorating. It does not include
          bathroom suites or tiles.
        </Text>
        <Grid columns={[1, 2]} breakpoints={["40em"]} verticalSeparator="40em">
          <div style={{ position: "relative" }}>
            {formState === "success" && (
              <>
                <IconWithContent>
                  <Icon color="dark" size="lg">
                    <CheckCircleIcon />
                  </Icon>
                  <Text color="dark" size="lg">
                    Thank you for contacting us!
                  </Text>
                </IconWithContent>
                <Text>
                  We will get back to you in the next two working days.
                </Text>
              </>
            )}
            {formState !== "success" && (
              <>
                {formState === "submitting" && <Interrupt />}
                <IconWithContent>
                  <Icon color="dark" size="lg">
                    <EnvelopeIcon />
                  </Icon>
                  <Text color="dark" size="lg">
                    Contact us
                  </Text>
                </IconWithContent>
                {formState === "error" && (
                  <>
                    <Text size="lg" color="primary" weight="bold">
                      There was an error submitting the form, please try again
                      later.
                    </Text>
                    <Text color="primary">
                      Alternatively, please feel free to email us at{" "}
                      <Link to="mailto:quotations@abcprojectdesign.com">
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
                  onSubmit={e => handleSubmit(e, scroll)}
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <Label htmlFor="contact-name">Name</Label>
                  <InputText id="contact-name" name="name" />
                  <Label htmlFor="contact-email">Email</Label>
                  <InputText id="contact-email" name="email" />
                  <Label htmlFor="contact-telephone">Telephone</Label>
                  <InputText id="contact-telephone" name="telephone" />
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
                        label: "I'm planning and budgeting"
                      },
                      {
                        value: "quote for insurance",
                        label: "I need a quote for insurance"
                      }
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
                      { value: "not sure", label: "Not sure" }
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
                        label: "It's a council property"
                      }
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
                      { value: "under £20,000", label: "Under £20,000" }
                    ]}
                  />
                  <Label htmlFor="contact-message">
                    Describe what needs to be done
                  </Label>
                  <InputText id="contact-message" name="message" textArea />
                  <Button type="submit" float="right">
                    {formState === "submitting" ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </>
            )}
          </div>
          <div>
            <IconWithContent>
              <Icon color="dark" size="lg">
                <TeamIcon />
              </Icon>
              <Text color="dark" size="lg">
                The team
              </Text>
            </IconWithContent>
            <Team team={data.allPerson.nodes} />
          </div>
        </Grid>
      </Section>
      <Map
        initialCenter={{
          lat: 51.5614,
          lng: 0.1071
        }}
        zoom={10}
        scrollwheel={false}
        draggable={false}
        keyboardShortcuts={false}
        disableDoubleClickZoom={false}
        zoomControl={false}
        mapTypeContol={false}
        scaleControl={false}
        streetViewControl={false}
        panControl={false}
        rotateControl={false}
        fullscreenControl={false}
      >
        <Marker title={"ABC Project Design Ltd"} />
      </Map>
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
    allPerson {
      nodes {
        name
        email
        phone
        altPhone
        title
      }
    }
  }
`;
