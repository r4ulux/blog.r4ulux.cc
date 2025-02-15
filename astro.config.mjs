import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

export default defineConfig({
  site: "https://blog.r4ulux.cc",
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
          item.lastmod = new Date().toISOString();
        return item;
      },
    }),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
