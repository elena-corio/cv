# Design Specification — CV Layout & Styling

**Updated:** 2026-01-08

---

## AI Coding Prompt (Implementation Guidelines)

> Please update the web application code with the following specific design adjustments:

### 1. Typography & Text Styling

**Remove All Italics:** Ensure no text on the page is italicized. Convert all currently italicized text (the professional summary, dates, and sub-labels) to standard 'normal' font style.

**Name & Title:**
- Change 'MA Elena Corio' to Title Case (not all-caps). Set the font size to 28px.
- Change 'Computational Designer' to Title Case. Set the font size to 18px.
- Both should be **centered** below the profile image.

**Section Headers:** Keep the main section headers (EXPERIENCE, EDUCATION, SKILLS, ACHIEVEMENTS) in All-Caps and bold, but ensure the 'CONTACT' header in the sidebar matches this style exactly (24px, bold).

### 2. Sidebar Layout & Contact Positioning

**Contact Section:** Move the entire 'Contact' section to the absolute bottom of the grey sidebar using flexbox (`flex-direction: column` with `justify-content: space-between`).

**References:** Place the text 'References Available Upon Request' directly below the contact details at the very bottom.

**Icon Styling:** Ensure all icons in the contact section are rendered in **greyscale** (opacity 0.6, brightness filter).

### 3. Spacing & Alignment

**Header Margin:** Reduce the white space between the edge of the grey sidebar and the start of the grey horizontal header bars in the main column. The gap should be minimal (0px left margin for full-width bars).

**Image Integrity:** Ensure the profile photo at the top of the sidebar is displayed in its entirety without any cropping using `object-fit: contain`.

**Text Alignment:** Align skill category headers and all sub-headers with bullet-point text using consistent left padding (16px).

### 4. CSS Specifics

```css
/* Sidebar layout: profile at top, contact pinned to bottom */
.sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

/* Global italic removal */
* {
    font-style: normal !important;
}

/* Full-width header bars */
.section-title {
    width: 100%;
    margin: 0 0 35px 0;
}
```

### Why These Changes Work

- **28px/18px Ratio:** Creates a clear visual anchor at the top (name prominent but not shouting). Title is proportionally smaller.
- **Removing Italics:** Makes digital CVs easier to read on low-resolution screens and gives the design a modern, "app-like" feel.
- **Tightened Spacing:** Full-width header bars (0 left margin) make the two halves of the page feel like a single cohesive document.
- **Centered Profile:** Draws visual focus and creates a balanced sidebar design.
- **Greyscale Icons:** Reduces visual noise while maintaining information hierarchy.

---

## Additional Design Changes (Session 1)

### Skills Section Restructuring
- **Languages:** Italian, English, German (with inline proficiency levels)
- **Technologies:** 6 categories replacing 7 separate groups
  - Visual Coding (Grasshopper, Dynamo)
  - Programming (Python, C#, JavaScript)
  - Environmental Analysis (Energy Simulation, Daylighting, CFD)
  - Structural Analysis (FEA, Parametric Optimization)
  - 3D Modeling (Rhino 3D, AutoCAD, Revit)
  - Other (Adobe Suite, Microsoft Office, Git, Collaboration tools)

### Proficiency Badges & Metadata
- Inline grey (11px, #999) proficiency levels: *(Expert)*, *(Advanced)*, *(Intermediate)*
- Certification dates styled as inline grey spans: *(2021)*, *(2019)*, *(2020)*
- Publication and award details remain grey and subtle

### Responsive Breakpoints
- **Desktop:** 27/73 sidebar-to-content split, full spacing
- **Tablet (768px):** Stacked layout (sidebar on top), adjusted typography
- **Mobile (480px):** Full-width, minimal spacing, compressed fonts

---

## Current Implementation Status

✅ **Implemented:**
- No italics globally
- Name (28px Heavy, centered), Title (18px Light, centered)
- Section headers 24px Heavy in grey bars, full-width
- Sidebar flexbox with contact pinned to bottom
- Greyscale icons (opacity + brightness filter)
- Profile image centered, contained, grayscale
- Skill/header alignment (16px left padding)
- Certification dates greyscale inline
- Section spacing (35px margin-bottom)

---

## Original Design Specification (Reference)

### 1. Global Layout & Styling
- Structure: Two-column flex or grid layout.
- Sidebar (Left): Roughly 27% width, light grey background (#E6E6E6).
- Main Content (Right): Roughly 73% width, white background.
- Typography: Futura (Heavy for headers/titles, Light for body).
- Headers: All-caps in the right column with a light grey (#F0F0F0) horizontal bar behind them for section separation.
- Body Text: Heavy for titles, Light for descriptions (no italics).
- Color Palette: White and light grey for background, black and light grey for text.

### 2. Sidebar Elements (Left Column)
- Profile Image: A grayscale headshot at the top (`picture.jpg`), centered, uncrapped.
- Name & Title (centered):
  - `Ma Elena Corio` — 28px Futura Heavy.
  - `Computational Designer` — 18px Futura Light.
- Professional Summary: Justified block of text (no italics) describing background in architectural design and digital workflows. 12px Futura Light.
- Contact Section: Located at the bottom (pinned via flexbox).
  - Icons (greyscale) followed by contact details. 12px Futura Light.
- "References Available Upon Request" note at the very bottom. 12px Futura Light.

### 3. Main Content Elements (Right Column)
#### Experience Section
- Structure: Title (12px Futura Heavy) → Company/Location (12px Futura Book, grey) → Dates (grey) → Bullet points (12px Futura Light).
- Role 1: Software Engineer at Gropyus, Vienna (Oct 2020 – June 2025).
- Role 2: Structural and Computational Engineer at B+G Ingenieure, Stuttgart (May 2017 – Aug 2020).

#### Education Section
- Item 1: Master of Computational Design (MaCAD) at IAAC (2025 – Present).
- Item 2: Master's Degree in Architectural Engineering at University of Pisa (Dec 2016, 110/110 with Honours).
- Item 3: Research Student at CNR (May 2016 – Dec 2016).

#### Skills Section
- Languages: Italian, English, German (with proficiency levels).
- Technologies: 6 categories (Visual Coding, Programming, Environmental Analysis, Structural Analysis, 3D Modeling, Other).
- Proficiency levels displayed inline in grey parentheses.

#### Achievements Section
- Certificates: With dates in grey inline spans.
- Publications: Details of 2016 publication in International Journal of Computational Methods.
- Awards: "Best Thesis in Computer Graphics - Eurographics Italy" (2017).

### 4. Technical Implementation
- CSS Recommendation: Use `display: flex` for main container and sidebar with `justify-content: space-between` to pin contact to bottom.
- Section Headers: Use `h2` with `background-color: #F0F0F0`, `width: 100%`, and `margin: 0 0 35px 0`.
- Global Italic Removal: `font-style: normal !important` on all elements.
- Responsiveness: On mobile (768px), sidebar stacks on top of main content.

---

*Design spec updated 2026-01-08 with implementation details and additional changes.*
- Structure: Two-column flex or grid layout.
- Sidebar (Left): Roughly 30% width, light grey background (#E6E6E6).
- Main Content (Right): Roughly 70% width, white background.
- Typography: Futura.
- Headers: All-caps in the right column with a light grey (#E6E6E6) horizontal bar behind them for section separation. Font: Futura Bk BT, Book, 24 pt.
- Body Text: Mixed weights; bold for titles, regular for descriptions, and italicized for smaller details.
- Color Palette: White and light grey for background, black and light grey for text.

## 2. Sidebar Elements (Left Column)
- Profile Image: A square grayscale headshot at the top (`picture.jpg`).
- Name & Title:
  - `MA Elena Corio` — Futura Bk BT, Book, 20 pt.
  - `Computational Designer` — Futura Lt BT, Light Italic, 14 pt.
- Professional Summary: A justified block of italicized text describing her background in architectural design and digital workflows. Futura Lt BT, Light Italic, 12 pt.
- Contact Section: Located at the bottom left.
  - Icons (Home, Phone, Email, Skype) followed by contact details. Futura Lt BT, Light, 12 pt.
- A "References Available Upon Request" note at the very bottom. Futura Lt BT, Light Italic, 12 pt.

## 3. Main Content Elements (Right Column)
### Experience Section
- Structure: Title (Futura Hv BT, Heavy, 12 pt., black) → Company/Location (Futura Hv BT, Book, 12 pt., grey) → Dates (in grey) (Futura Hv BT, Book, 12 pt., grey) → Bullet points (Futura Lt BT, Light, 12 pt., black).
- Role 1: Software Engineer at Gropyus, Vienna (Oct 2020 – June 2025). Focus: Rule-based design logic and backend components.
- Role 2: Structural and Computational Engineer at B+G Ingenieure, Stuttgart (May 2017 – Aug 2020). Focus: FEA modeling, modular systems and large-scale structures (NFL Stadium roof).

### Education Section
- Structure: same as above
- Item 1: Master of Computational Design (MaCAD) at IAAC (2025 – present). Focus: Computational design, BIM and Smart Construction, AI in Architecture.
- Item 2: Master’s Degree in Architectural Engineering at University of Pisa (Dec 2016). Includes Grade (110/110 with honours) and core subjects.
- Item 3: Research Student at CNR (May 2016 – Dec 2016). Focus: Timber gridshell structures and prototyping.

### Skills Section
- Structure: only title and bullet point. Proficiency level in parenthesis and light grey font.
- Languages: Listed with proficiency levels (Italian: Mother tongue, English: C1, German: B2).
- Technologies: Grouped by category (Visual scripting, Programming, Environmental Analysis, Structural analysis, Graphic, Office).

### Achievements Section
- Structure: only title and bullet point. Proficiency level in parenthesis and light grey font.
- Certificates: Includes Chartered Engineer (2021) and Rhino/Grasshopper certs.
- Publications: Details a specific 2016 publication in the International Journal of Computational Methods.
- Awards: "Best Thesis in Computer Graphics - Eurographics Italy" (2017).

## 4. Technical Suggestions for the AI
- CSS Recommendation: Use `display: flex` for the main container and padding to create the breathing room seen in the margins.
- Section Headers: Use an `h2` with `background-color: #F0F0F0` and `width: 100%` to mimic the grey bars.
- Responsiveness: On mobile, the sidebar should stack on top of the main content.

---

*This file is the canonical design spec for implementing the CV UI. Update `docs/design.md` if the visual details change.*