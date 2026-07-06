# AGENTS.md - Instrucciones interoperables para agentes

Estas instrucciones aplican para agentes usados desde Copilot, Cursor u otras herramientas compatibles.

## Contexto del proyecto

- Repositorio de material docente del modulo DGPP.
- Sitio estatico basado en Docusaurus y publicado en GitHub Pages.

## Reglas de trabajo

- Responder y redactar en español.
- Mantener estructura didactica por tema: Objetivos, Contenidos, Actividades, Evaluacion, Recursos.
- Proponer actividades con entregables claros.
- No modificar contenidos heredados en `prev/` salvo indicacion explicita.
- Mantener convenciones de nombres de archivos (minusculas, guiones, sin acentos).
- Incluir al final de cada documento una seccion `Fuentes y referencias`.
- Citar fuentes de calidad (documentacion oficial, libros, papers, estandares e informes sectoriales reputados).
- Incluir titulo de la fuente, URL y fecha de consulta en cada referencia.
- En desarrollo teorico, incluir al menos 3 referencias verificables.
- Evitar blogs sin autoria, contenido promocional o fuentes sin trazabilidad.

## Calidad minima

- Coherencia entre objetivos, actividades y evaluacion.
- Lenguaje claro para alumnado de curso de especializacion.
- Ejemplos aplicados a desarrollo y produccion de videojuegos.

## Sincronizacion de guias de profesorado

Cada vez que se **anada, modifique o elimine** contenido publicado de un tema
(`docs/tema-XX/tema-*.mdx`), actualizar en el **mismo cambio**:

1. **Guia del tema:** `docs/tema-XX/_guia-profesorado-tema-XX.mdx`
2. **Guia general:** `docs/guia/_guia-general-profesorado.mdx` (mapa de entregables, resumen del
   tema afectado y, si aplica, hilo narrativo o recursos reutilizables)

En la guia del tema, revisar como minimo: proposito, encaje temporal (tabla de sesiones y
documentos), secuencia didactica, actividades/entregas, errores frecuentes, materiales,
conexiones con otros temas y fuentes. Si hay un subtema nuevo, incluirlo en la tabla de sesiones
y en `sidebars.ts` si corresponde.

La guia debe reflejar el mismo temario, evidencias y herramientas que ve el alumnado en el sitio.
No dejar el MDX del alumnado actualizado sin alinear el profesorado.
