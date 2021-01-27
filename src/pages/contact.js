import React, { useState } from "react";
import { graphql } from "gatsby";
import { Marker } from "google-maps-react";
import Layout from "../layout";
import {
  Button,
  Grid,
  Header,
  Icon,
  IconWithContent,
  InputText,
  Link,
  Map,
  Section,
  Text
} from "../components";
import Phone from "../icons/phone.svg";
import Envelope from "../icons/envelope.svg";
import CheckCircle from "../icons/check-circle.svg";

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
      message: e.target.message.value
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
    <Layout location="/contact">
      <Header
        image={data.headerImage.childImageSharp.fluid}
        position="bottom right"
      >
        <h1>Get in touch</h1>
      </Header>
      <Section>
        <Grid columns={[1, 2]} breakpoints={["40rem"]}>
          <div>
            <Text>Get in touch with us</Text>
            <Text textStyle="italic">More info here</Text>
            <IconWithContent>
              <Icon color="dark" size="lg">
                <Phone />
              </Icon>
              <Link color="dark" size="lg" to="tel:+447123456789">
                07123 456789
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
                  <Text color="dark" size="md">
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
                  <InputText id="contact-name" name="name" label="Name" />
                  <InputText id="contact-email" name="email" label="Email" />
                  <InputText
                    id="contact-telephone"
                    name="telephone"
                    label="Telephone"
                  />
                  <InputText
                    id="contact-message"
                    name="message"
                    label="Message"
                    textArea
                  />
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
    headerImage: file(relativePath: { eq: "bathroom.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
