module.exports = {
  roots: ["<rootDir>/src"],
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleDirectories: ["node_modules", "../"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.ts"],
  coverageReporters: ["json", "lcov", "text"],
};
