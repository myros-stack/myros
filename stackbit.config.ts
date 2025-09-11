import type { Config } from "@netlify/visual-editor";

const config: Config = {
  name: "myros-site",
  contentSources: [
    {
      name: "git",
      type: "git",
      rootPath: "content"
    }
  ],
  models: [
    {
      name: "home",
      type: "data",
      filePath: "content/home.json",
      fields: [
        { name: "title", type: "string", label: "Page title" },
        { name: "subtitle", type: "string", label: "Subtitle", multiline: true },
        { name: "ctaLabel", type: "string", label: "CTA label" },
        { name: "ctaUrl", type: "string", label: "CTA link" }
      ]
    }
  ],
  pages: [
    { urlPath: "/", model: "home" }
  ]
};

export default config;



add stackbit.config.ts for visual editor
