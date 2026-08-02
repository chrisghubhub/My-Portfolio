# GitHub Pages Deployment · V2.3

## Deployment record

- Version: **V2.3 Final Patch**
- Status: **Deployed and verified**
- Content commit SHA: `70b342874642473df71651995be48e57056b7da2`
- Deployment verification time: `2026-08-02 20:47:32 +08:00`
- Production URL: https://chrisghubhub.github.io/My-Portfolio/projects/agentic-ai-investment-deck/
- GitHub repository: `chrisghubhub/My-Portfolio`
- GitHub Pages branch: `main`

`Content commit SHA` identifies the immutable V2.3 deck revision. This deployment record is committed immediately afterward as a documentation-only revision, so it intentionally records the content commit rather than self-referencing its own commit.

## V2.3 scope

- Preserved the 18-slide structure, public path and core industry views.
- Simplified Page 15 to NOW / GTLB / PATH with Company / Catalyst / Metric only.
- Rebuilt Page 17 as a three-position qualitative portfolio table and removed mechanical weights or scores.
- Kept ratings consistent: NOW Core Long, GTLB Satellite Long, PATH Relative Underweight.
- Standardized Page 18, source index and README to script-derived source statistics.
- Improved Chinese typography, table density and low-height desktop behavior.
- Updated CSS and JavaScript asset cache-busting to `?v=2.3`.

## Source-statistics record

| Metric | V2.3 |
|---|---:|
| Source records in research log | 34 |
| Unique documents / URLs | 33 |
| Source records cited in the 18-slide deck | 27 |
| Primary-source share among cited evidence | 85.2% |
| Verified claim records | 24 |

Source records may exceed unique documents because one document can support multiple evidence items.

## Acceptance checks

- 18 main slides retained.
- Production content and cache-busted assets confirmed online.
- Desktop checked at `1600×900`: slide titles `38.4px`, minimum H3 `17px`, tabular numerals enabled.
- Low-height desktop checked at `1440×720`: `22px / 46px` slide padding, `30px` title and `8px` source-footer offset applied; active slide did not overflow.
- Mobile checked at `390×844`: no body-level horizontal overflow.
- Chinese text below 14px outside permitted labels/footers: `0` in the desktop audit.
- Page 15 contains three company catalyst rows; Page 17 contains three qualitative portfolio positions and no percentage weights.
- Page 18 reports `34 / 33 / 85.2% / 24` with 27 cited source records.
- `style.css`, `deck.js`, two charts, three source files, README, DEPLOYMENT and four XLSX models returned HTTP `200`.

## Known limitations

- Research remains frozen at the stated `2026-07-29` cut-off and `2026-07-28` market close; V2.3 intentionally adds no new research.
- Browser print previews can vary slightly by operating system and print driver, although the deck includes a fixed 16:9 print stylesheet.
- Scenario targets remain editable author-model outputs rather than live market prices or investment advice.

## Published structure

```text
projects/agentic-ai-investment-deck/
├── index.html
├── style.css
├── deck.js
├── README.md
├── DEPLOYMENT.md
└── assets/
    ├── charts/
    └── downloads/
```

`assets/downloads/` contains the source index, source log, claim-evidence matrix and four editable Excel models.