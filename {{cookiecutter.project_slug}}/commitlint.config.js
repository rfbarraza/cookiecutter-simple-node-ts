const Configuration = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
    "scope-case": [0, "always", ["lower-case"]],
    "scope-max-length": [2, "always", [20]],
    "subject-case": [1, "always", ["sentence-case"]],
    "header-max-length": [2, "always", 120],
    /* TODO: uncomment when ready to use github issues for commits
    'references-empty': [2, 'never'], */
    "footer-max-line-length": [2, "always", 120],
  },
  parserPreset: {
    parserOpts: {
      /* TODO: uncomment when ready to use github issues for commits
      'headerPattern': /^(\w*)(\(\w[\w\W]*\))?:\s(.*)\s#(\d+)$/,
      'headerCorrespondence': ['type', 'scope', 'subject', 'issue'],
      'issuePrefixes': ['#']
      */
      headerPattern: /^(\w*)(\(\w[\w\W]*\))?:\s(.*)$/,
      headerCorrespondence: ["type", "scope", "subject"],
    },
  },
};

module.exports = Configuration;
