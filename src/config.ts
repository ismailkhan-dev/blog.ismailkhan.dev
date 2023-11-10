import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.ismailkhan.dev/",
  author: "Ismail Khan",
  desc: "A minimalist tech blog on programming.",
  title: "Ismail Khan | Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"];

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/ismailkhan-dev",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/iikhan/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:ismailkhan.dev@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/viz1er",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
];
