# Plan de métricas de dificultad — [Nombre del juego]

**Versión:** 0.1 | **Fecha:** | **Equipo:** | **Nivel evaluado:**

---

## Contexto

| Campo | Valor |
| --- | --- |
| **Nivel / build** | |
| **Fase del proyecto** | 2D (vertical slice) / 3D (demo) |
| **Perfil de jugadores del playtest** | Novato / mixto / experto |
| **Hipótesis de dificultad** | ¿Qué esperáis que sea fácil o difícil? |

---

## Distinción previa (recordatorio)

| Concepto | Definición breve | Cómo lo estimáis antes del playtest |
| --- | --- | --- |
| **Complejidad** | Propiedades objetivas del nivel (enemigos, saltos, longitud…) | Conteo / exportador de métricas (Tema 2.4) |
| **Dificultad** | Relación tarea–jugador (probabilidad de fallo, frustración…) | Métricas de playtest (Tema 4) |

---

## Métricas planificadas

Definid **umbrales**: valor a partir del cual revisaréis el diseño.

| Métrica | Cómo se mide | Umbral de alerta | Acción si se supera el umbral |
| --- | --- | --- | --- |
| **Tasa de finalización** | % jugadores que completan el nivel | &lt; ___ % | |
| **Intentos hasta completar** | Media de reintentos | &gt; ___ | |
| **Muertes por tramo** | Conteo en zona A / B / C | &gt; ___ en un tramo | |
| **Tiempo por zona** | Segundos en cada tramo | &gt; ___ s en un tramo | |
| **Punto de abandono** | Dónde deja de jugar la gente | Antes del ___ % del nivel | |
| **Dificultad percibida** | Escala 1–5 en formulario (Tema 4) | Media &lt; 2 o &gt; 4 | |

Añadid filas propias si hace falta (p. ej. recogibles perdidos, errores de control).

---

## Complejidad estimada (pre-playtest)

Rellenad antes de la sesión con datos del editor o conteo manual.

| Elemento | Cantidad | Zona principal |
| --- | --- | --- |
| Enemigos / obstáculos | | |
| Coleccionables | | |
| Saltos / plataformas críticas | | |
| Longitud aproximada del recorrido | unidades / tiles | |

**Índice de complejidad simple (opcional):** suma ponderada o ratio enemigos/longitud = ___

---

## Resultados del playtest (rellenar tras la sesión)

**Fecha:** | **Build:** | **N.º de jugadores:**

| Métrica | Valor observado | ¿Supera umbral? | Decisión |
| --- | --- | --- | --- |
| Tasa de finalización | | Sí / No | Mantener / Ajustar / Rediseñar |
| Intentos hasta completar | | | |
| Muertes por tramo | | | |
| Tiempo por zona | | | |
| Abandono | | | |
| Dificultad percibida (media) | | | |

### Observaciones cualitativas

1. ¿Dónde se frustraron?
2. ¿Dónde se aburrieron?
3. ¿Hubo confusión (carga cognitiva) sin reto real?

---

## Plan de iteración

| Problema detectado | Hipótesis de causa | Cambio propuesto | Métrica que debe mejorar |
| --- | --- | --- | --- |
| | | | |

**Próximo playtest previsto:** | **Responsable:**

---

## Integración

- [ ] Enlazado al informe de iteración ([plantilla informe-iteracion.md](./informe-iteracion.md)).
- [ ] Sección del GDD de *level design* / *playtesting* actualizada.
