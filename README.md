# SONNET

A collaborative web design and development project showcasing modern design principles and implementation.

## Live Demo

Visit the deployed project: [https://sonnet-blue.vercel.app/](https://sonnet-blue.vercel.app/)

## Week 1 Presentation

Here: [https://www.canva.com/design/DAHAR45mQIk/MdzxUPqeZ9UZahkHa4hlqg/edit](https://www.canva.com/design/DAHAR45mQIk/MdzxUPqeZ9UZahkHa4hlqg/edit)

---

## Week 2 Presentation

Here: [https://www.canva.com/design/DAHBKG5AyL4/jFfYFtQun9lq300hvGqayg/edit](https://www.canva.com/design/DAHBKG5AyL4/jFfYFtQun9lq300hvGqayg/edit)

---

## Week 4 Presentation

Here: [https://www.canva.com/design/DAHCi0zH_tg/OLKAv0l969MFOtG11Tr_0Q/edit?utm_content=DAHCi0zH_tg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton](https://www.canva.com/design/DAHCi0zH_tg/OLKAv0l969MFOtG11Tr_0Q/edit?utm_content=DAHCi0zH_tg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

---

## Genevieve's case study article:
https://medium.com/@kelechigenevieveagugua/sonnet-building-a-romantic-responsive-web-experience-9294115995e8

## Michael's case study article:
https://medium.com/@michaelomonedo001/a-case-study-on-sonnet-2f7f1a4d92c7

## Project Overview

**Sonnet** is a minimal web experience that allows users to share songs paired with personal notes in a beautifully designed, distraction-free environment. The platform creates a dedicated, intentional space for musical expression that feels special and intimate.

### The Problem

People often associate meaningful moments and emotions with music, especially in romantic relationships. However, there is no simple, lightweight way to share a song along with a personal note in a dedicated space that feels special—most resort to sending plain links via chat, which lack emotional impact and context.

### The Solution

Sonnet solves this by providing:
- A clean, romantic interface for composing song-note combinations
- Embedded Spotify player integration with rich cover art
- Unique, shareable links for each creation
- A distraction-free viewing experience that highlights both the music and the message

### Target Audience

- Couples and romantic partners seeking meaningful ways to communicate
- People in long-distance relationships
- Music lovers who associate songs with memories and emotions
- Users who enjoy thoughtful, digital gifting experiences

### Core Features

- **Song Sharing**: Share songs from Spotify with embedded playback
- **Personal Notes**: Add handwritten-style messages to accompany each song
- **Unique Links**: Generate shareable URLs for each song-note combination
- **Beautiful UI**: Clean, romantic, night-themed design aesthetic
- **Recipient View Page**: Dedicated page (`view.html`) for viewing shared notes
- **No Account Required**: Recipients can view and listen without signing up

---

## Project Documentation

- **Case Study**: [View Case Study](https://docs.google.com/document/d/15X_3DtUJAiMyS-o46CSNJ9M9vR2FN7ia93LIqPqBHb4/edit?usp=sharing)
- **Design Documentation**: [View Design Doc](https://docs.google.com/document/d/1zwVRbC8uryUu1RaW0j-f-TYvx-Y95S5pBJiQAvoa3Bs/edit?tab=t.0)
- **JavaScript Implementation**: `README-JS.md`

---

## Technical Stack

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Custom properties (CSS variables), Flexbox, Grid
- **Vanilla JavaScript**: URL query parsing and preview rendering (`app.js`)

### Design System
- **Architecture**: Modular CSS with separation of concerns
  - `base.css`: Design tokens, resets, and utility classes
  - `layout.css`: Grid systems and page structure
  - `component.css`: Reusable component styles
  - `pages.css`: Page-specific styling
- **Font**: Shantell Sans (Google Fonts)
- **Icons**: Font Awesome
- **Color Scheme**: Dark romantic theme with pink accents

### Deployment
- **Platform**: Vercel
- **URL**: [https://sonnet-blue.vercel.app/](https://sonnet-blue.vercel.app/)

---

## JavaScript Functionality

When loaded on `preview.html`, `app.js` adds lightweight client-side behavior for the preview experience:

- Reads form values passed as URL query parameters from `create.html`.
- Checks for missing values and shows an alert if any are absent.
- Injects `from`, `to`, and `message` content into the preview markup (expects elements with IDs `from`, `to`, and `message` on `preview.html`).

For a detailed breakdown, see `README-JS.md`.

---

## Project Structure

```
SONNET/
├── index.html              # Landing page
├── login.html              # User login page
├── signup.html             # User registration page
├── create.html             # Note composition page
├── preview.html            # Song-note preview page
├── view.html               # Song-note view page for recipients
├── app.js                  # Logic and functionality
├── images/                 # Image assets
│   ├── hero-image.png
│   ├── pen.png
│   ├── search.png
│   └── send.png
├── styles/                 # CSS architecture
│   ├── base.css           # Design tokens & utilities
│   ├── layout.css         # Page layouts & grid systems
│   ├── component.css      # Reusable components
│   └── pages.css          # Page-specific styles
└── README.md              # Project documentation
```

---

## CSS Architecture

The project follows a modular CSS architecture implementing the DRY (Don't Repeat Yourself) principle:

### base.css
- CSS custom properties (design tokens)
- Global resets and base styles
- Utility classes for common patterns
- Typography base styles

### layout.css
- Grid and flexbox layouts
- Responsive breakpoints
- Section structures
- Navigation and footer layouts

### component.css
- Buttons and form elements
- Cards and list items
- Navigation components
- Reusable UI patterns

### pages.css
- Landing page specific styles
- Form-centered layouts
- Preview page styling
- Page-unique modifications

---

## Styling Guide

### CSS Custom Properties (Design Tokens)

The project uses CSS custom properties (variables) to maintain consistency and enable easy theme modifications. All variables are defined in `base.css` under the `:root` selector.

#### Color System

**Background Colors**
- `--background: #1a0b0e` - Deep burgundy, main background color creating a romantic midnight atmosphere
- `--card: #2a1218` - Slightly lighter burgundy for elevated surfaces and cards
- `--sidebar: #16070a` - Darkest shade for navigation and footer sections
- `--muted: #2b151c` - Subtle background for list items and secondary surfaces

**Foreground Colors**
- `--foreground: #fdf5f6` - Off-white text color for high readability on dark backgrounds
- `--muted-foreground: #a38b8e` - Muted mauve for secondary text, labels, and descriptions

**Brand Colors**
- `--primary: #f22b6d` - Vibrant pink for primary actions, links, and CTAs
- `--accent: #ff8da1` - Lighter pink for highlights and hover states

**Interface Colors**
- `--border: #3a1a27` - Subtle borders that blend with the dark theme
- `--input: #2d1418` - Input field backgrounds for form elements

#### Spacing System

The spacing system follows an 8px base unit for consistent rhythm:

- `--spacing-sm: 8px` (0.5rem) - Tight spacing for inline elements
- `--spacing-md: 16px` (1rem) - Default spacing between elements
- `--spacing-lg: 24px` (1.5rem) - Section spacing and card padding
- `--spacing-xl: 32px` (2rem) - Large gaps between major sections
- `--spacing-2xl: 64px` (4rem) - Extra-large spacing for page margins

#### Border Radius

Rounded corners create a softer, more friendly aesthetic:

- `--radius-sm: 4px` - Subtle rounding for small elements
- `--radius-md: 8px` - Standard rounding for inputs and small components
- `--radius-lg: 12px` - Primary rounding for cards, buttons, and containers
- `--radius-xl: 18px` - Pronounced rounding for special emphasis

#### Typography Scale

Relative sizing using em units for scalability:

- `--text-sm: 1em` - Small text and captions
- `--text-nm: 1.5em` - Normal body text
- `--text-md: 2em` - Section headings
- `--text-lg: 3em` - Page headings
- `--text-xl: 4em` - Hero headings

**Font Weights**
- `--font-weight-regular: 400` - Body text
- `--font-weight-bold: 700` - Headings and emphasis

**Font Family**
- `--font-family-body: Shantell Sans` - Handwritten-style font that evokes personal, intimate communication

#### Layout Constraints

Container widths ensure readable line lengths and proper composition:

- `--width-container: 1200px` - Maximum width for main content areas
- `--width-container-sm: 900px` - Constrained width for focused content like forms

### Design Token Usage

Variables are used consistently throughout the codebase:

```css
/* Example: Card component */
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
}

/* Example: Primary button */
.btn-primary {
  background: var(--primary);
  color: var(--primary-foreground);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-lg);
}
```

This approach ensures:
- **Consistency**: Same values used across all components
- **Maintainability**: Update once, changes everywhere
- **Themability**: Easy to create alternative color schemes
- **Accessibility**: Semantic color naming for clear intent

---

## Project Contributions

### Genevieve Agugua

- **Landing Page Styling**: Complete HTML structure and CSS implementation
- **Login Authentication Page**: HTML structure and CSS styling implementation
- **Create Note Page**: HTML structure and CSS styling implementation
- **Components.css**: Style structure for reusable component classes
- **Pages.css**: Style structure for page-specific styling
- **Deployment to Vercel**: Set up and managed project deployment
- **Contribution Sheet Compilation**: Documented team contributions

### Michael Omonedo

- **Sign Up Authentication Page**: HTML structure and CSS styling implementation
- **Preview Page**: HTML structure and CSS styling implementation
- **CSS Layout Architecture**: Embedded base, layout, component and pages design files
- **Base.css**: Style structure for design system and tokens
- **Layout.css**: Style structure for grid and page structure
- **Image Generation**: Created images for 4 added pages
- **README.md Compilation**: Project documentation and overview

---

## Design Principles

### Visual Design
- **Dark Theme**: Romantic midnight aesthetic
- **Typography**: Handwritten-style font (Shantell Sans)
- **Color Palette**: Deep burgundy background with pink accents
- **Spacing**: Consistent rhythm using CSS custom properties

### User Experience
- **Simplicity**: Minimal steps to create and share
- **Accessibility**: Semantic HTML and focus states
- **Responsiveness**: Mobile-first approach
- **Performance**: Lightweight, no heavy frameworks

### Code Quality
- **DRY Principle**: Reusable utility classes
- **Modular CSS**: Separation of concerns
- **Semantic HTML**: Meaningful markup
- **Maintainability**: Clear naming conventions

---

## Getting Started

1. Clone the repository
2. Open `index.html` in a web browser
3. Navigate through the pages to explore the design

For deployment:
```bash
# Deploy to Vercel
vercel --prod
```
