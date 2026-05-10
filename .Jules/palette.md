## 2026-05-03 - External Link Pattern
**Learning:** External links should visually indicate that they navigate away from the current context. Using an icon is a standard pattern in this design system.
**Action:** When adding buttons that link to external URLs, always use the `OpenInNewIcon` imported from `@canva/app-ui-kit` with `iconPosition="end"`.
## 2026-05-04 - Async Loading States
**Learning:** The App UI Kit `Button` component natively supports a `loading` prop which should be leveraged for async actions.
**Action:** When implementing asynchronous operations triggered by user actions (like uploading or submitting), always track the promise lifecycle (e.g. `try/finally`) and bind the component's `loading` state to ensure immediate visual feedback is provided.

## 2024-05-10 - Add loading state to external link button
**Learning:** `requestOpenExternalUrl` often pauses to ask users for confirmation before navigating. Using `loading` state immediately indicates the interaction was registered and the app is awaiting user confirmation. The `Button` component in `@canva/app-ui-kit` has a built in `loading` prop that can easily accommodate this.
**Action:** Consistently bind async API calls that launch modals or navigation (like `requestOpenExternalUrl`) to `loading` states in UI Kit `Button`s via `try...finally` blocks.
