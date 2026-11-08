Review this repository ONLY for code duplication, maintainability, and scalability.

Be focused and high-level. Report only issues that genuinely matter: real duplication
worth extracting, code that will be hard to maintain, or that won't scale. Do NOT be
pedantic — skip style nits, naming bikeshedding, and micro-optimizations.

1. Explore the code with Read/Glob/Grep.
2. Write a concise report to the file path given as REPORT_PATH in the request context
   (create parent folders as needed): a 2-3 line summary, then findings grouped
   High / Medium / Low, each with file path and a one-line fix.
3. If there is an open pull request for BRANCH (find it with `gh pr list --head "<BRANCH>"`),
   post your most important findings as comments on that PR where appropriate — a short
   top-level `gh pr comment`, and inline comments on specific lines (via `gh api` on the
   PR review-comments endpoint) only where a finding is tied to exact code. Keep comments
   brief and actionable. If there is no open PR, skip commenting.
4. If the code is in good shape, say so briefly — do not invent problems.
5. End the report file with exactly one line: `VERDICT: PASS` or `VERDICT: FAIL`.
   Use FAIL only if there is at least one genuinely blocking problem. Minor findings = PASS.
