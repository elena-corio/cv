# Design Specification — CV Layout & Styling

**Updated:** 2026-01-12 (Inter typography system, 350px fixed sidebar, responsive mobile overlay)

---

## Current Design System

### Typography
- **Font Family:** Inter (Google Fonts, wght: 400, 500, 700)
- **System:** Modern, clean, highly readable sans-serif
- **Weights Used:**
  - 400 (Regular) - Body text, descriptions
  - 500 (Medium) - Metadata, uppercase labels, company/dates
  - 700 (Bold) - Headers, titles, primary focus

### Color Palette
- **Sidebar Background:** #E6E6E6 (light grey)
- **Section Headers:** #F0F0F0 (lighter grey background)
- **Primary Text:** #000 (black) for all body and heading content
- **Secondary Text:** #888 (grey) for dates, proficiency, metadata
- **Content Area:** #fff (white background)

### Layout & Sidebar

**Structure:**
- Two-column flex layout (desktop)
- Single-column with overlay sidebar (mobile ≤768px)

**Desktop (≥769px):**
- Sidebar: Fixed 350px width, left column
- Content: Flex 1, main column
- Both use 100vh height with overflow handling

**Mobile (≤768px):**
- Sidebar: Full-width overlay (100vw), fixed positioning, hidden by default
- Content: Full width, below hamburger menu
- Hamburger toggle button to show/hide sidebar
- Close button inside sidebar overlay
- Z-index: 1000 for sidebar overlay

**Sidebar Structure:**
- `#sidebar-container`: Uses `flex: 0 0 350px` with `justify-content: space-between`
- `.sidebar-top`: Profile image, name, title, summary (top section)
- `.sidebar-bottom`: Contact section pinned to bottom via `margin-top: auto;`

**Sidebar Content:**
- Profile Image: Centered, max-height 220px, grayscale filter, `object-fit: contain`
- Sidebar Padding: 40px (desktop), 20px (mobile)
- Content Padding: 40px (desktop), 20px (mobile)

### Desktop Typography Sizes

**Sidebar (400/500/700 weights):**
- Name: 30px Bold (700)
- Title: 12px Regular (400)
- Summary: 12px Regular (400), line-height 1.6, justified
- Contact label: 13px Bold (700)
- Contact details: 12px Medium (500), uppercase
- References note: 12px Regular (400)

**Main Content:**
- Section Headers: 24px Semi-bold (600), #F0F0F0 background, full-width
- Job/Degree/Skill/Achievement Titles: 13px Bold (700)
- Company/Institution/Dates: 12px Medium (500), grey text
- Body text (bullets): 13px Regular (400)
- Proficiency/Details: 12px Medium (500), grey text

### Mobile Typography Sizes (≤768px)

**Sidebar (as overlay):**
- Name: 26px Bold (700)
- Title: 12px Regular (400)
- Summary: 11px Regular (400)
- Contact details: 11px Regular (400)

**Main Content:**
- Section Headers: 20px Semi-bold (600)
- Job/Degree/Skill/Achievement Titles: 12px Bold (700)
- Company/Institution/Dates: 10px Medium (500)
- Body text (bullets): 12px Regular (400)
- Proficiency/Details: 10px Medium (500)

### Spacing & Layout
- **Section Spacing:** 35px margin-bottom between major sections
- **Header Background:** #F0F0F0, full-width bars
- **List Item Padding:** 24px left padding (bullets)
- **Text Alignment:** Justified on desktop (summary only), left-aligned on mobile
- **Mobile Sidebar:** Fixed 100vh height, flex-based positioning, z-index: 1000
- **Contact Anchoring:** `margin-top: auto;` on `.sidebar-bottom`

---

## Implementation Status

✅ **Font System:** Inter (Google Fonts, 400/500/700 weights) - Modern, professional, highly legible
✅ **Sidebar:** Fixed 350px width on desktop, responsive full-width overlay on mobile (≤768px)
✅ **Typography:** Complete hierarchy with proper weight hierarchy
✅ **Color:** Professional grey palette (#E6E6E6, #F0F0F0, #888)
✅ **Spacing:** Balanced whitespace with 35px section gaps
✅ **Responsive:** Mobile overlay sidebar with hamburger toggle (≤768px)
✅ **Accessibility:** Semantic HTML, proper contrast ratios, readable text sizes

---

## Responsive Breakpoints

- **Desktop:** 769px+ (two-column layout, fixed 350px sidebar)
- **Tablet/Mobile:** ≤768px (single-column, full-width overlay sidebar with hamburger menu)
  - Sidebar hidden by default, toggled via hamburger button
  - Close button inside sidebar overlay
  - Content area takes full width
  - Font sizes reduced for smaller screens
  - Reduced padding and margins (20px instead of 40px)

---

## Technical Details

### CSS Classes & Structure
- **Container:** `.container` (flex, 100vh)
- **Sidebar:** `#sidebar-container` (flex column, 350px fixed on desktop)
- **Content:** `.content` (flex: 1, overflow-y: auto)
- **Sections:** `.section-title` (24px on desktop, 20px on mobile)
- **Jobs/Items:** `.job-title`, `.degree-title`, `.skill-category`, `.achievement-title` (13px desktop, 12px mobile, Bold)
- **Metadata:** `.job-company`, `.job-dates`, `.institution`, `.dates`, `.proficiency` (12px desktop, 10px mobile, Medium, grey)
- **Body Text:** `.job-description li`, `.subjects li`, `.skill-list li`, `.achievement-list li` (13px desktop, 12px mobile, Regular)

### Responsive Behavior
- **Hamburger Button:** Shows on mobile (≤768px), hides on desktop
- **Sidebar Toggle:** `#sidebar-container.open` class controls visibility
- **Padding:** 40px → 20px on mobile
- **Font Scaling:** Consistent proportional scaling across breakpoints
- **Section Spacing:** 35px margin maintained at all sizes

---

*Design spec synchronized with CSS implementation (2026-01-12). All font sizes, weights, and responsive behavior match current codebase.*
