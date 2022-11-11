import React, { useState } from "react";
import {
  CaseStudy,
  Content,
  GalleryOverlay,
  GalleryThumb,
  Grid,
  Header,
  Heading,
  Layout,
  Section,
  Text,
} from "@components/index";
import { getAllCaseStudyIds, getCaseStudyData } from "../../../lib/case-study";

export default function CaseStudyTemplate({ caseStudyData }) {
  const [openImage, setOpenImage] = useState(-1);
  const images = Array.from(new Array(caseStudyData.images)).map((_, i) => ({
    thumb: `/case-studies/${caseStudyData.id}/thumbs/${i}.jpg`,
    src: `/case-studies/${caseStudyData.id}/${i}.jpg`,
  }));
  const handleThumbClick = (i) => setOpenImage(i);
  const handlePrevClick = () =>
    setOpenImage(openImage === 0 ? images.length - 1 : openImage - 1);
  const handleNextClick = () =>
    setOpenImage(openImage === images.length - 1 ? 0 : openImage + 1);
  return (
    <Layout title={caseStudyData.title}>
      <Header
        image={`/case-studies/${caseStudyData.id}/${caseStudyData.image}.jpg`}
      >
        <Heading>{caseStudyData.title}</Heading>
        <Text>{caseStudyData.location}</Text>
      </Header>
      <CaseStudy data={caseStudyData} />
      <Section>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: caseStudyData.content }} />
        </Content>
      </Section>
      <Section variant="secondary" title="Gallery">
        <Grid d={2} sm={3} md={4}>
          {images.map((img, i) => (
            <GalleryThumb
              key={img.thumb}
              image={img.thumb}
              label={`Show full picture from ${caseStudyData.title}`}
              onClick={() => handleThumbClick(i)}
            />
          ))}
        </Grid>
        {openImage > -1 && (
          <GalleryOverlay
            onClose={() => setOpenImage(-1)}
            onNext={handleNextClick}
            onPrev={handlePrevClick}
            image={images[openImage].src}
            desc={`Picture from ${caseStudyData.title}`}
          />
        )}
      </Section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllCaseStudyIds({});
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const caseStudyData = getCaseStudyData({ ...params });
  return {
    props: {
      caseStudyData,
    },
  };
}
