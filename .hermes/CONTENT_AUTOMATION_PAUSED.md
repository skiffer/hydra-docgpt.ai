# Content automation paused

**Effective date:** 2026-07-20
**Scope:** New bulk SEO/content page generation for docgpt.ai

Do not create, publish, commit, or deploy new bulk-generated SEO pages while this marker exists.

This pause follows the redacted Search Console audit at `docs/seo/search-console-audit-2026-07-20.md`. Before resuming bulk generation:

1. Review the new-page cohort by template, intent, qualified clicks, and conversions.
2. Repair malformed metadata and validate generated front matter.
3. Confirm that new pages provide distinct value and do not overlap existing canonical pages.
4. Add automated quality gates for title length, description quality, duplicate intent, internal links, and build success.
5. Record the approval and resume date in this file before removing the pause.

This repository marker does not prove that an external Hermes scheduler has been disabled. Any external scheduler must be paused separately or updated to respect this file.
