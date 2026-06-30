# DGPP - Material docente

Sitio estatico del modulo **Diseno, Gestion, Publicacion y Produccion de Videojuegos** del curso de especializacion de FP en desarrollo de videojuegos.

## Stack

- [Docusaurus](https://docusaurus.io/) (MDX + docs versionables en Git).
- Publicacion automatica en GitHub Pages mediante GitHub Actions.

## Estructura principal

- `docs/`: contenidos docentes por temas.
- `src/`: portada y componentes de interfaz.
- `.github/workflows/deploy-pages.yml`: pipeline de build y despliegue.
- `.github/copilot-instructions.md`: instrucciones globales para Copilot.
- `.github/agents/`: agentes personalizados para creacion y revision de contenido.
- `.cursor/rules/`: reglas de proyecto para Cursor.
- `AGENTS.md`: instrucciones interoperables para agentes.

## Desarrollo local

```bash
npm install
npm start
```

Servidor local por defecto: `http://localhost:3000`.

## Build de produccion

```bash
npm run build
npm run serve
```

## GitHub Pages

1. En GitHub, ve a `Settings > Pages` y selecciona `GitHub Actions` como fuente.
2. El workflow `deploy-pages.yml` desplegara automaticamente al hacer push a `master`.

## Dominio propio

- El archivo `static/CNAME` define el dominio publicado.
- Dominio actual configurado: `resuacode.es`.
- Ruta publicada del proyecto: `https://resuacode.es/dgpp/`.
- Configura los registros DNS segun la documentacion de GitHub Pages.

## Flujo de creacion de contenido con agentes

1. Usa el agente `Planificar Unidad` para estructurar un tema.
2. Usa `Redactar Tema` para crear o ampliar contenido en MDX.
3. Usa `Revisar Calidad Pedagogica` antes de cerrar cambios.

## Convenciones

- Nombre de archivos: minusculas y guiones (`tema-05-nombre.mdx`).
- Mantener secciones estandar en cada tema: Objetivos, Contenidos, Actividades, Evaluacion, Recursos.
- No modificar `prev/` salvo peticion explicita.
