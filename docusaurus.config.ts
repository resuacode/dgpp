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
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Material',
        },
        {
          to: '/docs/guia-docente',
          label: 'Guia docente',
          position: 'left',
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
              label: 'Introduccion',
              to: '/docs/introduccion',
            },
          ],
        },
        {
          title: 'Modulo',
          items: [
            {
              label: 'Tema 1: Diseno y preproduccion',
              to: '/docs/tema-01-diseno-y-preproduccion',
            },
            {
              label: 'Tema 4: Produccion y pipeline',
              to: '/docs/tema-04-produccion-y-pipeline',
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
