import type { SheriffConfigurablePlugins } from '@sherifforg/types';

export const sheriffStartingOptions: SheriffConfigurablePlugins = {
  react: false,
  lodash: false,
  remeda: false,
  next: false,
  astro: false,
  playwright: false,
  jest: false,
  vitest: false,
} as const;

export const configCombinationDefaultValues = {
  react: true,
  lodash: true,
  remeda: true,
  next: true,
  astro: true,
  playwright: true,
  jest: false,
  vitest: true,
} as const;

export const allJsExtensions = 'js,mjs,cjs,ts,mts,cts';

export const allJsxExtensions = 'jsx,tsx,mtsx,mjsx';

export const supportedFileTypes = `**/*{${allJsExtensions},${allJsxExtensions},astro}`;

const messages = {
  NO_ACCESS_MODIFIER:
    'Avoid access modifiers. In Javascript modules there is no need to limit developer access to properties.',
} as const;

export const testsFilePatterns = [
  `**/*.{test,spec}.{${allJsExtensions}}`,
  `**/tests/**/*.{${allJsExtensions}}`,
  `**/__tests__/**/*.{${allJsExtensions}}`,
] as const;

export const ignores = [
  '**/node_modules/**',
  '**/dist/**',
  '**/build/**',
  '**/artifacts/**',
  '**/coverage/**',
  'eslint.config.{js,mjs,cjs}', // we currently cannot lint the eslint.config.js itself. It is currently only provided as a .js file and this config currently only supports .ts files. Therefore, eslint.config.js can only be re-enabled once this config support pure .js files too, or the ESLint team support the eslint.config.ts file.
] as const;

export const baseNoRestrictedSyntaxRules = [
  {
    selector: 'LabeledStatement',
    message:
      'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
  },
  {
    selector: 'ForInStatement',
    message:
      'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
  },
  {
    selector: "Identifier[name='Reflect']",
    message:
      'Avoid the Reflect API. It is a very low-level feature that has only rare and specific use-cases if building complex and hacky libraries. There is no need to use this feature for any kind of normal development.',
  },
  {
    selector: "Identifier[name='Proxy']",
    message: 'Avoid Proxy.',
  },
  {
    selector: "BinaryExpression[operator='in']",
    message:
      "Avoid the 'in' operator. In real-world scenarios there is rarely a need for this operator. For most usecases, basic property access is all you need. For every other case, use the Object.hasOwn() or the Object.prototype.hasOwnProperty() method. In the really niche cases where you actually need to check for the existence of a property both in the object itself AND in it's prototype chain, feel free to disable this rule with the inline eslint-disable syntax.",
  },
  {
    selector: "PropertyDefinition[accessibility='public']",
    message: messages.NO_ACCESS_MODIFIER,
  },
  {
    selector: "PropertyDefinition[accessibility='protected']",
    message: messages.NO_ACCESS_MODIFIER,
  },
  {
    selector: "PropertyDefinition[accessibility='private']",
    message: messages.NO_ACCESS_MODIFIER,
  },
  {
    selector: "Identifier[name='PropTypes']",
    message: 'Avoid PropTypes. Use Typescript instead.',
  },
  {
    selector: "Identifier[name='propTypes']",
    message: 'Avoid PropTypes. Use Typescript instead.',
  },
  {
    selector: "UnaryExpression[operator='delete']",
    message: 'Avoid the "delete" operator. Use omit() instead.',
  },
  {
    selector: 'TSEnumDeclaration',
    message: 'Avoid enums.',
  },
  {
    selector: 'ClassDeclaration',
    message: 'Avoid classes. Use functions and objects instead.',
  },
  {
    selector: 'ClassExpression',
    message: 'Avoid classes. Use functions and objects instead.',
  },
];

export const CLIOptionsCatalog = {
  filter: {
    type: 'string',
    description:
      'Filter for specific workspace. More info here https://www.eslint-config-sheriff.dev/docs/monorepo-support#setup-with-npm-init-sherifforgconfig',
  },
  typescript: {
    type: 'boolean',
    description:
      'eslint.config.ts boilerplate will be added without asking it in the wizard.',
  },
  prettier: {
    type: 'boolean',
    description:
      'Prettier boilerplate will be added without asking it in the wizard.',
  },
  'install-deps': {
    type: 'boolean',
    description:
      'Should the dependencies be installed at the end of the wizard or not.',
    default: true,
  },
  'no-fail': {
    type: 'boolean',
    description:
      'If true: when a inconsistency is found, it will be reported as a warning. If false: when a inconsistency is found, it will be reported as an error and the process will fail with exit code 1.',
    default: false,
  },
  debug: {
    type: 'boolean',
    description: 'Enables verbose logging.',
    default: false,
  },
  'ignore-react': {
    type: 'boolean',
    description: 'Skips React checks (react, react-dom, next).',
    default: false,
  },
  'ignore-next': {
    type: 'boolean',
    description: 'Skips Next.js checks.',
    default: false,
  },
  'ignore-lodash': {
    type: 'boolean',
    description: 'Skips lodash (lodash, lodash-es) checks.',
    default: false,
  },
  'ignore-remeda': {
    type: 'boolean',
    description: 'Skips remeda checks.',
    default: false,
  },
  'ignore-vitest': {
    type: 'boolean',
    description: 'Skips vitest checks.',
    default: false,
  },
  'ignore-jest': {
    type: 'boolean',
    description: 'Skips jest checks.',
    default: false,
  },
  'ignore-playwright': {
    type: 'boolean',
    description: 'Skips playwright (playwright, @playwright/test) checks.',
    default: false,
  },
  'ignore-astro': {
    type: 'boolean',
    description: 'Skips astro checks.',
    default: false,
  },
} as const;
