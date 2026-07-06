# Instrucciones globales del repositorio DGPP

## Contexto

Este repositorio contiene material docente del modulo Diseno, Gestion, Publicacion y Produccion de Videojuegos del curso de especializacion FP.

## Idioma y tono

- Responder y redactar en español.
- Mantener tono docente, claro y orientado a aprendizaje practico.
- Evitar relleno y frases ambiguas.

## Reglas de contenido

- Priorizar formato MDX en `docs/`.
- Mantener estructura por tema: Objetivos, Contenidos, Actividades, Evaluacion, Recursos.
- Proponer ejemplos aplicados a desarrollo de videojuegos.
- Incluir criterios evaluables y evidencias esperadas en actividades.
- Incluir al final de cada documento una seccion `## Fuentes y referencias`.
- Citar fuentes de calidad: documentacion oficial, libros de editoriales reconocidas, papers, estandares o informes sectoriales reputados.
- Evitar fuentes de baja calidad o sin autoria verificable.
- Cuando se incluyan URL, anadir titulo del recurso y fecha de consulta.
- En contenidos teoricos amplios, incluir un minimo de 3 referencias.
- Priorizar en este orden: documentacion oficial > estandares/papers > libros tecnicos > informes sectoriales.

## Sincronizacion de guias de profesorado

Al **anadir, modificar o eliminar** contenido de un tema en `docs/tema-XX/tema-*.mdx`, actualizar
en el **mismo cambio** (no dejarlo para despues):

| Archivo | Que alinear |
| --- | --- |
| `docs/tema-XX/_guia-profesorado-tema-XX.mdx` | Proposito, sesiones, secuencia didactica, actividades/entregas, errores, materiales, conexiones, fuentes |
| `docs/guia/_guia-general-profesorado.mdx` | Mapa de entregables (§2), resumen del tema (§3); hilo narrativo o recursos si el cambio lo exige |

- Subtema nuevo: anadir fila en la tabla de sesiones de la guia del tema y revisar `sidebars.ts`.
- Plantilla nueva: enlazarla en materiales de la guia del tema y en Recursos / §7 de la guia general.
- Las guias usan prefijo `_` y `draft: true`; no se publican en GitHub Pages.

## Reglas tecnicas

- No eliminar ni sobrescribir material de `prev/` salvo indicacion explicita.
- Usar nombres de archivo en minusculas y guiones, sin espacios ni acentos.
- Evitar introducir dependencias innecesarias para cambios de contenido.
