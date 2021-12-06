# Trunion UI

Run dev server:

```bash
npm run dev
# or
yarn dev
```

Home page is in `pages/index.js`, the user pages are in `pages/account` directory. Modal component logic is already set from previous project, only redesign has to be done.

All new components to be created are only variants of reusable components in the `components/commons`, directory except for:
- Dashboard side bar
- Dashboard task list and buttons
- ICO countdown card

**NOTE**
- All images have a wrapper for styling as conventional styling can't be used on the [next/image](https://nextjs.org/docs/api-reference/next/image) component that has to be used for in plcae of <img> in a nextjs app.

### Features

- **Styled Components** for styling.
- **React Icons (Font Awesome)***.
- **React Toastify** from previous project.
