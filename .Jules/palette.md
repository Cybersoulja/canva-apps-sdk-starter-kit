## 2024-04-16 - Reusable External Link Pattern
**Learning:** For accessibility and clear UX, the standard pattern for buttons opening external links in the Canva Apps SDK is to use the `OpenInNewIcon` from `@canva/app-ui-kit`.
**Action:** Always add `icon={OpenInNewIcon}` and `iconPosition="end"` to `<Button>` components that trigger `requestOpenExternalUrl` or link outwards.
