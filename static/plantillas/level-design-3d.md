# Documento de level design 3D — [Nombre del juego]

**Versión:** 0.1 | **Fecha:** | **Equipo:** | **Nivel:**

---

## Resumen

| Campo | Valor |
| --- | --- |
| **Nombre del nivel** | |
| **Duración objetivo** | minutos |
| **Tipo de espacio** | Interior / exterior / mixto / VR |
| **Relación con la versión 2D** | Misma mecánica repensada / nuevo espacio / otro |

---

## Paper map (plano 2D del recorrido)

Adjunta boceto o imagen. Marca inicio, meta, landmarks y *gating*.

```
[Esboza aquí o enlaza a archivo]
```

| Punto | Coordenada / zona | Función |
| --- | --- | --- |
| Inicio | | |
| Landmark 1 | | Orientación |
| Gating | | Bloqueo hasta… |
| Meta | | |

---

## Landmarks y guía visual

| Landmark | Descripción visual | Visible desde | Qué comunica |
| --- | --- | --- | --- |
| | | | |

**Líneas de vista clave:** ¿Qué ve el jugador al entrar? ¿Qué se revela al avanzar?

---

## Ritmo y curva de intensidad

| Tramo | Espacio (abierto/cerrado) | Intensidad (1–5) | Contenido (combate, exploración, puzzle…) |
| --- | --- | --- | --- |
| Intro | | | |
| | | | |
| Clímax | | | |
| Cierre | | | |

---

## Blueprint de flujo de nivel

Diagrama de progresión: inicio → *gating* → clímax → cierre.

```text
Inicio → [ ] → Gating (llave/habilidad) → [ ] → Clímax → Meta
```

| Nodo | Condición de avance | Alternativas / atajos |
| --- | --- | --- |
| | | |

---

## Blockout y herramientas

| Fase | Herramienta prevista | Estado |
| --- | --- | --- |
| Blockout gris | ProBuilder / primitivas | Pendiente / Hecho |
| Terreno (si aplica) | Terrain | |
| Rutas / patrullas | Splines | |
| Detalle de superficie | Polybrush | |
| Herramienta propia | Editor script (dispersor, validador…) | |

**Enlace a escena Unity:** | **Captura del blockout:**

---

## VR (si aplica)

| Factor | Decisión del equipo | Notas de confort |
| --- | --- | --- |
| Movimiento | Teletransporte / continuo / mixto | |
| Escala | 1 u ≈ 1 m | |
| Interacción | Agarre / apuntado / UI diegética | |
| Sesión máxima recomendada | min | |

---

## Playtest del blockout (antes del arte)

| Pregunta | Sí / No | Notas |
| --- | --- | --- |
| ¿El jugador sabe dónde ir sin mapa? | | |
| ¿La escala del personaje es creíble? | | |
| ¿El ritmo alterna tensión y calma? | | |
| ¿Algún tramo generó “¿dónde estoy?” | | |

**Fecha del playtest:** | **Build:**

---

## Integración en el GDD (fase 2)

- [ ] Sección de *level design* 3D actualizada.
- [ ] Blueprint integrado en el GDD.
- [ ] Plan de métricas enlazado ([plan-metricas-dificultad.md](./plan-metricas-dificultad.md)).
