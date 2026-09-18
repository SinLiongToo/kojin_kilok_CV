---
name: portfolio-sync
description: >-
  Guidelines and procedures for synchronizing UI changes, styles, scripts, and
  bilingual i18n translations across the three portfolio HTML representations
  (index.html, resume_Masa_standalone.html, and resume_Masa_Hsin_Lung_Tu.html)
  while strictly preserving base64 asset integrity.
---

# Portfolio Synchronization & i18n Workflow

## 1. Overview
The Masa Portfolio codebase consists of modular source files and bundled standalone distributions:
- `index.html`: Links externally to `style.css` and `script.js`.
- `resume_Masa_standalone.html`: Fully self-contained offline distribution with inline styles and 22 base64 embedded images.
- `resume_Masa_Hsin_Lung_Tu.html`: Print and archival single-file distribution with inline styles and 21 base64 embedded images.

## 2. Synchronization Checklist

When adding or modifying features:
1. **Styles**:
   - Update `style.css`.
   - Propagate new or modified CSS rules into the `<style>` block of both `resume_Masa_standalone.html` and `resume_Masa_Hsin_Lung_Tu.html`.
2. **Scripts & Data**:
   - Update `script.js` (including databases and the `I18N_DICT` dictionary).
   - In both standalone files, replace the JavaScript logic (from `// --- Internationalization (i18n) Engine ---` to the end of `<script>`) with the updated logic from `script.js`.
3. **HTML Structure & Attributes**:
   - Apply markup changes and `data-i18n*` attributes across `index.html`, `resume_Masa_standalone.html`, and `resume_Masa_Hsin_Lung_Tu.html`.
4. **Base64 Verification**:
   - Verify that base64 counts remain exactly:
     - `resume_Masa_standalone.html`: 22 occurrences.
     - `resume_Masa_Hsin_Lung_Tu.html`: 21 occurrences.
5. **Documentation**:
   - Update `CHANGELOG.md` with new version entry.
   - Update `README.md` features and architecture sections.

## 3. Bilingual i18n Protocol
- Always provide both `zh` (Traditional Chinese) and `en` (English) keys in `I18N_DICT`.
- For the Taiwanese Literature tab (`#lit`), adhere to the mother-tongue preservation guideline:
  - Translate headings, subtitles, and UI buttons.
  - Keep poems, prose, novels, lyrics, and literary quotes in Taiwanese/Hanlo original text.
