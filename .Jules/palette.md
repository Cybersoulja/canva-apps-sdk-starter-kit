## 2026-05-03 - External Link Pattern
**Learning:** External links should visually indicate that they navigate away from the current context. Using an icon is a standard pattern in this design system.
**Action:** When adding buttons that link to external URLs, always use the `OpenInNewIcon` imported from `@canva/app-ui-kit` with `iconPosition="end"`.
## 2026-05-04 - Async Loading States
**Learning:** The App UI Kit `Button` component natively supports a `loading` prop which should be leveraged for async actions.
**Action:** When implementing asynchronous operations triggered by user actions (like uploading or submitting), always track the promise lifecycle (e.g. `try/finally`) and bind the component's `loading` state to ensure immediate visual feedback is provided.
## 2024-05-12 - Reusable External Link Pattern\n**Learning:** The `@canva/app-ui-kit` provides an `OpenInNewIcon` component which is the standard indicator for actions leading to external destinations. Applying this directly to Buttons alongside `iconPosition="end"` offers a consistent and expected user experience for external navigation.\n**Action:** Use `OpenInNewIcon` with `iconPosition="end"` on Buttons whenever they trigger an `openExternalUrl` action.
