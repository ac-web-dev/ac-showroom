import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "AC Showroom",
  description: "Creator profiles and content showcases for Assetto Corsa.",
  base: "/ac-showroom/",
  markdown: {
    image: {
      lazyLoading: true,
    },
    theme: { light: "vitesse-light", dark: "vitesse-dark" },
    lineNumbers: true,
  },
  themeConfig: {
    nav: [
      { text: "Showcase", link: "/showcase/" },
      { text: "Creators", link: "/creators/" },
      {
        text: "More",
        items: [
          { text: "About the Project", link: "/about/overview" },
          {
            text: "Contribute",
            link: "https://github.com/ac-web-dev/ac-showroom",
          },
        ],
      },
    ],
    sidebar: {
      "/creators/": [
        {
          text: "Creators & Modders",
          collapsed: false,
          items: [{ text: "Foo Bar", link: "/creators/foo-bar" }],
        },
      ],
      "/about/": [
        { text: "Overview", link: "/about/overview" },
        { text: "Meet the Team", link: "/about/contributors" },
      ],
    },
    outline: {
      level: [2, 3],
      label: "On this page",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ac-web-dev/ac-showroom",
      },
      // { icon: "discord", link: "" },
    ],
    footer: {
      message: "Built with VitePress.",
      copyright: "Copyright © 2026-present AWD",
    },
    editLink: {
      pattern: "https://github.com/ac-web-dev/ac-showroom/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    lastUpdated: {
      text: "Last Updated",
    },
    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },
  },
});
