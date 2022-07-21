module.exports = {
<<<<<<< HEAD
=======
  "require-jsdoc": ["error", {
    "require": {
      "FunctionDeclaration": true,
      "MethodDefinition": false,
      "ClassDeclaration": false,
      "ArrowFunctionExpression": false,
      "FunctionExpression": false
    }
  }],
>>>>>>> b84d5bb62e3c7323848af43d4b1667d2de820b13
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
<<<<<<< HEAD
  'rules': {
  },
};
=======
  'rules': {},
};
>>>>>>> b84d5bb62e3c7323848af43d4b1667d2de820b13
