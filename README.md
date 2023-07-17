# PoC Next app using React-Aria

**Stack:**

- Next@12.2.4
- React@18.2
- Typescript@4.7.4
- React-aria@3.26.0

[Local server :3000](http://localhost:3000/)

### Issues found:

> ready - started server on 0.0.0.0:3000, url: http://localhost:3000
> info - SWC minify release candidate enabled.
> https://nextjs.link/swcmin It looks like you're trying to use
> TypeScript but do not have the required package(s) installed. Please
> install @types/react and @types/node by running: `yarn add --dev
@types/react @types/node` If you are not trying to use TypeScript,
> please remove the tsconfig.json file from your package root (and any
> TypeScript files in your pages directory).

Solved ✅

---

> ./node*modules/@internationalized/date/dist/import.mjs:1:0
> Module not found: Can't resolve '@swc/helpers/*/\_class_private_field_init'
> Import trace for requested module:
> ./node_modules/@react-aria/i18n/dist/real-module.mjs
> ./node_modules/@react-aria/i18n/dist/import.mjs
> ./node_modules/@react-aria/select/dist/module.js
> ./components/select/ReactAriaSelect.tsx
> ./pages/index.tsx
> https://nextjs.org/docs/messages/module-not-found

[Found that issue related](https://github.com/vercel/next.js/issues/48593)

---

> warning: Pattern ["@react-aria/i18n@^3.8.0"] is trying to unpack in the same destination "C:\\Users\\erica\\AppData\\Local\\Yarn\\Cache\\v6\\npm-@react-aria-i18n-3.8.0-fe0c6b9ad9fe1e8a139c4d514d4240164c699bf8-integrity\\node_modules\\@react-aria\\i18n" as pattern ["@react-aria/i18n@^3.3.6","@react-aria/i18n@^3.3.6","@react-aria/i18n@^3.8.0","@react-aria/i18n@^3.8.0","@react-aria/i18n@^3.8.0"]. This could result in non-deterministic behavior, skipping.
> warning: @react-aria/button@3.4.1" has incorrect peer dependency "react@^16.8.0 || ^17.0.0-rc.1".
> warning: @react-aria/focus@3.5.2" has incorrect peer dependency "react@^16.8.0 || ^17.0.0-rc.1".
> warning: @react-aria/overlays@3.7.5" has incorrect peer dependency "react@^16.8.0 || ^17.0.0-rc.1".
> warning: @react-aria/overlays@3.7.5" has incorrect peer dependency "react-dom@^16.8.0 || ^17.0.0-rc.1".
> warning: @react-aria/select@3.6.2" has incorrect peer dependency "react@^16.8.0 || ^17.0.0-rc.1".
> warning: @react-aria/select@3.6.2" has incorrect peer dependency "react-dom@^16.8.0 || ^17.0.0-rc.1".
> warning: @react-stately/collections@3.3.6" has incorrect peer dependency "react@^16.8.0 || ^17.0.0-rc.1".
> warning: @react-stately/select@3.1.5" has incorrect peer dependency "react@^16.8.0 || ^17.0.0-rc.1".

`yarn add @swc/helpers` did not help

```bash
Module not found: Can't resolve '@swc/helpers/_/_class_private_field_init'

Import trace for requested module:
./node_modules/@react-aria/i18n/dist/real-module.mjs
./node_modules/@react-aria/i18n/dist/import.mjs
./node_modules/@react-aria/overlays/dist/import.mjs
./components/select/ReactAriaPopover.tsx
./components/select/ReactAriaSelect.tsx
./pages/index.tsx

https://nextjs.org/docs/messages/module-not-found
```

Still lurking how to solve those above 🚧
