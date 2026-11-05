Leer en **[Español](./README.md)**.

# Personal Web Portfolio Documentation

This document provides an overview and technical breakdown of the architecture, components, and source code organization of my personal web portfolio. This project is geared toward job hunting and professional placement.

---

## 1. General Project Information

* **Purpose:** The main objective of this project is to serve as a digital cover letter to highlight work experience, personal projects, education, and technical skills.
* **Target Audience:** Recruiters, companies in the tech sector, and human resources professionals.
* **Main Features:**
  * Modular and reusable design using components.
  * Multi-language support (Spanish and English) through localized data structures and views.
  * Centralized data management via JSON files.
  * Unified styles using global utilities for colors and fonts.
  * Support for downloading the resume in PDF format (depending on the active language) and previewing certifications.
  * A customised, bilingual 404 page with automatic language detection and an adapted ‘Back to Home’ button.

---

## 2. Main Application Sections

1. **AboutMe:**
   * Displays the main introduction with name, professional description, and photograph.
   * Includes two primary Call to Action buttons:
     * Redirection to the contact section.
     * Direct download of my Curriculum Vitae in PDF format (localized according to the language).

2. **Experience:**
   * Details professional history.
   * Renders work experiences by iterating over data housed in the language-specific JSON.

3. **Certifications:**
   * Independent section dedicated to displaying accreditation titles and earned certifications.
   * Consumes data from the corresponding JSON file and allows linking to PDF files in `public/certifications/`.

4. **Projects:**
   * Section reserved for future development projects. It is currently empty while I continue my academic training stage.

5. **Education:**
   * Groups academic background, languages, and technical skills.
   * Consumes dynamic data from the corresponding JSON files using their respective cards.

6. **Contact:**
   * Features an interactive "real business card" style card with key details to establish direct contact.

---

## 3. File and Directory Structure

The project organization follows a clear architecture based on responsibilities:

```text
.
├── public/
│   ├── certifications/   # Certification accreditation PDF files
│   └── cv/               # Downloadable Curriculum Vitae PDF files
└── src/
    ├── assets/           # General images and graphic assets of the application
    ├── components/
    │   ├── cards/        # Reusable components to render dynamic elements
    │   │   ├── CertificationCard.jsx
    │   │   ├── JobCard.jsx
    │   │   ├── LanguageCard.jsx
    │   │   ├── SkillCard.jsx
    │   │   └── StudyCard.jsx
    │   ├── common/       # Structural design and repetitive components
    │   │   ├── ContactCard.jsx
    │   │   ├── Footer.jsx
    │   │   ├── LanguagePicker.jsx
    │   │   ├── Menu.jsx
    │   │   ├── SectionTitle.jsx
    │   │   └── Separator.jsx
    │   └── sections/     # Main page section modules (with dynamic text constants)
    │       ├── AboutMe.jsx
    │       ├── Certifications.jsx
    │       ├── Contact.jsx
    │       ├── Education.jsx
    │       ├── Experience.jsx
    │       └── Projects.jsx
    ├── data/             # Localized JSON data files
    │   ├── en/
    │   │   ├── certifications.json
    │   │   ├── jobs.json
    │   │   ├── languages.json
    │   │   ├── skills.json
    │   │   └── studies.json
    │   └── es/
    │       ├── certifications.json
    │       ├── jobs.json
    │       ├── languages.json
    │       ├── skills.json
    │       └── studies.json
    ├── layouts/          # Layout wrappers with global styles
    │   └── Layout.jsx
    ├── pages/            # Main entry points (Multi-language routing)
    │   ├── 404.astro     # Bilingual custom error page
    │   ├── index.astro   # Spanish version entry point
    │   └── en/
    │       └── index.astro # English version entry point
    └── utils/            # Design constants and tools
        ├── colours.js    # Definition of the site's color palette
        └── fonts.js      # Configuration of used typography
```

---

## 4. Module and Component Details

### 4.1. Reusable Components (`components/common`)
* **Menu:** Fixed top navigation bar to move between the different sections of the portfolio.
* **Footer:** Footer section with credits.
* **LanguagePicker:** Floating button that detects the current route (`/en` or root) and dynamically switches languages.
* **ContactCard:** Visual representation in a physical contact card format.
* **SectionTitle:** Standard component to maintain a homogeneous visual style in the headers of each section.
* **Separator:** Visual element (decorative gray line) to establish clear divisions between sections and subsections.

### 4.2. Content Cards (`components/cards`)
* **CertificationCard:** Displays certification information and allows linking to PDF files in `public/certifications/`.
* **JobCard:** Displays the position, company, period, and description of work experience.
* **LanguageCard:** Presents languages and the proficiency level of each.
* **SkillCard:** Displays technical competencies.
* **StudyCard:** Displays academic degrees.

### 4.3. Special pages (`pages`)
* 404.astro: A customised error page that dynamically detects whether the user is browsing the English or Spanish version, in order to display localised text, the profile photograph and a smart redirect button to the relevant home page.

### 4.4. Configuration and Styles (`utils/`)
* **`colours.js`:** Contains variables with the centralized color palette of the application to ensure visual consistency.
* **`fonts.js`:** Defines typographic styles and fonts used across all components.

---

## 5. Maintenance and Data Updates

To update portfolio information or manage multi-language support, it is not necessary to modify the UI component structure. Simply edit the corresponding files inside the `src/data/` folder:

* **Text Constants:** Each section component includes localized constants to adapt text based on the active language.
* **Update/Add Jobs:** $\rightarrow$ `src/data/es/jobs.json` and `src/data/en/jobs.json`
* **Update/Add Studies:** $\rightarrow$ `src/data/es/studies.json` and `src/data/en/studies.json`
* **Manage Certifications:** $\rightarrow$ `src/data/es/certifications.json` and `src/data/en/certifications.json` (making sure to include the PDF in `public/certifications/`)
* **Add Skills:** $\rightarrow$ `src/data/es/skills.json` and `src/data/en/skills.json`
* **Add Languages:** $\rightarrow$ `src/data/es/languages.json` and `src/data/en/languages.json`
* **Fill Future Projects:** $\rightarrow$ Data file or component within the `Projects` section when development begins.
* **Update CV:** Replace the corresponding PDF files inside `public/cv/`.