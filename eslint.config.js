module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest"
    },
    rules: {
      "no-unused-vars": "warn",
      "eqeqeq": "error",
      "curly": "error",
      "semi": ["error", "always"]
    }
  }
];
