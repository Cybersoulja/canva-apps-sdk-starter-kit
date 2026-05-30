## 2026-05-03 - External Link Pattern
**Learning:** External links should visually indicate that they navigate away from the current context. Using an icon is a standard pattern in this design system.
**Action:** When adding buttons that link to external URLs, always use the `OpenInNewIcon` imported from `@canva/app-ui-kit` with `iconPosition="end"`.
## 2026-05-04 - Async Loading States
**Learning:** The App UI Kit `Button` component natively supports a `loading` prop which should be leveraged for async actions.
**Action:** When implementing asynchronous operations triggered by user actions (like uploading or submitting), always track the promise lifecycle (e.g. `try/finally`) and bind the component's `loading` state to ensure immediate visual feedback is provided.
## 2024-05-13 - Add OpenInNewIcon to external links
**Learning:** `OpenInNewIcon` is available in `@canva/app-ui-kit` and using `icon={OpenInNewIcon}` and `iconPosition="end"` on `Button` components that trigger `requestOpenExternalUrl` is a great reusable pattern for providing users visual feedback that an action will open a link in a new tab/window, setting proper expectations.
**Action:** Consistently add this icon pattern to all buttons across the app that navigate to external URLs.

## 2024-05-14 - Design Modifications Loading States
**Learning:** Functions that modify the design (like `addElementAtPoint` and `addElementAtCursor`) are asynchronous. Users might click multiple times if there's no immediate feedback while the element is being added.
**Action:** Always wrap design SDK modifications in `try/finally` blocks and bind them to a `loading` state on the triggering UI component (like `Button`) to prevent duplicate additions and provide visual feedback.
