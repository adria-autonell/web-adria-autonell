# Design Map

Source: https://adria-autonell.com/ca (1440×900, single page)

## Spacing Scale
4 · 8 · 12 · 16 · 24 · 40 · 112 px (base 4px; 112px vertical padding per section)

## Font Hierarchy
- Hero name — 136px / 500 / Newsreader Variable / tracking -4.76px
- Section h2 — 36px / 500 / Newsreader Variable
- h3 — 20px / 500 / Newsreader Variable
- Body — 16–17px / 400 / IBM Plex Sans
- Meta — 12px / 400 / IBM Plex Mono

## Color Palette
- #F6F1E7 background (34% area)
- #EDE6D8 surface (24.7%)
- #D6CCB9 rules
- #1F1D1A primary text and primary button
- #46423C secondary text
- #67615A metadata
- #B0390F accent (<1% area)

## Image Ratios
- Project screenshot 1.6:1

## Component Tokens
- Radius 4px (buttons, tags), 9999px (timeline dots)
- No shadows
- Grid 12 columns, 32px gutter, 1152px max width; label / body / margin = 3 / 6 / 3

---

# Taste DNA

### Accent as a reading marker
- **Trigger**: When a content-heavy personal site needed an identity colour
- **Decision**: Confine #B0390F to section numbers, underlines and active states over brand-coloured fills
- **Reason**: A colour that appears rarely tells the reader where they are each time it does appear
- **Evidence**: accent <1% of visible area; primary button is ink, not accent

### Paper without depth
- **Trigger**: When grouping status panels, timelines and project rows
- **Decision**: Two flat surface tones and 1px rules over elevated cards
- **Reason**: The notebook metaphor collapses the moment anything floats above the page
- **Evidence**: 0 box-shadows; #EDE6D8 covers 24.7%; process grid built from 1px gaps

### Metadata speaks monospace
- **Trigger**: When labelling dates, numbers, versions and tags
- **Decision**: IBM Plex Mono 12px over small sans captions
- **Reason**: A log-like voice separates annotation from narrative and fits a systems profile
- **Evidence**: 128 mono elements; 12px is the most frequent size

### The name owns the first screen
- **Trigger**: When composing the hero
- **Decision**: 136px serif name with 0.6em indent over a moderate headline plus photo
- **Reason**: The first question is who this is; a typographic answer avoids stock imagery
- **Evidence**: h1 136px; 36px → 136px jump; no hero image
