# Masa Hsin-Lung Tu Portfolio - Codebase Rules & Guidelines

## 1. Multi-Representation Synchronization Rule (Crucial)
This repository maintains three active HTML representations of the portfolio:
1. `index.html`: The modular base version referencing external `style.css` and `script.js`.
2. `resume_Masa_standalone.html`: Single-file self-contained bundle with inline styles and base64 embedded assets.
3. `resume_Masa_Hsin_Lung_Tu.html`: Print and archival single-file bundle with inline styles and base64 embedded assets.

**Rule**: Any modification to UI structure, styles, or JavaScript behavior must be systematically and bidirectionally synchronized across all three files:
- External style changes in `style.css` must be reflected in the `<style>` blocks of both standalone HTML files.
- External script changes in `script.js` must be reflected in the `<script>` blocks of both standalone HTML files.
- HTML tag/attribute changes in `index.html` must be reflected in the body markup of both standalone HTML files.

## 2. Base64 Asset Integrity Rule
- `resume_Masa_standalone.html` contains 22 base64 embedded images.
- `resume_Masa_Hsin_Lung_Tu.html` contains 21 base64 embedded images.
- **NEVER** truncate, re-encode, or blindly overwrite base64 image strings.
- Always verify base64 image counts before and after editing standalone HTML files.

## 3. Bilingual Internationalization (i18n) Rules
- Supported languages: Traditional Chinese (`zh`, default) and English (`en`).
- All UI text must be registered in `I18N_DICT` inside `script.js` and standalone `<script>` blocks.
- HTML elements must be tagged with appropriate attributes:
  - `data-i18n="<key>"`: Text content (`textContent`).
  - `data-i18n-html="<key>"`: Rich HTML markup (`innerHTML`).
  - `data-i18n-placeholder="<key>"`: Input placeholder text.
  - `data-i18n-title="<key>"`: Tooltip / title attribute.
- **Taiwanese Literature Mother-Tongue Principle**:
  - Main section headings, subheadings, and action buttons in the literature tab (`#lit`) must be translated into English.
  - Literary works (poetry, novels, memoirs, lyrics, and literary descriptions) must remain in their original Taiwanese / Hanlo mother-tongue text to preserve cultural authenticity.

## 4. Documentation & Version Control
- Every feature or styling enhancement must be documented in:
  - `CHANGELOG.md` with version tag (e.g., `[v1.1.x] - YYYY-MM-DD`).
  - `README.md` in relevant feature sections.
- Git commit messages must follow conventional commits: `feat: ...`, `fix: ...`, `style: ...`.
