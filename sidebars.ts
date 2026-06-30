import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'introduccion',
    'guia-docente',
    {
      type: 'category',
      label: 'Bloque 1 - Diseno y planificacion',
      items: ['tema-01-diseno-y-preproduccion'],
    },
    {
      type: 'category',
      label: 'Bloque 2 - Gestion',
      items: ['tema-02-gestion-de-proyecto'],
    },
    {
      type: 'category',
      label: 'Bloque 3 - Publicacion',
      items: ['tema-03-publicacion-y-marketing'],
    },
    {
      type: 'category',
      label: 'Bloque 4 - Produccion',
      items: ['tema-04-produccion-y-pipeline'],
    },
    'recursos',
    'guia-estilo-contenido',
    'plantilla-tema',
  ],
};

export default sidebars;
