# Learning Portal UI Application

## Overview
This project is a responsive UI-based learning portal built using semantic HTML5, custom CSS, and Tailwind CSS. The application includes login, dashboard, profile, and gallery modules.

---

## Framework Chosen
**Tailwind CSS**

Tailwind CSS was selected to:
- Enable rapid UI development
- Implement responsive layouts easily
- Apply consistent spacing, typography, and styling
- Reduce the need for excessive custom CSS

---

## Responsive Strategy
The application follows a **mobile-first design approach**.

### Techniques used:
- Tailwind responsive utilities (`sm:`, `md:`)
- Flexible layouts using Grid and Flexbox
- Responsive navigation that adapts between vertical (mobile) and horizontal (desktop) layouts
- Max-width containers to prevent layout stretching on large screens

Example:
```html
grid grid-cols-1 md:grid-cols-2
