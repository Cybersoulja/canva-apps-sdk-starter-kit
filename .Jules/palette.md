## 2026-05-03 - External Link Pattern
**Learning:** External links should visually indicate that they navigate away from the current context. Using an icon is a standard pattern in this design system.
**Action:** When adding buttons that link to external URLs, always use the `OpenInNewIcon` imported from `@canva/app-ui-kit` with `iconPosition="end"`.
## 2026-05-04 - Async Loading States
**Learning:** The App UI Kit `Button` component natively supports a `loading` prop which should be leveraged for async actions.
**Action:** When implementing asynchronous operations triggered by user actions (like uploading or submitting), always track the promise lifecycle (e.g. `try/finally`) and bind the component's `loading` state to ensure immediate visual feedback is provided.
## 2024-05-13 - Add OpenInNewIcon to external links
**Learning:** `OpenInNewIcon` is available in `@canva/app-ui-kit` and using `icon={OpenInNewIcon}` and `iconPosition="end"` on `Button` components that trigger `requestOpenExternalUrl` is a great reusable pattern for providing users visual feedback that an action will open a link in a new tab/window, setting proper expectations.
**Action:** Consistently add this icon pattern to all buttons across the app that navigate to external URLs.
## 2026-05-28 - Bind Promise Lifecycles to Button Loading States
**Learning:** Canva design SDK functions that modify the design (like  or ) are asynchronous. When triggered via UI components, the lack of immediate visual feedback can confuse users or lead to duplicate clicks before the operation completes.
**Action:** Always track the promise lifecycle of async Canva Apps SDK functions (using a  block to update a boolean state) and bind it to the  prop of the  `Button` component. This provides a built-in loading spinner that communicates progress clearly and blocks further interaction.
## 2024-05-28 - Bind Promise Lifecycles to Button Loading States
**Learning:** Canva design SDK functions that modify the design (like `addElement` or `addPage`) are asynchronous. When triggered via UI components, the lack of immediate visual feedback can confuse users or lead to duplicate clicks before the operation completes.
**Action:** Always track the promise lifecycle of async Canva Apps SDK functions (using a `try/finally` block to update a boolean state) and bind it to the `loading` prop of the `@canva/app-ui-kit` `Button` component. This provides a built-in loading spinner that communicates progress clearly and blocks further interaction.
