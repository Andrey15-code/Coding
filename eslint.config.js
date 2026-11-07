import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  
  js.configs.recommended,

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", 
      globals: {
        ...globals.browser, 
        ...globals.node,    
      },
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }], 
      "eqeqeq": ["error", "always"], 
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }], 
      "no-duplicate-imports": "error", 
      "no-undef": "error", 
    },
  },

  
  eslintConfigPrettier,
];
