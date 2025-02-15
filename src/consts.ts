import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "r4ulux blog",
  EMAIL: "admin@r4ulux.cc",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
  NUM_ABOUT_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "About me.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "X",
    HREF: "https://x.com/",
  },
  { 
    NAME: "Github",
    HREF: "https://github.com/r4ulux"
  }
];
