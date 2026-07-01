# Examen — React + Tailwind CSS (Diseño de Interfaces)

## Objetivo
Desarrollar una **aplicación web en React** (con Tailwind CSS) que incluya:
- **Dashboard**
- **Login local** (en modal)
- **Home protegido**
- **Listado en grid** consumiendo datos de una API
- **Vista de detalle** por parámetro (`:id`)
- **Gestión de estados de interfaz** (loading / error) y renderizado condicional
- **Skeleton loading**

---

## API obligatoria
Debes consumir datos desde la API pública de Valorant:

- Listado de personajes:  
  `https://valorant-api.com/v1/agents`

- Detalle de personaje por ID:  
  `https://valorant-api.com/v1/agents/:agentUuid`


## ⚠️ Importante sobre la estructura de la API

La API de Valorant **no devuelve directamente un array de personajes**.

La respuesta del endpoint de listado tiene esta estructura:

json
{
  "status": 200,
  "data": [ ... ]
}

**Los personajes se encuentran dentro de la propiedad data**

---

## 🎨 Paleta de colores base

Para este examen se proporciona una **paleta de colores base** que debe usarse como referencia para el diseño de la interfaz.

### Paleta de colores

- 🔴 `#FF4655` - AccentRed
- ⚫ `#111111` - Black
- ⚪ `#F9F9F9` - White
- ⚫ `#1D1D1D` - Gray

📌 No es obligatorio personalizar Tailwind, pero **sí se valora positivamente** el uso correcto de la paleta.

--

La tipografía está importada, pero debe aplicarse correctamente en la interfaz.

--

## Hitos (lo que debes entregar)

### ✅ Hito 0 — Proyecto base
- Proyecto React creado con Vite
- Tailwind CSS funcionando

---

### ✅ Hito 1 — Login local en modal/popup
- El login debe aparecer en un **modal/popup**
- El formulario debe tener:
  - usuario
  - contraseña
- Validación local:
  - usuario/contraseña correctos → login OK
  - incorrectos → mostrar error en la interfaz

📌 Credenciales:
- Usuario: `admin`
- Password: `1234`

---

### ✅ Hito 2 — Guardar sesión en localStorage o sessionStorage
- Si el login es correcto:
  - guardar `isLogged = "true"` en `localStorage` / `sessionStorage`
- Al recargar la página:
  - si `isLogged` existe → seguir logueado
- (Extra) Logout:
  - borrar `isLogged` y volver al login

---

### ✅ Hito 3 — Rutas protegidas
- El dashboard y las rutas internas deben estar protegidas:
  - si **NO** está logueado → redirigir al login
  - si **SÍ** está logueado → permitir acceso

---

### ✅ Hito 4 — Dashboard (layout)
- El dashboard debe tener una estructura clara de interfaz:
  - header
  - contenido principal
- El diseño debe ser coherente con Tailwind CSS

---

### ✅ Hito 5 — Vista Grid de “artículos” (personajes)
- Debes mostrar un **grid** de cards con personajes (al menos 12)
- Cada card debe mostrar:
  - imagen
  - nombre
  - estado (Alive/Dead/unknown) con **color visual**
  - planeta
- Debes renderizar el listado usando `map` y componentes reutilizables

---

### ✅ Hito 6 — Loading + Error (obligatorio)
En la carga de datos del listado:
- mientras carga → mostrar **loading**
- si falla → mostrar **mensaje de error**
- la app **no debe romperse**

---

### ✅ Hito 7 — Navegación al detalle (parámetros)
- Al hacer clic en el **GO** de una card:
  - navegar a `/character/:id`
- En la vista de detalle:
  - obtener el `id` con `useParams`
  - hacer fetch del personaje por ID
  - mostrar información ampliada

📌 Debe existir un botón o enlace para volver al grid.

---

### ✅ Hito 8 — Loading + Error también en el detalle
La vista de detalle debe gestionar:
- loading mientras carga
- error si falla

---

## Extras (suben nota, no obligatorios. En caso de no haber completado los 8 hitos, estos extras subirán menos nota)
- Skeleton loading (en grid y/o detalle)
- Hover/transition/pequeños detalles de UX con Tailwind
- Logout funcional
- Empty state (si no hay resultados)
- Estructura de carpetas correcta

---

## Permitido / No permitido

### ✅ Permitido
- Documentación oficial:
  - React
  - React Router
  - Tailwind CSS
- Código escrito por ti durante el examen

### ❌ No permitido
- IA o asistentes:
  - GitHub Copilot
  - ChatGPT
  - extensiones tipo “Code GPT”
  - autocompletado inteligente (inline suggestions) si está activo
- Copiar código de cualquier sitio, ejemplos:
  - blogs
  - StackOverflow
  - repositorios de GitHub
  - vídeos/tutoriales
- Librerías externas

📌 El profesor podrá pedir una breve explicación del código si detecta dudas sobre la autoría.

---

## Recomendaciones
- Trabaja por hitos en orden (no empieces por el detalle)
- Controla siempre los estados:
  - loading
  - error
  - datos correctos
- Mantén el diseño limpio y coherente

---

## ENTREGA
📤 La entrega se realizará a través de Moodle, en el apartado `Exámen DI 2ª Evaluación`.

Cada alumno deberá subir la carpeta completa del proyecto comprimida con el siguiente nombre: **NombreYApellidos-ProyectoValorant**

## Requisitos de la entrega

La carpeta debe contener:

- Código fuente completo

- package.json

- package-lock.json (o equivalente)

- Carpetas src, public, etc.

---

## CHECKLIST DEL EXAMEN

🔴 PRIORIDAD ALTA (IMPRESCINDIBLE PARA APROBAR)

⬜ Login local funcional (usuario + contraseña)

⬜ Guardar sesión en localStorage/sessionStorage

⬜ Rutas protegidas (no se puede acceder sin login)

⬜ Dashboard accesible tras login

⬜ Fetch correcto a la API de Valorant

⬜ Uso correcto de data.data en el listado

⬜ Grid de personajes renderizado con map

⬜ Navegación al detalle usando :agentUuid

⬜ Vista de detalle funcional

⬜ Uso de useEffect en listado y detalle

`Objetivo: que la aplicación funcione de principio a fin.`

🟠 PRIORIDAD MEDIA (SUPERAR EL APROBADO)

⬜ Gestión de loading en el listado

⬜ Gestión de error en el listado

⬜ Loading y error también en la vista de detalle

⬜ Renderizado condicional (if (loading), if (error))

⬜ Componentes reutilizables (cards, layout)

⬜ Diseño claro y ordenado con Tailwind

🟢 PRIORIDAD BAJA (EXTRAS — SOLO SI QUIERES SUBIR MÁS LA NOTA)

⬜ Skeleton loading (cards o detalle)

⬜ Hover y transiciones (UX)

⬜ Logout funcional

⬜ Empty state bien diseñado

⬜ Pequeños detalles visuales (spacing, jerarquía)

--

❌ POR ÚLTIMO, MIS CONSEJOS: NO HAGAS ESTO

⛔ Diseñar antes de que la app funcione

⛔ Empezar por el skeleton sin tener el fetch

⛔ Perder mucho tiempo perfeccionando lo visual sin tener lo funcional

⛔ Dejar vistas a medias

Primero que funcione.
Luego que esté bien hecho.
Y solo al final, que sea bonito.

--

Buena suerte.