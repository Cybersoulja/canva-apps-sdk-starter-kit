## 2024-04-27 - External Link Indication
**Learning:** External links should use the `OpenInNewIcon` to visually indicate that clicking them will navigate away from the current context. This is an important accessibility and UX pattern. In `@canva/app-ui-kit`, this is done by adding `icon={OpenInNewIcon} iconPosition="end"` to Buttons or Links.
**Action:** Always add `OpenInNewIcon` with `iconPosition="end"` to elements (like Buttons) that trigger external URL navigation, ensuring users know the action will open a new tab/window.
