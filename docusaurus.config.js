// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;
const math = require("remark-math");
const katex = require("rehype-katex");
const remoteContent = require("./configs/remoteContent");

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [...remoteContent],
  i18n: {
    defaultLocale: "en",
    locales: [
      // "de",
      "en",
      // "es",
      // "fa",
      // "fr",
      // "hi",
      // "it",
      // "ja",
      // "ko",
      // "ru",
      // "tu",
      // "vi",
      // "zh-CN",
      // "zh-TW",
    ],
    path: "i18n",
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
        path: "en",
      },
      fr: {
        label: "French",
        direction: "ltr",
        htmlLang: "fr-FR",
        calendar: "gregory",
        path: "fr",
      },
      es: {
        label: "Español",
        direction: "ltr",
        htmlLang: "es-ES",
        calendar: "gregory",
        path: "es",
      },
      ja: {
        label: "Japanese",
        direction: "ltr",
        htmlLang: "ja-JP",
        calendar: "gregory",
        path: "ja",
      },
      ko: {
        label: "Korean",
        direction: "ltr",
        htmlLang: "ko-KR",
        calendar: "gregory",
        path: "ko",
      },
      ru: {
        label: "Russian",
        direction: "ltr",
        htmlLang: "ru-RU",
        calendar: "gregory",
        path: "ru",
      },
      "zh-CN": {
        label: "Chinese (Simplified)",
        direction: "ltr",
        htmlLang: "zh-CN",
        calendar: "gregory",
        path: "zh-CN",
      },
      "zh-TW": {
        label: "Chinese (Traditional)",
        direction: "ltr",
        htmlLang: "zh-TW",
        calendar: "gregory",
        path: "zh-TW",
      },
      vi: {
        label: "Vietnamese",
        direction: "ltr",
        htmlLang: "vi-VI",
        calendar: "gregory",
        path: "vi",
      },
      tu: {
        label: "Turkish",
        direction: "ltr",
        htmlLang: "tu-TU",
        calendar: "gregory",
        path: "tu",
      },
      it: {
        label: "Italian",
        direction: "ltr",
        htmlLang: "it-IT",
        calendar: "gregory",
        path: "it",
      },
      de: {
        label: "German",
        direction: "ltr",
        htmlLang: "de-DE",
        calendar: "gregory",
        path: "de",
      },
      fa: {
        label: "Persian",
        direction: "ltr",
        htmlLang: "fa-FA",
        calendar: "gregory",
        path: "fa",
      },
      hi: {
        label: "Hindi",
        direction: "ltr",
        htmlLang: "hi-HI",
        calendar: "gregory",
        path: "hi",
      },
    },
  },

  title: 'Metal Docs',
  tagline: 'Documentation and Tutorials for Metal Blockchain',
  url: 'https://docs.metalblockchain.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'MetalBlockchain', // Usually your GitHub org/user name.
  projectName: 'metal-docs', // Usually your repo name.
  trailingSlash: false,

  scripts: [],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/MetalBlockchain/metal-docs/edit/master/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/Metal-OG-Image.png?force-reload-1',
      metadata: [
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:description', content: 'Metal is a new blockchain initiative built to power the new era of finance.'},
        {name: 'twitter:title', content:'Developer Documentation and Tutorials for Metal Blockchain'},
        {name: 'keywords', content: 'Developer Documentation and Tutorials for Metal Blockchain'}
      ],
      navbar: {
        title: "",
        logo: {
          alt: 'Metal Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "overview",
            label: "Overview",
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'quickStart',
            label: 'Quick Start',
          },
          //  {
          //   type: 'docSidebar',
          //   position: 'left',
          //   sidebarId: 'dapps',
          //   label: 'DApps',
          // },
          {
             type: 'docSidebar',
             position: 'left',
             sidebarId: 'subnets',
             label: 'Subnets',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'apis',
            label: 'APIs',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'nodes',
            label: 'Nodes',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'specs',
            label: 'Specs',
          },
         /*  {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'community',
            label: 'Community',
          },  */
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/MetalBlockchain',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/metalblockchain',
              },
              {
                label: 'Developer Telegram',
                href: 'https://t.me/metaldevelopers',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/MetalBlockchain',
              }
            ],
          },
          {

          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Metallicus, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }
    }),
};

module.exports = config;
