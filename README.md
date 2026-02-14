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
- **No Account Required**: Recipients can view and listen without signing up

---

## Project Documentation

- **Case Study**: [View Case Study](https://docs.google.com/document/d/15X_3DtUJAiMyS-o46CSNJ9M9vR2FN7ia93LIqPqBHb4/edit?usp=sharing)
- **Design Documentation**: [View Design Doc](https://docs.google.com/document/d/1zwVRbC8uryUu1RaW0j-f-TYvx-Y95S5pBJiQAvoa3Bs/edit?tab=t.0)

---

## Technical Stack

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Custom properties (CSS variables), Flexbox, Grid
- **Vanilla JavaScript**: (Planned for form interactions)

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

## Project Structure

```
SONNET/
├── index.html              # Landing page
├── login.html              # User login page
├── signup.html             # User registration page
├── create.html             # Note composition page
├── preview.html            # Song-note preview page
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
