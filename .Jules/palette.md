## 2024-04-29 - External Link Pattern
**Learning:** For Canva Apps SDK, when an action will navigate away from the current app context (such as opening external documentation), a clear visual indicator should be provided so users aren't surprised.
**Action:** Use `icon={OpenInNewIcon}` and `iconPosition="end"` on `Button` components that trigger external URLs via `requestOpenExternalUrl` or similar methods.
