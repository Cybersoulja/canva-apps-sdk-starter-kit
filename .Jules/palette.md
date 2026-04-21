## 2024-05-18 - Visual Cue for External Links
**Learning:** Users benefit from visual indicators when an action will navigate them away from the current context, especially within an embedded app environment like the Canva editor.
**Action:** Always include an `OpenInNewIcon` (or equivalent) with `iconPosition="end"` on Buttons or Links that trigger external navigation. This leverages the existing `@canva/app-ui-kit` pattern for consistent UX.
