// lint-staged.config.mjs
export default {
    'apps/web/**/*.{js,jsx,ts,tsx}': [
      'cd apps/web && pnpm lint',
      'cd apps/web && pnpm lint:fix',
    ],
    'apps/api/**/*.py': [
      'cd apps/api && poetry run ruff --fix',
      'cd apps/api && poetry run black .',
    ],
  };
  