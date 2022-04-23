module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  settings: {
    react: {
      pragma: "React", // Pragma to use, default to "React"
      fragment: "Fragment", // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: "detect",
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  ignorePatterns: [
    "**/vendor/*.js",
    "dist/**/*.*",
    ".eslintrc.js",
    "webpack.config.js",
  ],
  rules: {
    "no-unused-vars": "warn",
    "no-console": "off",
    "react/no-unescaped-entities": "off",
    "import/no-extraneous-dependecies": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "func-names": "off",
    "no-param-reassign": "off",
    "linebreak-style": "off",
    "import/prefer-default-export": "off",
    "react/jsx-curly-newline": "off",
    "react/jsx-props-no-spreading": "off",
    "no-misleading-character-class": "off",
    "react/jsx-one-expression-per-line": "off",
    "spaced-comment": "off",
  },
};
