# GitHub Pages Deployment · V2.2

## Deployment record

- Version: **V2.2 Hotfix**
- Status: **Deployed and verified**
- Content commit SHA: `5c92362a4a90dcee2204f0b396801947ede5c11b`
- Deployment verification time: `2026-07-30 01:00:41 +08:00`
- Production URL: https://chrisghubhub.github.io/My-Portfolio/projects/agentic-ai-investment-deck/
- GitHub repository: `chrisghubhub/My-Portfolio`
- GitHub Pages branch: `main`
- Local V2.1 backup: `projects/agentic-ai-investment-deck_backup_v2.1/`

`Content commit SHA` is the immutable V2.2 deck revision. This deployment record is committed immediately afterward as a documentation-only revision, so it intentionally records the content commit rather than attempting to self-reference its own commit hash.

## V2.2 scope

- Preserved the 18-slide structure and original public path.
- Reconciled relative portfolio ratings with valuation and confidence.
- Standardized NOW / GTLB / PATH as Core Long / Satellite Long / Relative Underweight.
- Replaced mechanical position percentages with a four-step qualitative discipline.
- Recomputed and standardized source statistics from the CSV research logs.
- Raised Chinese body and explanatory text sizes; restored a clear H3 hierarchy.
- Added low-height desktop and mobile layout handling.
- Added `?v=2.2` cache-busting to CSS and JavaScript asset references.

## Source-statistics record

| Metric | V2.2 |
|---|---:|
| Source IDs in research log | 34 |
| Unique documents / URLs | 33 |
| Sources cited in the 18-slide deck | 27 |
| Primary-source share among cited evidence | 85.2% |
| Verified claim records | 24 |

Source IDs may exceed unique documents because one document can support multiple evidence records or appear under multiple research tags.

## Acceptance checks

- 18 main slides retained.
- Desktop checked at `1600×900`.
- Low-height desktop checked at `1440×720`: no slide content crossed the source footer.
- Mobile checked at `390×844`: no body-level horizontal overflow.
- Chinese text below 14px outside permitted labels/footers: `0`.
- Minimum H3 size: `17px`.
- Previous / next, overview, appendix drawer, appendix tabs, and keyboard shortcuts checked.
- Print handler and print stylesheet present.
- `style.css`, `deck.js`, two charts, three source files, and four XLSX models returned HTTP `200`.

## Known limitations

- Research remains frozen at the stated `2026-07-29` cut-off and `2026-07-28` market close; V2.2 intentionally adds no new research.
- Browser print previews can vary slightly by operating system and print driver, although the deck includes a fixed 16:9 print stylesheet.
- Scenario targets remain editable author-model outputs rather than live market prices or investment advice.

## Published structure

```text
projects/agentic-ai-investment-deck/
├── index.html
├── style.css
├── deck.js
├── DEPLOYMENT.md
└── assets/
    ├── charts/
    └── downloads/
```

`assets/downloads/` contains the source index, source log, claim-evidence matrix, and four editable Excel models.
