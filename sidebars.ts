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
  guiaSidebar: [
    'introduccion',
    'guia-docente',
    'gdd-transversal',
    'recursos',
    'guia-estilo-contenido',
  ],
  tema01Sidebar: [
    'tema-01-introduccion-industria',
    'tema-01-fundamentos-industria',
    'tema-01-aplicacion-proyecto-2d',
  ],
  tema02Sidebar: [
    'tema-02-game-design-fundacional',
    'tema-02-gdd-e-core-loop',
    'tema-02-balanceo-y-economia',
  ],
  tema03Sidebar: [
    'tema-03-metodologias-agiles-produccion',
    'tema-03-rol-productor-y-planificacion',
    'tema-03-vertical-slice-2d',
  ],
  tema04Sidebar: [
    'tema-04-qa-ux-playtesting',
    'tema-04-test-cases-e-feedback',
    'tema-04-informe-iteracion-hito-1',
  ],
  tema05Sidebar: [
    'tema-05-escalado-3d-y-vr',
    'tema-05-level-design-e-editor-scripting',
    'tema-05-aplicacion-proyecto-3d-y-vr',
  ],
  tema06Sidebar: [
    'tema-06-modelos-negocio-monetizacion',
    'tema-06-diseno-etico-y-patrones-oscuros',
    'tema-06-plan-negocio-avanzado',
  ],
  tema07Sidebar: [
    'tema-07-distribucion-marketing-marco-legal',
    'tema-07-propiedad-intelectual-y-pegi',
    'tema-07-press-kit-y-campana-lanzamiento',
  ],
  tema08Sidebar: [
    'tema-08-portfolio-lanzamiento-multimedia',
    'tema-08-captura-edicion-e-trailer',
    'tema-08-pitching-playtesting-2-y-defensa',
  ],
};

export default sidebars;
