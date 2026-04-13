## 2026-04-13 - External Link Visual Cues
**Learning:** The `@canva/app-ui-kit` provides an `OpenInNewIcon` which is highly effective as a standard visual cue for buttons that trigger external navigation (e.g., via `requestOpenExternalUrl`). Users expect an explicit indication when leaving the current context.
**Action:** When implementing buttons or links that navigate away from the app context, utilize `icon={OpenInNewIcon}` and `iconPosition="end"` to ensure predictability and improve accessibility.
