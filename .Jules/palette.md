## 2026-05-03 - External Link Pattern
**Learning:** External links should visually indicate that they navigate away from the current context. Using an icon is a standard pattern in this design system.
**Action:** When adding buttons that link to external URLs, always use the `OpenInNewIcon` imported from `@canva/app-ui-kit` with `iconPosition="end"`.
## 2026-05-04 - Async Loading States
**Learning:** The App UI Kit `Button` component natively supports a `loading` prop which should be leveraged for async actions.
**Action:** When implementing asynchronous operations triggered by user actions (like uploading or submitting), always track the promise lifecycle (e.g. `try/finally`) and bind the component's `loading` state to ensure immediate visual feedback is provided.
## 2024-05-24 - Loading state for external URL navigation
**Learning:** `requestOpenExternalUrl` prompts the user with a confirmation dialog before opening the link. During this time, the async request remains pending. Without a loading indicator, users might double-click or feel the app is unresponsive.
**Action:** Always provide visual feedback (e.g., `loading={true}` on the Button) for asynchronous actions that open confirmation dialogs like `requestOpenExternalUrl`.
