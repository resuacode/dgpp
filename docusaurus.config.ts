import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const siteUrl = process.env.SITE_URL ?? 'https://resuacode.es';
const siteBaseUrl = process.env.BASE_URL ?? '/dgpp/';

const config: Config = {
  title: 'DGPP',
  tagline:
    'Diseño, gestión, publicación y producción de videojuegos - Curso de Especialización FP',
  favicon: 'img/gamepad.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: siteUrl,
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: siteBaseUrl,

  // GitHub pages deployment config.
  organizationName: 'resuacode',
  projectName: 'dgpp',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['es'],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 8,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DGPP',
      logo: {
        alt: 'DGPP',
        src: 'img/gamepad.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guiaSidebar',
          position: 'left',
          label: 'Guía docente',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tema01Sidebar',
          position: 'left',
          label: 'Tema 1',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tema02Sidebar',
          position: 'left',
          label: 'Tema 2',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tema03Sidebar',
          position: 'left',
          label: 'Tema 3',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tema04Sidebar',
          position: 'left',
          label: 'Tema 4',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tema05Sidebar',
          position: 'left',
          label: 'Tema 5',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tema06Sidebar',
          position: 'left',
          label: 'Tema 6',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tema07Sidebar',
          position: 'left',
          label: 'Tema 7',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tema08Sidebar',
          position: 'left',
          label: 'Tema 8',
        },
        {
          href: 'https://github.com/resuacode/dgpp',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Temario · 1-4',
          items: [
            {
              label: 'Tema 1 · Industria e historia',
              to: '/docs/tema-01/tema-01-introduccion-industria',
            },
            {
              label: 'Tema 2 · Game Design (GDD)',
              to: '/docs/tema-02/tema-02-game-design-fundacional',
            },
            {
              label: 'Tema 3 · Producción ágil',
              to: '/docs/tema-03/tema-03-metodologias-agiles-produccion',
            },
            {
              label: 'Tema 4 · QA, UX y playtesting',
              to: '/docs/tema-04/tema-04-qa-ux-playtesting',
            },
          ],
        },
        {
          title: 'Temario · 5-8',
          items: [
            {
              label: 'Tema 5 · Diseño 3D y VR',
              to: '/docs/tema-05/tema-05-escalado-3d-y-vr',
            },
            {
              label: 'Tema 6 · Negocio y monetización',
              to: '/docs/tema-06/tema-06-modelos-negocio-monetizacion',
            },
            {
              label: 'Tema 7 · Distribución y marketing',
              to: '/docs/tema-07/tema-07-distribucion-marketing-marco-legal',
            },
            {
              label: 'Tema 8 · Portfolio y lanzamiento',
              to: '/docs/tema-08/tema-08-portfolio-lanzamiento-multimedia',
            },
          ],
        },
        {
          title: 'Recursos',
          items: [
            {
              label: 'Guía docente',
              to: '/docs/guia-docente',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/resuacode/dgpp',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DGPP. Construido con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      // C# no viene en el paquete por defecto de Prism en Docusaurus.
      additionalLanguages: ['csharp'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
