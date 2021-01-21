import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GoogleApiWrapper, Map } from "google-maps-react";

const MapContainer = ({ children, google, height = "300px", ...other }) => (
  <Map
    style={{ height }}
    containerStyle={{ position: "relative", height }}
    google={google}
    {...other}
  >
    {children}
  </Map>
);

export default function CustomMap({ ...other }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          secrets {
            GMAPS_APIKEY
          }
        }
      }
    }
  `);

  const Wrapper = GoogleApiWrapper({
    apiKey: data.site.siteMetadata.secrets.GMAPS_APIKEY
  })(MapContainer);
  return <Wrapper {...other} />;
}
