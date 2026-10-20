# Welcome to erbiker.dev

This is my personal homepage, built with Next.js 16, React 19, Tailwind CSS 4, and Motion. It's hosted with Vercel at [https://www.erbiker.dev](https://www.erbiker.dev).

## Running Locally

Use Node.js 24 and the pnpm version pinned in `package.json`:

```bash
nvm use
corepack enable
pnpm install --frozen-lockfile
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the site.

Run the checks and production build with:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Type checking uses TypeScript 7. The `typescript` dependency supplies Microsoft's
TypeScript 6 compatibility API for Next.js and ESLint; `@typescript/native` supplies
the TypeScript 7 `tsc` command, following the [official side-by-side setup](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/#running-side-by-side-with-typescript-6.0).
