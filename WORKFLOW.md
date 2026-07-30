# FE-03: AI-Assisted Workflow Comparison

## Feature

The feature implemented for this exercise was a Settings page with the following fields:

- Full Name
- Email
- Password

The goal was to compare two different AI-assisted development workflows by implementing the same feature twice.

---

## Round One

For the first implementation, I intentionally used a very simple prompt:

> "Build a settings form with name, email and password."

The AI generated a basic form that fulfilled the requested functionality. It contained the required fields and a save button, but the implementation was relatively simple. Validation, accessibility improvements, reusable components, and automated testing were not included. Most of the review effort was manual, and I accepted the generated code with minimal guidance.

---

## Round Two

For the second implementation, I started a completely new AI session and followed a structured workflow.

Instead of immediately generating code, I first asked the AI to analyze the project and create an implementation plan. The initial plan was too generic and unrelated to the requested Settings page, so I rejected it and requested a feature-specific plan. After reviewing the improved plan, I approved the implementation.

The final implementation included:

- React Hook Form
- Zod validation
- Reusable FormField component
- Accessible labels and ARIA attributes
- Unit tests using Vitest and React Testing Library
- Verification steps before completion

---

## Correctness

The second implementation was significantly more reliable. Form validation was handled through React Hook Form and Zod, reducing manual validation logic. Invalid email addresses, empty fields, and passwords shorter than eight characters were handled consistently.

---

## Accessibility

Round Two improved accessibility by connecting labels to inputs and using `aria-invalid` and `aria-describedby` for validation feedback. The form became more keyboard-friendly and aligned better with accessibility best practices.

---

## Edge Cases

Round Two explicitly handled:

- Empty name field
- Invalid email format
- Password shorter than eight characters

These cases were not handled in the first implementation.

---

## AI Mistakes I Caught

During the exercise, I identified multiple AI mistakes instead of accepting every suggestion.

The first planning response generated a generic React application refactoring plan instead of a Settings page implementation. I reviewed the plan, rejected it, and requested a more focused implementation plan.

Later, the AI introduced an ESLint dependency that was incompatible with the project's ESLint version. Instead of forcing the installation, I identified the dependency conflict during verification and asked the AI to correct the implementation.

---

## Review Effort

Round Two required more effort at the beginning because I reviewed the implementation plan, clarified requirements, and verified the generated code. However, this reduced debugging later and resulted in cleaner architecture, better validation, reusable components, and automated tests.

---

## Conclusion

This exercise demonstrated that providing clear requirements, reviewing the AI's plan, verifying the generated code, and correcting mistakes produces a higher-quality result than relying on a single vague prompt. The structured workflow required more planning but reduced overall review effort and produced a more maintainable implementation.