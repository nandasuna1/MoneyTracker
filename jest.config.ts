/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
import { defaults as tsjPreset } from 'ts-jest/presets'
import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  ...tsjPreset,
  "testEnvironment": "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.cjs",
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageDirectory: "coverage",
};

export default jestConfig