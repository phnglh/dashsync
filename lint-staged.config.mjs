export default {
    'apps/web/**/*.{js,jsx,ts,tsx}': [
      'pnpm --filter web lint',
      'pnpm --filter web lint:fix',
    ],
    'apps/api/**/*.py': [
      'poetry run ruff --fix',
      'poetry run black',
    ],
  };
  