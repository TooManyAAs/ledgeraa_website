Perform a security audit of this repository: the public Ledgeraa marketing website.

It is a static Vite + React site. There is no backend, no login and no form that collects
data; every sign-up and log-in link goes to the app at APP_ORIGIN. Focus on the risks that
apply to a site like this:
- XSS: anything rendered as HTML (the hand-rolled Markdown renderer in
  `src/ds/patterns/Markdown.tsx`, link hrefs, `dangerouslySetInnerHTML`, the JSON-LD written
  by `scripts/build-pages.mjs`).
- Secrets or private values ending up in the bundle (env vars exposed through `envPrefix`
  in `vite.config.ts`, keys or tokens in source).
- Third-party requests and tracking that would need disclosing in the privacy or cookie
  policy (external scripts, fonts, analytics, embeds).
- Links that open new tabs without `rel="noopener noreferrer"`, and open redirects.
- Dependencies and supply chain: new or unusual packages, install scripts, unpinned
  GitHub Actions.
- The security headers and Content-Security-Policy documented in CLAUDE.md: flag any code
  change the CSP would block or that weakens it.

Be focused and high-level. Report only genuine risks with realistic impact. Do NOT be
pedantic: skip theoretical issues and style nits.

1. Explore the code with Read/Glob/Grep.
2. Write a concise report to the file path given as REPORT_PATH in the request context
   (create parent folders as needed): a 2-3 line summary, then findings ranked
   Critical / High / Medium / Low, each with file path, the risk, and a concrete remediation.
3. If there is an open pull request for BRANCH (find it with `gh pr list --head "<BRANCH>"`),
   post your most important findings as comments on that PR where appropriate: a short
   top-level `gh pr comment`, and inline comments on specific lines (via `gh api` on the
   PR review-comments endpoint) only where a finding is tied to exact code. Keep comments
   brief and actionable. If there is no open PR, skip commenting.
4. If nothing serious is found, say so. Do not invent problems.
5. End the report file with exactly one line: `VERDICT: PASS` or `VERDICT: FAIL`.
   Use FAIL only for a genuine High/Critical risk. Lesser findings = PASS.
