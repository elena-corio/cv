# Prompts & Decision Log

## Key Decisions & Requirements

### Initial Goal
Convert a static CV design (`web.jpg`) into a responsive HTML/CSS/JS website.

### Design Specifications
- **Layout:** Two-column flex layout
  - Left sidebar (350px fixed): #E6E6E6 background, profile image, name, summary, contact info
  - Right content (flex-1): white background, experience, education, skills, achievements
- **Typography:** Inter font stack (Light 300, Regular 400, Bold 700)
- **Color Palette:**
  - Sidebar: #E6E6E6
  - Section headers: #F0F0F0
  - Primary text: #000
  - Secondary text: #888
- **Profile Image:** `picture.jpg` (to be placed in assets/images/)
- **Responsive:** Mobile-first approach with breakpoint at 768px (full-width overlay sidebar with hamburger menu)

### Content Structure
1. **Experience:** 2 roles with descriptions (Software Engineer @ Gropyus, Structural Engineer @ B+G Ingenieure)
2. **Education:** 3 entries (MaCAD @ IAAC, Master's @ Pisa, Research @ CNR)
3. **Skills:** 7 categories (Languages, Visual Scripting, Programming, Environmental, Structural, Design, Office)
4. **Achievements:** Certificates, Publications, Awards

### Development Approach
- **Static HTML** for initial phase (no frameworks)
- **Pure CSS** for styling (no preprocessors)
- **Vanilla JavaScript** for interactivity with placeholders for future features
- **Print-optimized** styling for PDF export
- **Accessibility-ready** semantic HTML structure

### Project Organization
**Folder Structure:**
```
cv/
├── index.html              # Homepage
├── cv.html                 # CV page
├── portfolio.html          # Portfolio page
├── components/             # Reusable components
│   ├── header.html         # Navigation header
│   └── sidebar.html        # Sidebar profile
├── assets/
│   ├── css/                # Modular stylesheets
│   ├── js/                 # JavaScript
│   └── images/             # Profile pictures
├── tests/
│   └── cv.test.js
├── docs/
│   ├── prompt.md
│   ├── log.md
│   ├── features.md
│   └── architecture.md
├── util/
│   └── appendLog.js
├── .gitignore
├── .eslintrc.js
├── .prettierrc.json
├── jest.config.js
├── package.json
├── package-lock.json
├── README.md
└── LICENSE
```

### npm & Testing
- **Package Manager:** npm (Node.js)
- **Testing Framework:** Jest
- **Linting:** ESLint + Stylelint
- **Formatting:** Prettier
- **npm Scripts:** start, dev, test, test:watch, test:coverage, lint, lint:css, build, log

### Notes
- web.png and web.pdf removed (not needed)
- All paths updated to reference new folder structure
- Responsive design prioritizes mobile first
- Testing setup ready (Jest configured with example tests)
- Linting & formatting configs in place (.eslintrc.js, .prettierrc.json)
- package-lock.json will be auto-generated when `npm install` is run
