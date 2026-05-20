## 2026-05-03 - External Link Pattern
**Learning:** External links should visually indicate that they navigate away from the current context. Using an icon is a standard pattern in this design system.
**Action:** When adding buttons that link to external URLs, always use the `OpenInNewIcon` imported from `@canva/app-ui-kit` with `iconPosition="end"`.
## 2026-05-04 - Async Loading States
**Learning:** The App UI Kit `Button` component natively supports a `loading` prop which should be leveraged for async actions.
**Action:** When implementing asynchronous operations triggered by user actions (like uploading or submitting), always track the promise lifecycle (e.g. `try/finally`) and bind the component's `loading` state to ensure immediate visual feedback is provided.
## 2024-05-13 - Add OpenInNewIcon to external links
**Learning:** `OpenInNewIcon` is available in `@canva/app-ui-kit` and using `icon={OpenInNewIcon}` and `iconPosition="end"` on `Button` components that trigger `requestOpenExternalUrl` is a great reusable pattern for providing users visual feedback that an action will open a link in a new tab/window, setting proper expectations.
**Action:** Consistently add this icon pattern to all buttons across the app that navigate to external URLs.
## 2024-05-20 - Async SDK Actions Require Loading Feedback
**Learning:** Canva design SDK functions like `addElementAtPoint` (used via `useAddElement`) are asynchronous operations. Although they may seem fast, failing to handle their promise lifecycle can leave the UI unresponsive during the operation.
**Action:** Always wrap Canva design modification calls (e.g., adding elements, inserting text) in a `try/finally` block that manages an `isAdding` state. Bind this state to the `loading` prop of the triggering `<Button>` for immediate visual feedback.
