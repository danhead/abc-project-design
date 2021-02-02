import React from "react";
import Layout from "../layout";
import { Header, Link, Map, Section, Text } from "../components";
import { Polyline } from "google-maps-react";

const triangleCoords = [
  { lat: 52.253, lng: 0.109 }, // Cambridge
  { lat: 52.095, lng: 1.144 }, // Ipswich
  { lat: 51.975, lng: 1.379 }, // Felixtowe
  { lat: 51.782, lng: 1.151 }, // Clacton
  { lat: 51.755, lng: 0.975 }, // Blackwater
  { lat: 51.612, lng: 0.987 }, // Courtsend
  { lat: 51.453, lng: 0.733 }, // Grain
  { lat: 51.228, lng: 0.554 }, // Maidstone
  { lat: 51.258, lng: -0.087 }, // Caterham
  { lat: 51.436, lng: -0.361 }, // Twickenham
  { lat: 51.611, lng: -0.45 }, // Northwood
  { lat: 51.737, lng: -0.399 }, // St Albans
  { lat: 51.992, lng: -0.281 }, // Letchworth
  { lat: 52.253, lng: 0.109 } // Cambridge
];

export default function Index() {
  return (
    <Layout location="/area-covered">
      <Header
        map={
          <Map
            initialCenter={{
              lat: 51.765,
              lng: 0.022
            }}
            zoom={7}
            mapTypeContol={false}
            scaleControl={false}
            streetViewControl={false}
            rotateControl={false}
            fullscreenControl={false}
          >
            <Polyline
              path={triangleCoords}
              strokeColor="var(--theme-color-primary)"
              fillColor="#ff0000"
              strokeOpacity={0.8}
              strokeWeight={2}
            />
          </Map>
        }
        avoidNav
      ></Header>
      <Section heading="Area covered">
        <Text>
          Our services are available, in London, Hertfordshire, Cambridgeshire,
          Essex and Kent.
        </Text>
        <Text>
          The area highlighted in the map is a rough guideline, if you are just
          outside the area then please do feel free to{" "}
          <Link to="/contact">get in touch</Link>.
        </Text>
      </Section>
    </Layout>
  );
}
