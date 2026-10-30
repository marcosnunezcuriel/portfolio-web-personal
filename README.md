# Documentación del Portfolio Web Personal

Este documento proporciona una visión general y técnica de la arquitectura, componentes y organización del código fuente de mi portfolio web personal. Este proyecto está orientado a la búsqueda de empleo e inserción laboral.

---

## 1. Información General del Proyecto

* **Propósito:** El objetivo principal de este proyecto es servir como carta de presentación digital para destacar la experiencia laboral, proyectos personales, formación y habilidades técnicas.
* **Público Objetivo:** Reclutadores, empresas del sector tecnológico y profesionales de recursos humanos.
* **Características Principales:**
  * Diseño modular y reutilizable mediante componentes.
  * Gestión de datos centralizada a través de archivos JSON.
  * Estilos unificados mediante utilidades globales para colores y fuentes.
  * Soporte para descarga de curriculum en PDF y previsualización de certificaciones.

---

## 2. Secciones Principales de la Aplicación

1. **AboutMe (Sobre mí):**
   * Muestra la presentación principal con nombre, descripción profesional y fotografía.
   * Incluye dos botones de acción principal (Call to Action):
     * Redirección a la sección de contacto.
     * Descarga directa de mi Curriculum Vitae en formato PDF.

2. **Experience (Experiencia Laboral):**
   * Detalla la trayectoria profesional.
   * Renderiza las experiencias laborales mediante la iteración de datos alojados en el JSON correspondiente.

3. **Certifications (Certificaciones):**
   * Apartado independiente dedicado a mostrar los títulos acreditativos y certificaciones obtenidas.
   * Consume datos del archivo JSON correspondiente y permite la vinculación con los archivos PDF en `public/certifications/`.

4. **Projects (Proyectos):**
   * Sección reservada para futuros proyectos de desarrollo. Actualmente se encuentra vacía mientras continúo con mi etapa de formación académica.

5. **Education (Educación):**
   * Agrupa la formación académica, idiomas y habilidades técnicas (*skills*).
   * Consume datos dinámicos desde los archivos JSON correspondientes utilizando sus respectivas tarjetas (*cards*).

6. **Contact (Contacto):**
   * Presenta una tarjeta interactiva estilo "tarjeta de presentación real" con los datos clave para establecer contacto directo.

---

## 3. Estructura de Archivos y Directorios

La organización del proyecto sigue una arquitectura clara por responsabilidades:

```text
.
├── public/
│   ├── certifications/   # Archivos PDF acreditativos de certificaciones
│   └── cv/               # Archivo PDF del Curriculum Vitae descargable
└── src/
    ├── assets/           # Imágenes generales y recursos gráficos de la aplicación
    ├── components/
    │   ├── cards/        # Componentes reutilizables para renderizar elementos dinámicos
    │   │   ├── CertificationCard.jsx
    │   │   ├── JobCard.jsx
    │   │   ├── LanguageCard.jsx
    │   │   ├── SkillCard.jsx
    │   │   └── StudyCard.jsx
    │   ├── common/       # Componentes de diseño estructural y repetitivos
    │   │   ├── ContactCard.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Menu.jsx
    │   │   ├── SectionTitle.jsx
    │   │   └── Separator.jsx
    │   └── sections/     # Módulos de sección principal de la página
    │       ├── AboutMe.jsx
    │       ├── Certifications.jsx
    │       ├── Contact.jsx
    │       ├── Education.jsx
    │       ├── Experience.jsx
    │       └── Projects.jsx
    ├── data/             # Archivos de datos en formato JSON
    │   ├── certifications.json
    │   ├── jobs.json
    │   ├── languages.json
    │   ├── skills.json
    │   └── studies.json
    ├── layouts/          # Envoltorios de diseño con estilos globales
    │   └── Layout.jsx
    ├── pages/            # Puntos de entrada principales
    │   └── index.jsx
    └── utils/            # Constantes y herramientas de diseño
        ├── colours.js    # Definición de la paleta de colores del sitio
        └── fonts.js      # Configuración de tipografías utilizadas
```

---

## 4. Detalle de Módulos y Componentes

### 4.1. Componentes Reutilizables (`components/common`)
* **Menu:** Barra de navegación fija en la parte superior para navegar entre las distintas secciones del portfolio.
* **Footer:** Pie de página con créditos.
* **ContactCard:** Representación visual en formato de tarjeta física de contacto.
* **SectionTitle:** Componente estándar para mantener un estilo visual homogéneo en las cabeceras de cada sección.
* **Separator:** Elemento visual (línea gris decorativa) para establecer divisiones claras entre secciones y subsecciones.

### 4.2. Tarjetas de Contenido (`components/cards`)
* **CertificationCard:** Muestra la información de certificaciones y permite la vinculación a los archivos PDF en `public/certifications/`.
* **JobCard:** Muestra el puesto, empresa, periodo y descripción de la experiencia laboral.
* **LanguageCard:** Presenta los idiomas y el nivel de competencia de cada uno.
* **SkillCard:** Muestra las competencias técnicas.
* **StudyCard:** Muestra los títulos académicos.

### 4.3. Configuración y Estilos (`utils/`)
* **`colours.js`:** Contiene las variables con la paleta cromática centralizada de la aplicación para asegurar coherencia visual.
* **`fonts.js`:** Define los estilos tipográficos y fuentes utilizadas en todos los componentes.

---

## 5. Mantenimiento y Actualización de Datos

Para actualizar la información del portfolio no es necesario modificar la estructura de los componentes UI. Basta con editar los archivos correspondientes dentro de la carpeta `src/data/`:

* Añadir/modificar puestos de trabajo $\rightarrow$ `src/data/jobs.json`
* Actualizar estudios $\rightarrow$ `src/data/studies.json`
* Gestionar certificaciones $\rightarrow$ `src/data/certifications.json` (asegurándose de incluir el PDF en `public/certifications/`)
* Añadir habilidades $\rightarrow$ `src/data/skills.json`
* Añadir/modificar idiomas $\rightarrow$ `src/data/languages.json`
* Rellenar proyectos futuros $\rightarrow$ Archivo de datos o componente dentro de la sección `Projects` cuando comience a desarrollarlos.
* Actualizar CV $\rightarrow$ Reemplazar el archivo PDF correspondiente dentro de `public/cv/`.