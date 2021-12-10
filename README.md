# Tronion UI

Run dev server:

```bash
npm run dev
```

Home page is in `pages/index.js`, the user pages are in `pages/account` directory, theme file `utils/theme.js`, modal component logic is already set from previous project and integrated with nextjs in the `_document.js` file. classNames are used to create variants for the reusable components. Environment variables are configured in `config/index.js`.

Authentication state logic and api endpoints are mostly from previous projects.

### NOTE

- All images have a wrapper for styling as conventional styling can't be used on the [next/image](https://nextjs.org/docs/api-reference/next/image) component that has to be used in place of `<img>` in a nextjs app.

#### Features

- **Styled Components** for styling.
- **React Icons (Font Awesome)**.
- **React Toastify** from previous project.
