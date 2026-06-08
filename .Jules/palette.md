 ## 2026-04-12 - Add loading state to openExternalUrl action\n**Learning:** The `Button` component in `@canva/app-ui-kit` supports a `loading` prop which is useful to provide feedback when triggering async operations such as opening external links.\n**Action:** Remember to check for missing loading states in async UI actions.
## 2026-05-03 - External Link Pattern
**Learning:** External links should visually indicate that they navigate away from the current context. Using an icon is a standard pattern in this design system.
**Action:** When adding buttons that link to external URLs, always use the `OpenInNewIcon` imported from `@canva/app-ui-kit` with `iconPosition="end"`.
## 2026-05-04 - Async Loading States
**Learning:** The App UI Kit `Button` component natively supports a `loading` prop which should be leveraged for async actions.
**Action:** When implementing asynchronous operations triggered by user actions (like uploading or submitting), always track the promise lifecycle (e.g. `try/finally`) and bind the component's `loading` state to ensure immediate visual feedback is provided.
## 2024-05-13 - Add OpenInNewIcon to external links
**Learning:** `OpenInNewIcon` is available in `@canva/app-ui-kit` and using `icon={OpenInNewIcon}` and `iconPosition="end"` on `Button` components that trigger `requestOpenExternalUrl` is a great reusable pattern for providing users visual feedback that an action will open a link in a new tab/window, setting proper expectations.
**Action:** Consistently add this icon pattern to all buttons across the app that navigate to external URLs.
## 2024-06-01 - Add loading state to async design modifications
**Learning:** Canva design SDK functions that modify the design (such as `addElement`) are asynchronous and return Promises. Failing to reflect this in UI elements like buttons leads to missing visual feedback during execution.
**Action:** Always track the Promise lifecycle (e.g., via `try/finally`) and bind it to the `loading` state of `@canva/app-ui-kit`'s Button component.
## 2026-06-06 - requestOpenExternalUrl Loading State Anti-pattern
**Learning:** The `requestOpenExternalUrl` API opens a confirmation dialog *instantly*, but its Promise does not resolve until the user interacts with that dialog (confirming or cancelling). Using a `loading` state spinner on the button triggering this action creates a confusing UX, as the system appears to be processing while it is actually waiting for user input.
**Action:** Do NOT use the `@canva/app-ui-kit` Button's `loading` prop for actions that trigger `requestOpenExternalUrl`. Reserve `loading` states for actual asynchronous processing like network requests, asset uploads, or other SDK operations (like `addElement` or `requestFontSelection`).
