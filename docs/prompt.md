# Prompts & Decision Log

## Key Decisions & Requirements

### Initial Goal
Convert a static CV design (`web.jpg`) into a responsive HTML/CSS/JS website.

### Design Specifications
- **Layout:** Two-column flex layout
  - Left sidebar (30%): #E6E6E6 background, profile image, name, summary, contact info
  - Right content (70%): white background, experience, education, skills, achievements
- **Typography:** Futura font stack (Book 400, Light 300, Heavy 700)
- **Color Palette:**
  - Sidebar: #E6E6E6
  - Section headers: #F0F0F0
  - Primary text: #000
  - Secondary text: #888
- **Profile Image:** `picture.jpg` (to be placed in assets/images/)
- **Responsive:** Mobile-first approach with breakpoints at 768px and 480px

### Content Structure
1. **Experience:** 2 roles with descriptions (Software Engineer @ Gropyus, Structural Engineer @ B+G Ingenieure)
2. **Education:** 3 entries (MaCAD @ IAAC, Master's @ Pisa, Research @ CNR)
3. **Skills:** 7 categories (Languages, Visual Scripting, Programming, Environmental, Structural, Design, Office)
4. **Achievements:** Certifications, Publications, Awards

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
├── src/
│   ├── html/
│   │   └── index.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── script.js
│   └── assets/images/
│       ├── picture.jpg
│       └── web.jpg
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
