module.exports = function() {
  return {
    env: {
      type: 'node',
      runner: 'node',
    },

    files: ['src/**/*.ts', '!src/**/*.spec.ts', '!src/**/*.test.ts'],

    tests: ['src/**/*.spec.ts', 'src/**/*.test.ts'],

    testFramework: 'jest',
  };
};
