# FacadeOps Design QA

## Evidence

- Source visual truth: `qa/reference-warm-sandstone.png`
- Desktop implementation: `qa/implementation-desktop.png`
- Mobile implementation: `qa/implementation-mobile.png`
- Side-by-side full-view comparison: `qa/design-comparison.png`
- Focused browser captures: `qa/implementation-top.png`, `qa/implementation-middle.png`, `qa/implementation-lower.png`, `qa/implementation-end.png`

## Capture normalization

- Source: 856 × 1838 px, representing the selected warm-sandstone desktop direction.
- Desktop implementation: four browser-rendered captures at a 1440 × 1000 CSS-pixel viewport, stitched into a 1440 × 3350 px page image without density scaling.
- Comparison: source retained at 856 × 1838 px; implementation proportionally normalized to 790 × 1838 px and placed beside it.
- Mobile implementation: 390 × 844 CSS-pixel viewport and 390 × 844 px capture.
- State: English, default landing-page state, no modal open.

## Findings

- No actionable P0, P1, or P2 visual mismatch remains.
- Typography: DM Serif Display and Manrope reproduce the editorial display/sans hierarchy, weights, wrapping, and density of the reference.
- Spacing and layout: hero split, four-step process, annotated evidence section, benefit trio, panoramic closing section, and dark footer preserve the reference rhythm and proportions.
- Colors and tokens: warm cream, sandstone, dark teal, restrained terracotta, and muted ink match the selected direction with accessible foreground contrast.
- Image quality: three project-specific generated photographic assets match the Luanda, architectural, warm-documentary art direction. No placeholder or CSS-generated imagery remains.
- Copy: public text retains the validation-stage framing and avoids claims that FacadeOps is licensed, insured, operating, safer, or providing engineering diagnoses.
- Intentional differences: the implementation adds an EN/PT switch and uses slightly more conservative claim language than the visual reference.

## Comparison history

- Initial browser-rendered comparison found no P0/P1/P2 visual differences requiring a code revision.
- Desktop focused captures verified the hero, process, evidence annotations, benefits, closing panorama, and footer.
- Mobile capture verified the responsive image-first hero and readable content stack without horizontal overflow.

## Interaction verification

- English and Portuguese switches update the visible copy and the document language.
- The synthetic record opens from every primary record call to action in both languages.
- Record and interview dialogs keep keyboard focus inside the dialog, close with Escape, and restore focus to the trigger.
- The validation form states before entry that it does not transmit or store data; its local-only success state was verified.
- Mobile navigation and the record dialog were checked at 390 × 844 CSS pixels without horizontal overflow.
- The final browser console contained no warnings or errors.
- Production build, four hosting-contract tests, and the dependency audit pass.

final result: pass
