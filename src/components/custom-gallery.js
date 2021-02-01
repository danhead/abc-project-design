import React from "react";
import Gallery from "@browniebroke/gatsby-image-gallery";
import styled from "@emotion/styled";

const Container = styled.div`
  padding: 0 15px; // Offset negative margin in Gallery
`;

export default function CustomGallery({ ...other }) {
  return (
    <Container>
      <Gallery {...other} />
    </Container>
  );
}
