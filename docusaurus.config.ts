import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const siteUrl = process.env.SITE_URL ?? 'https://resuacode.es';
const siteBaseUrl = process.env.BASE_URL ?? '/dgpp/';

const config: Config = {
  title: 'DGPP | Material docente',
  tagline:
    'Diseno, gestion, publicacion y produccion de videojuegos - Curso de Especializacion FP',
  favicon: 'img/favicon.ico',

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

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/resuacode/dgpp/tree/master/',
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
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guiaSidebar',
          position: 'left',
          label: 'Guia docente',
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
          title: 'Docs',
          items: [
            {
              label: 'Guia docente',
              to: '/docs/guia-docente',
            },
          ],
        },
        {
          title: 'Modulo',
          items: [
            {
              label: 'Tema 1',
              to: '/docs/tema-01-introducion-industria',
            },
            {
              label: 'Tema 8',
              to: '/docs/tema-08-portfolio-lanzamento-multimedia',
            },
          ],
        },
        {
          title: 'Proyecto',
          items: [
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
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
