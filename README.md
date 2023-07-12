# PoC Next app using React-Aria

**Stack:**

- Next@12.2.4
- React@18.2
- Typescript@4.7.4
- React-aria@3.26.0

[Local server :3000](http://localhost:3000/)

## Follow through

`yarn add react-aria`

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

> Module not found: Can't resolve
> '@swc/helpers/\_/\_class_private_field_init' Import trace for requested
> module: ./node_modules/@react-aria/datepicker/dist/import.mjs
> ./node_modules/react-aria/dist/import.mjs ./pages/index.tsx

Still lurking how to solve 🚧

---

> Type 'MutableRefObject<undefined>' is not assignable to type
> 'LegacyRef<HTMLButtonElement> | undefined'. Type
> 'MutableRefObject<undefined>' is not assignable to type
> 'RefObject<HTMLButtonElement>'. Types of property 'current' are
> incompatible. Type 'undefined' is not assignable to type
> 'HTMLButtonElement | null'.ts(2322)
>
> index.d.ts(137, 9): The expected type comes from property 'ref' which
> is declared here on type
> 'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
> HTMLButtonElement>'

Still lurking how to solve 🚧
