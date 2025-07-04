# Cybersecurity Portfolio - Replit Configuration

## Overview

This is a cybersecurity-themed personal portfolio website for Raman Dubey. The project showcases a hacker/terminal aesthetic with interactive elements including a Matrix rain background effect, loading animations, and typewriter effects. The site is built as a single-page application (SPA) using vanilla HTML, CSS, and JavaScript with no backend dependencies.

## System Architecture

### Frontend Architecture
- **Single Page Application (SPA)**: All content is contained within a single HTML file with JavaScript-driven navigation
- **Vanilla JavaScript**: No frontend frameworks or libraries used, pure JavaScript implementation
- **CSS Custom Properties**: Extensive use of CSS variables for theming and maintainability
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced features added via JS

### Technology Stack
- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Modern CSS features including custom properties, flexbox, and grid
- **Vanilla JavaScript**: ES6+ features including classes, modules, and modern APIs
- **Canvas API**: Used for Matrix rain background effect
- **Web APIs**: Intersection Observer, localStorage for theme persistence

## Key Components

### 1. Matrix Rain Background
- **Purpose**: Provides cybersecurity-themed animated background
- **Implementation**: HTML5 Canvas with custom JavaScript animation
- **Features**: Responsive to window resize, performance optimized

### 2. Loading Screen
- **Purpose**: Creates engaging entry experience with ASCII art
- **Features**: Progress bar simulation, typewriter effect, smooth transitions

### 3. Theme System
- **Purpose**: Toggle between dark and stealth modes
- **Implementation**: CSS custom properties with JavaScript state management
- **Persistence**: Uses localStorage to remember user preference

### 4. Navigation System
- **Purpose**: Single-page navigation with smooth scrolling
- **Features**: Terminal-style prompts, active section highlighting, mobile responsive

### 5. Animation System
- **Purpose**: Progressive disclosure of content on scroll
- **Implementation**: Intersection Observer API for performance
- **Features**: Typewriter effects, slide-in animations, parallax scrolling

## Data Flow

### Client-Side State Management
1. **Theme State**: Managed in localStorage, applied via CSS custom properties
2. **Navigation State**: Tracked via scroll position and URL hash
3. **Animation State**: Controlled by Intersection Observer callbacks
4. **Loading State**: Managed through Promise-based loading sequence

### Event-Driven Architecture
- **Scroll Events**: Trigger navigation updates and parallax effects
- **Resize Events**: Recalculate canvas dimensions and responsive layouts
- **User Interactions**: Theme toggles, form submissions, navigation clicks

## External Dependencies

### CDN Resources
- **Font Awesome 6.0.0**: Icon library for UI elements
- **Google Fonts**: Fira Code and Share Tech Mono for monospace typography

### No Backend Dependencies
- **Static Hosting**: Designed for deployment on static hosting platforms
- **No Database**: All content is hardcoded in HTML/JavaScript
- **No API Integrations**: Contact form uses mailto or client-side handling

## Deployment Strategy

### Static Site Deployment
- **Target Platforms**: GitHub Pages, Netlify, Vercel, or any static hosting
- **Build Process**: No build step required, direct file serving
- **Assets**: All assets are self-contained or loaded from CDN

### Performance Considerations
- **Lazy Loading**: Implemented for non-critical animations
- **Canvas Optimization**: Matrix effect includes performance throttling
- **CSS Optimization**: Uses efficient selectors and minimal repaints

### Browser Compatibility
- **Modern Browsers**: Targets ES6+ compatible browsers
- **Progressive Enhancement**: Core content accessible without JavaScript
- **Responsive Design**: Mobile-first approach with breakpoints

## User Preferences

Preferred communication style: Simple, everyday language.

## Deployment

**Live Website:** https://rmndubey25.github.io/
- Successfully deployed to GitHub Pages
- Repository: rmndubey25/rmndubey25.github.io
- Automatic deployments on every commit to main branch

## Changelog

Changelog:
- July 04, 2025. Initial setup - Created hacker-style portfolio with Matrix background, terminal aesthetics, and cybersecurity theme
- July 04, 2025. Added blog section - Added "Digital Thoughts & Exploits" blog section with 6 sample posts covering XSS, OSINT, WAF bypass, cybersecurity journey, tool reviews, and memes. Maintains consistent terminal/hacker theme with status badges, tech tags, and terminal command previews.
- July 04, 2025. Fixed blog functionality - Implemented working "Read More" links, functional pagination, and full markdown support for blog posts with terminal-style reader interface
- July 04, 2025. Created blog management system - Easy content management requiring only editing blog-data.js file to add new posts, includes comprehensive guide
- July 04, 2025. Successfully deployed to GitHub Pages - Live at https://rmndubey25.github.io/ with automatic updates on repository changes