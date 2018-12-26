# Dojo TypeScript-Jest

Dojo playground with TypeScript & Jest.

[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Known Vulnerabilities](https://snyk.io/test/github/gaetanmaisse/dojo-typescript-jest/badge.svg?targetFile=package.json)](https://snyk.io/test/github/gaetanmaisse/dojo-typescript-jest?targetFile=package.json)

## Getting started

- Clone the repository

```bash
git clone https://github.com/gaetanmaisse/dojo-typescript-jest.git
```

- Install dependencies

```bash
npm install
```

or

```bash
yarn install
```

- Just code and have fun!

## Available NPM scripts

Below is a list of all the scripts this project has available:

| NPM Script    | Description                                                                            |
| ------------- | -------------------------------------------------------------------------------------- |
| `build`       | Runs Typescript compiler                                                               |
| `build:watch` | Runs Typescript compiler in watch mode                                                 |
| `test`        | Runs tests using Jest test runner with --verbose and --coverage activated              |
| `test:watch`  | Runs tests in watch mode (run only tests related to changed files based on git status) |
| `lint:tslint` | Runs TSLint on project files                                                           |
