## 2026-05-03 - External Link Pattern
**Learning:** External links should visually indicate that they navigate away from the current context. Using an icon is a standard pattern in this design system.
**Action:** When adding buttons that link to external URLs, always use the `OpenInNewIcon` imported from `@canva/app-ui-kit` with `iconPosition="end"`.
## 2026-05-04 - Async Loading States
**Learning:** The App UI Kit `Button` component natively supports a `loading` prop which should be leveraged for async actions.
**Action:** When implementing asynchronous operations triggered by user actions (like uploading or submitting), always track the promise lifecycle (e.g. `try/finally`) and bind the component's `loading` state to ensure immediate visual feedback is provided.
## 2024-05-13 - Add OpenInNewIcon to external links
**Learning:** `OpenInNewIcon` is available in `@canva/app-ui-kit` and using `icon={OpenInNewIcon}` and `iconPosition="end"` on `Button` components that trigger `requestOpenExternalUrl` is a great reusable pattern for providing users visual feedback that an action will open a link in a new tab/window, setting proper expectations.
**Action:** Consistently add this icon pattern to all buttons across the app that navigate to external URLs.
## 2024-05-13 - Add loading state to async generic buttons
**Learning:** Adding an async loading state to standard functional buttons (not just specific form submissions or external links) significantly enhances the perceived responsiveness and feedback of the UI.
**Action:** Always wrap standard async button callbacks in a `try/finally` block to reliably provide a `loading` state to standard `<Button>` components while tasks process.
