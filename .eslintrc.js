module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "google",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    project: ["tsconfig.json"],
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "cypress"],
  rules: {
    quotes: ["error", "double"],
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "cypress/no-force": "warn",
    "no-unused-vars": "warn",
    "require-jsdoc": "warn",
    "max-len": ["error", { code: 120 }],
  },
};
