import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "oucn5h9j",
  dataset: "production",
  apiVersion: "2021-05-29",
  useCdn: true,
});
