# Dojo TypeScript

Dojo playground with TypeScript.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Known Vulnerabilities](https://snyk.io/test/github/gaetanmaisse/dojo-typescript-jest/badge.svg?targetFile=package.json)](https://snyk.io/test/github/gaetanmaisse/dojo-typescript-jest?targetFile=package.json)
[![Build Status](https://github.com/gaetanmaisse/dojo-typescript-jest/actions/workflows/ci.yml/badge.svg)](https://github.com/gaetanmaisse/dojo-typescript-jest/actions/workflows/ci.yml)
[![Renovate](https://img.shields.io/badge/maintained_with-Renovate-brightgreen.svg?logo=renovatebot)](https://renovatebot.com)

## Getting started

- Clone the repository

```bash
git clone https://github.com/gaetanmaisse/dojo-typescript-jest.git
```

- Install dependencies

```bash
yarn install
```

- Just code and have fun!

## Available scripts

Below is a list of all the scripts this project has available:

| Script    | Description                                                                            |
| ------------- | -------------------------------------------------------------------------------------- |
| `build`       | Runs Typescript compiler                                                               |
| `build:watch` | Runs Typescript compiler in watch mode                                                 |
| `test`        | Runs tests using Vitest runner with --coverage activated              |
| `test:watch`  | Runs tests in watch mode (run only tests related to changed files based on git status) |
| `lint:eslint` | Runs ESLint on project files                                                           |
