## 2024-05-14 - Add icon to external links
**Learning:** For external links in Canva apps, adding an `OpenInNewIcon` at the end of the button provides necessary context to users that they will leave the current app context.
**Action:** Always add `icon={OpenInNewIcon} iconPosition="end"` to `Button` components that trigger an external URL navigation (e.g. `requestOpenExternalUrl`).
