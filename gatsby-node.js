const { resolve } = require("path");
const caseStudies = require("./src/data/case-studies.json");

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  Object.keys(caseStudies).forEach(key => {
    caseStudies[key].forEach((cs, i) => {
      const {
        title,
        titleColor,
        location,
        image,
        key_features,
        price,
        time_taken,
        date,
        content
      } = cs;
      const node = {
        path: `/services/${key}/case-study-${i + 1}`,
        type: key,
        title,
        titleColor,
        location,
        image,
        key_features,
        price,
        time_taken,
        date,
        content,
        id: createNodeId(`${key}-${i + 1}`),
        internal: {
          type: "CaseStudy",
          contentDigest: createContentDigest(cs)
        }
      };
      actions.createNode(node);
    });
  });
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const template = resolve(__dirname, `src/case-study.js`);
  Object.keys(caseStudies).forEach(key => {
    caseStudies[key].forEach((cs, i) => {
      const path = `/services/${key}/case-study-${i + 1}`;
      createPage({
        path,
        component: template,
        context: {
          pagePath: path,
          images: `/${key}-cs${i + 1}(.*).jpg$/`
        }
      });
    });
  });
};
