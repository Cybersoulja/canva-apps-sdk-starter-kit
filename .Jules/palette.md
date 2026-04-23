## 2024-04-23 - External Link Indicators
**Learning:** In the Canva Apps SDK, there is a reusable pattern for indicating external links. Buttons that open external URLs (using `requestOpenExternalUrl`) should include the `OpenInNewIcon` from `@canva/app-ui-kit` with `iconPosition="end"` to provide clear visual feedback to users that they will be navigated away from the current view.
**Action:** When adding or reviewing buttons/links that open external URLs, ensure this visual indicator is present.
