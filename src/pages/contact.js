import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import {
  Button,
  Header,
  Icon,
  IconWithContent,
  InputText,
  Link,
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
    <Layout>
      <Header image={data.headerImage.childImageSharp.fluid}>
        <h1>Get in touch</h1>
      </Header>
      <Section grid={2} breakpoint="40em">
        <div>
          <Text>Get in touch with us</Text>
          <Text textStyle="italic">More info here</Text>
          <IconWithContent>
            <Icon color="dark" size="lg">
              <Phone />
            </Icon>
            <Text color="dark" size="lg">
              07123 456789
            </Text>
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
      </Section>
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
