import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";

const services = {
  bathrooms: 1,
  tiling: 2,
};

const padNumber = (number) => {
  if (parseInt(number) < 10) {
    return `0${number}`;
  }
  return number;
};

const getSlug = (id) => {
  const [i, t, n] = id.split("");
  if (t === "0") {
    return `case-study-${n}`;
  }
  return `case-study-${t}${n}`;
};

const getService = (id) =>
  Object.keys(services).find((key) => String(services[key]) === id.charAt(0));

export function getAllCaseStudyIds({ service }) {
  const serviceKey = services[service];
  return fs
    .readdirSync(path.join(process.cwd(), "case-studies"))
    .filter((file) => !service || file.charAt(0) === String(serviceKey))
    .map((fileName) => {
      const fullPath = path.join(process.cwd(), "case-studies", fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      const id = fileName.replace(/\.md$/, "");
      return {
        params: {
          id,
          title: matterResult.data.title,
          location: matterResult.data.location,
          image: matterResult.data.image,
          service: getService(id),
          slug: getSlug(id),
        },
      };
    });
}

export function getCaseStudyData({ service, slug }) {
  const studyNumber = padNumber(slug.replace("case-study-", ""));
  const id = `${services[service]}${studyNumber}`;
  const contents = fs.readFileSync(
    path.join(process.cwd(), "case-studies", `${id}.md`),
    "utf8"
  );
  const matterResult = matter(contents);
  const content = unified()
    .use(remarkParse)
    .use(remarkHtml)
    .processSync(matterResult.content).value;
  return {
    id,
    service,
    slug,
    content,
    ...matterResult.data,
  };
}
