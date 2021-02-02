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
  Label,
  Link,
  Map,
  Section,
  Select,
  Text
} from "../components";
import CheckCircle from "../icons/check-circle.svg";
import Envelope from "../icons/envelope.svg";
import Phone from "../icons/phone.svg";
import Team from "../icons/team.svg";

const encodeData = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

export default function Index({ data }) {
  const [submitted, setSubmitted] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const body = encodeData({
      "form-name": "contact",
      name: e.target.name.value,
      email: e.target.email.value,
      telephone: e.target.telephone.value,
      start: e.target.start.value,
      stage: e.target.stage.value,
      status: e.target.status.value,
      message: e.target.message.value,
      file: e.target.file.value
    });
    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body
    })
      .then(res => {
        if (res.status !== 200) {
          console.log("error", res);
        } else {
          setSubmitted(true);
        }
      })
      .catch(error => console.log(error));
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
        <Grid columns={[1, 2]} breakpoints={["40rem"]}>
          <div>
            <IconWithContent>
              <Icon color="dark" size="lg">
                <Team />
              </Icon>
              <Text color="dark" size="lg">
                The team
              </Text>
            </IconWithContent>
            <ul>
              <li>
                <Text>
                  <Link to="mailto:quotations@abcprojectdesign.com">
                    Nicholas Day
                  </Link>{" "}
                  &ndash; <em>Sales and Marketing Manager</em>
                </Text>
              </li>
              <li>
                <Text>
                  <Link to="mailto:daniel.costea@abcprojectdesign.com">
                    Daniel Costea
                  </Link>{" "}
                  &ndash; <em>Project Director</em>
                </Text>
              </li>
              <li>
                <Text>
                  <Link to="mailto:maria.antonia@abcprojectdesign.com">
                    Maria Antonia
                  </Link>{" "}
                  &ndash; <em>Design and Consultation Manager</em>
                </Text>
              </li>
              <li>
                <Text>
                  <Link to="mailto:harry.jackson@abcprojectdesign.com">
                    Harry Jackson
                  </Link>{" "}
                  &ndash; <em>After Sales Manager</em>
                </Text>
              </li>
            </ul>
            <IconWithContent>
              <Icon color="dark" size="lg">
                <Phone />
              </Icon>
              <Link color="dark" size="lg" to="tel:+447539051512" noDecoration>
                07539 051512
              </Link>
            </IconWithContent>
            <IconWithContent>
              <Icon color="dark" size="lg">
                <Phone />
              </Icon>
              <Link color="dark" size="lg" to="tel:+441708938455" noDecoration>
                01708 938455
              </Link>
            </IconWithContent>
            <IconWithContent>
              <Icon color="dark" size="lg">
                <Envelope />
              </Icon>
              <Link
                color="dark"
                size="md"
                to="mailto:quotations@abcprojectdesign.com"
                noDecoration
              >
                quotations@abcprojectdesign.com
              </Link>
            </IconWithContent>
          </div>
          <div>
            {submitted ? (
              <IconWithContent>
                <Icon color="dark" size="lg">
                  <CheckCircle />
                </Icon>
                <>
                  <Text color="dark" size="lg">
                    Thank you for contacting us
                  </Text>
                  <Text color="dark" size="lg">
                    We will be in touch shortly
                  </Text>
                </>
              </IconWithContent>
            ) : (
              <>
                <IconWithContent>
                  <Icon color="dark" size="lg">
                    <Envelope />
                  </Icon>
                  <Text color="dark" size="lg">
                    Contact us
                  </Text>
                </IconWithContent>
                <form
                  name="contact"
                  method="POST"
                  action="/contact"
                  onSubmit={handleSubmit}
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
                  <Label htmlFor="contact-start">
                    When would you like to start?
                  </Label>
                  <Select
                    id="contact-start"
                    name="start"
                    options={[
                      { value: "urgently", label: "Urgently" },
                      { value: "1week", label: "Within 1 week" },
                      { value: "2weeks", label: "Within 2 weeks" },
                      { value: "1month", label: "Within 1 month" },
                      { value: "2months", label: "Within 2 months" },
                      { value: "unsure", label: "Not sure" }
                    ]}
                  />
                  <Label htmlFor="contact-stage">
                    What stage of planning are you at?
                  </Label>
                  <Select
                    id="contact-stage"
                    name="stage"
                    options={[
                      { value: "ready", label: "I'm ready to hire" },
                      {
                        value: "budgeting",
                        label: "I'm planning and budgeting"
                      },
                      {
                        value: "insurance",
                        label: "I need a quote for insurance"
                      }
                    ]}
                  />
                  <Label htmlFor="contact-status">
                    Are you the owner of the property?
                  </Label>
                  <Select
                    id="contact-status"
                    name="status"
                    options={[
                      { value: "owner", label: "I own the property" },
                      { value: "landlord", label: "I am the landlord" },
                      { value: "tenant", label: "I am a tenant" },
                      { value: "council", label: "It's a council property" }
                    ]}
                  />
                  <Label htmlFor="contact-message">
                    Describe what needs to be done
                  </Label>
                  <InputText id="contact-message" name="message" textArea />
                  <Label htmlFor="contact-file">Add a photo</Label>
                  <input id="contact-file" name="file" type="file" />
                  <Button type="submit">Submit</Button>
                </form>
              </>
            )}
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
  }
`;
