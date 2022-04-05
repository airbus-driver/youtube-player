module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "quotes": ["error", "double"],
    "indent": ["warn", 2, {
      ignoredNodes: ["TemplateLiteral"],
    }],
    "linebreak-style": "off",
    "max-len": "off",
  },
};
