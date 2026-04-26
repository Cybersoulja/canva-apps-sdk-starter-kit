## 2024-05-18 - External Link Visual Indicator
**Learning:** External links should provide clear visual feedback to users that they will navigate away from the current context. Using `OpenInNewIcon` from `@canva/app-ui-kit` is an effective pattern.
**Action:** Always add `icon={OpenInNewIcon}` and `iconPosition="end"` to Buttons that open external URLs (e.g. using `requestOpenExternalUrl`).
