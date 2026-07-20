# Zero-click URL decision table — 2026-07-20

**Property:** `sc-domain:docgpt.ai`

**Evidence window:** 2026-04-19 through 2026-07-17, Google Web Search, stable cutoff.

**Cohort:** 669 URLs with zero clicks in three programmatic clusters: Clay, Mail Merge, and Sheets use cases.

**Confidentiality:** redacted for a public repository. Exact queries and exact impression counts are not stored. Visibility and position are represented as bands.

**Status:** partially implemented on 2026-07-20. The 15 URLs classified as `noindex` were removed and their internal links were repointed. All other classifications remain proposals; no Render redirects were deployed.

## Decision rules

- `keep`: too little evidence to prune; monitor because the URL has only 1–9 impressions and a top-10 average position.
- `improve`: selected primary hub or a distinct URL with meaningful visibility and zero clicks; validate query intent, snippet, and page usefulness.
- `merge`: programmatic variant with a stronger topical hub; move unique useful material before redirecting.
- `redirect`: direct intent duplicate with a named primary URL.
- `noindex`: visibly malformed page; remove from search temporarily while deciding rewrite versus redirect.

These are operational recommendations, not proof of a Google penalty. Search Console page-row pagination was exhausted, but Google does not guarantee every underlying row.

Repository cross-check: 667 URLs map directly to a source file with a `permalink`; `/mail-merge-for-gmail-and-sheets/` and the dated Mail Merge post use generated routes. Of the directly mapped pages, 332 were added on or after 2026-06-20 and 335 were added earlier.

## Summary

| Cluster | Total | Keep | Improve | Merge | Redirect | Noindex |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Clay | 154 | 62 | 1 | 87 | 2 | 2 |
| Mail Merge | 107 | 15 | 13 | 78 | 1 | 0 |
| Sheets use cases | 408 | 119 | 13 | 260 | 3 | 13 |
| **Total** | **669** | **196** | **27** | **425** | **6** | **15** |

## URL table

| URL path | Cluster | Decision | Proposed target | Visibility band | Position band |
| --- | --- | --- | --- | --- | --- |
| `/clay-alternative-google-sheets/` | Clay | `improve` | — | medium (10–99) | top 10 |
| `/clay-alternative-for-cybersecurity-sales-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-medical-billing-sales-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-event-sponsor-prospecting-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-cannabis-dispensary-vendors-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-car-dealerships-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-restaurant-suppliers-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-smb-sales-teams-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-accounting-firms-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-property-management-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-in-sheets-for-niche-b2b-lists-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-fintech-sales-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-medical-staffing-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-title-companies-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-franchise-sales-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-real-estate-investors-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-to-google-sheets-for-car-dealer-bdc/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/b2b-sales-account-research-clay-alternative-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/car-dealer-bdc-clay-alternative-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-b2b-saas-account-research-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-credit-unions-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-dental-practices-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-education-recruiters-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-electrical-contractors-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-freight-brokers-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-mortgage-brokers-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-printing-companies-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-recruiters-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-telecom-sales-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-travel-dmc-sales-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-vs-google-sheets-for-small-sales-teams/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/fsbo-expired-listing-clay-alternative-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/salesforce-account-research-without-clay-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-equipment-rental-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-insurance-agencies-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-janitorial-suppliers-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-veterinary-practices-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-revops-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-for-agencies-alternative-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-to-google-sheets-for-recruiters/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-car-dealerships-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-architecture-firms-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-realtors-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-recruiting-agencies-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-seo-teams-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-uniform-rental-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-credit-saving-workflow-for-real-estate-agents-google-sheets/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/hubspot-stale-account-reactivation-without-clay-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/recruiting-client-business-development-clay-alternative-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-commercial-insurance-brokers-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-home-builders-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-saas-founders-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/hubspot-list-enrichment-without-clay-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/seo-prospecting-clay-alternative-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/agency-client-prospecting-clay-in-sheets-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/agency-csv-enrichment-clay-alternative-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-3pl-warehousing-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-boutique-agencies-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-commercial-real-estate-brokers-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-franchise-development-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-alternative-for-medical-spa-supplier-sales-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/clay-credit-saving-workflow-for-car-dealers-google-sheets/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/staffing-client-prospect-research-clay-alternative-google-sheets-ai/` | Clay | `keep` | — | low (1–9) | top 10 |
| `/local-business-clay-alternative-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/linkedin-sales-navigator-without-clay-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-alternative-b2b-sales-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-credit-saving-lead-enrichment-google-sheets-ai/` | Clay | `merge` | `/clay-cost-calculator/` | medium (10–99) | 11–20 |
| `/clay-alternative-local-business-prospecting-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/google-sheets-clay-workflow-for-founders/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-pricing-alternative-google-sheets-ai/` | Clay | `merge` | `/clay-cost-calculator/` | medium (10–99) | 11–20 |
| `/clay-alternative-for-construction-suppliers-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | 11–20 |
| `/clay-alternative-for-agencies-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-alternative-for-med-spas-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | 11–20 |
| `/clay-migration-to-google-sheets-workflow/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | 11–20 |
| `/clay-alternative-for-home-services-marketing-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-alternative-for-security-installers-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/founder-led-sales-clay-in-sheets-playbook/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-alternative-for-waste-management-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-alternative-for-legal-tech-sales-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | 21–50 |
| `/clay-alternative-for-manufacturing-reps-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-alternative-for-biotech-sales-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/amazon-seller-enrichment-clay-alternative-google-sheets-ai/` | Clay | `merge` | `/no-code-lead-enrichment-google-sheets-vs-clay/` | medium (10–99) | 21–50 |
| `/clay-alternative-for-it-services-sales-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | 11–20 |
| `/clay-alternative-founder-led-sales-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/shopify-brand-enrichment-clay-alternative-google-sheets-ai/` | Clay | `merge` | `/no-code-lead-enrichment-google-sheets-vs-clay/` | medium (10–99) | 21–50 |
| `/clay-alternative-for-commercial-real-estate-tenant-reps-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | 21–50 |
| `/clay-alternative-for-moving-companies-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | 11–20 |
| `/clay-alternative-for-payroll-hr-sales-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-alternative-for-self-storage-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | 11–20 |
| `/clay-alternative-ecommerce-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | 11–20 |
| `/clay-alternative-for-customer-expansion-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | 11–20 |
| `/clay-alternative-for-senior-living-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-to-google-sheets-migration-workflow/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | 21–50 |
| `/clay-alternative-for-pest-control-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-alternative-for-plumbing-contractors-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | 11–20 |
| `/google-sheets-waterfall-enrichment-without-clay/` | Clay | `merge` | `/no-code-lead-enrichment-google-sheets-vs-clay/` | medium (10–99) | 11–20 |
| `/clay-alternative-for-fitness-studios-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-alternative-for-nonprofit-fundraising-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-for-realtors-alternative-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-alternative-for-logistics-brokers-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | 11–20 |
| `/clay-alternative-for-signage-companies-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-alternative-for-edtech-sales-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | 11–20 |
| `/clay-alternative-for-hvac-contractors-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-alternative-property-management-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/apollo-clay-alternative-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/apollo-export-enrichment-clay-alternative-google-sheets-ai/` | Clay | `merge` | `/no-code-lead-enrichment-google-sheets-vs-clay/` | medium (10–99) | 21–50 |
| `/clay-alternative-for-hospitality-sales-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-alternative-for-landscaping-companies-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-alternative-recruiters-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-to-google-sheets-for-real-estate-agents/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | 11–20 |
| `/clay-alternative-for-pool-service-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | 11–20 |
| `/clay-alternative-for-private-equity-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-alternative-for-roofing-contractors-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-alternative-for-seo-link-building-teams-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | 21–50 |
| `/clay-alternative-staffing-agencies-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | medium (10–99) | 11–20 |
| `/hubspot-contact-enrichment-clay-alternative-google-sheets-ai/` | Clay | `merge` | `/no-code-lead-enrichment-google-sheets-vs-clay/` | medium (10–99) | 21–50 |
| `/salesforce-stale-opportunity-research-without-clay-google-sheets-ai/` | Clay | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 21–50 |
| `/google-sheets-clay-alternative-pricing-comparison/` | Clay | `merge` | `/clay-cost-calculator/` | low (1–9) | 11–20 |
| `/clay-alternative-for-commercial-cleaning-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 11–20 |
| `/clay-alternative-for-executive-search-firms-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 11–20 |
| `/trade-show-badge-enrichment-clay-alternative-google-sheets-ai/` | Clay | `merge` | `/no-code-lead-enrichment-google-sheets-vs-clay/` | low (1–9) | 11–20 |
| `/clay-alternative-abm-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 11–20 |
| `/clay-alternative-for-wealth-advisors-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 11–20 |
| `/clay-in-sheets-founder-outbound-system/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 11–20 |
| `/linkedin-profile-research-google-sheets-clay-alternative/` | Clay | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | low (1–9) | 21–50 |
| `/website-visitor-enrichment-clay-alternative-google-sheets-ai/` | Clay | `merge` | `/no-code-lead-enrichment-google-sheets-vs-clay/` | low (1–9) | 21–50 |
| `/clay-alternative-for-dental-labs-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 11–20 |
| `/clay-alternative-for-property-and-casualty-insurance-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 11–20 |
| `/clay-alternative-for-shopify-agencies-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 21–50 |
| `/clay-alternative-seo-agencies-google-sheets/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 21–50 |
| `/salesforce-lead-enrichment-clay-alternative-google-sheets-ai/` | Clay | `merge` | `/no-code-lead-enrichment-google-sheets-vs-clay/` | low (1–9) | 21–50 |
| `/clay-alternative-for-ecommerce-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 21–50 |
| `/clay-alternative-for-local-marketing-agencies-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 11–20 |
| `/clay-alternative-for-solar-installers-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 11–20 |
| `/clay-vs-google-sheets-lead-enrichment-workflow/` | Clay | `merge` | `/no-code-lead-enrichment-google-sheets-vs-clay/` | low (1–9) | 21–50 |
| `/clay-workflow-audit-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 11–20 |
| `/crm-cleanup-clay-alternative-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 11–20 |
| `/clay-to-google-sheets-for-b2b-sales-teams/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 21–50 |
| `/clay-vs-gpt-for-sheets/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 21–50 |
| `/recruiter-hiring-manager-enrichment-clay-alternative-google-sheets-ai/` | Clay | `merge` | `/no-code-lead-enrichment-google-sheets-vs-clay/` | low (1–9) | 11–20 |
| `/clay-alternative-for-coworking-spaces-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 21–50 |
| `/clay-alternative-for-fractional-sales-teams-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 21–50 |
| `/clay-alternative-for-micro-saas-founders-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 21–50 |
| `/clay-alternative-law-firm-lead-research-google-sheets-ai/` | Clay | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | low (1–9) | 11–20 |
| `/clay-to-google-sheets-for-ecommerce-brands/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 21–50 |
| `/salesforce-account-scoring-clay-alternative-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 21–50 |
| `/ai-overview-prospecting-clay-alternative-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 21–50 |
| `/clay-alternative-for-promotional-products-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 21–50 |
| `/crm-account-research-without-clay-google-sheets-ai/` | Clay | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | low (1–9) | 21–50 |
| `/dealership-equity-mining-clay-alternative-google-sheets-ai/` | Clay | `merge` | `/clay-alternative-google-sheets/` | low (1–9) | 21–50 |
| `/clay-alternative-google-sheets-lead-enrichment/` | Clay | `noindex` | — | medium (10–99) | top 10 |
| `/clay-in-sheets-account-research/` | Clay | `noindex` | — | medium (10–99) | 11–20 |
| `/clay-in-google-sheets-alternative/` | Clay | `redirect` | `/clay-alternative-google-sheets/` | medium (10–99) | top 10 |
| `/clay-in-sheets-lead-enrichment/` | Clay | `redirect` | `/no-code-lead-enrichment-google-sheets-vs-clay/` | medium (10–99) | top 10 |
| `/mail-merge-for-gmail-and-sheets/` | Mail Merge | `improve` | — | high (100+) | 11–20 |
| `/productivity/email-marketing/gmail-tools/2025/07/12/mail-merge-gmail-sheets-best-email-outreach-tool/` | Mail Merge | `improve` | — | high (100+) | 11–20 |
| `/gmass-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `improve` | — | high (100+) | 11–20 |
| `/mail-merge-from-excel-gmail-google-sheets/` | Mail Merge | `improve` | — | high (100+) | 11–20 |
| `/gmail-sending-limits-mail-merge-google-sheets/` | Mail Merge | `improve` | — | high (100+) | 11–20 |
| `/yamm-vs-mailmeteor-gmail-google-sheets-mail-merge/` | Mail Merge | `improve` | — | high (100+) | 11–20 |
| `/mail-merge-with-attachments-gmail-google-sheets/` | Mail Merge | `improve` | — | high (100+) | 11–20 |
| `/getresponse-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `improve` | — | high (100+) | 11–20 |
| `/mail-merge-unsubscribe-link-gmail-google-sheets/` | Mail Merge | `improve` | — | high (100+) | top 10 |
| `/mailchimp-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `improve` | — | high (100+) | 11–20 |
| `/send-bulk-email-gmail-google-sheets-mail-merge/` | Mail Merge | `improve` | — | high (100+) | 11–20 |
| `/benchmark-email-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `improve` | — | high (100+) | top 10 |
| `/best-mail-merge-for-gmail-google-sheets/` | Mail Merge | `improve` | — | medium (10–99) | 21–50 |
| `/alumni-outreach-mail-merge-google-sheets/` | Mail Merge | `keep` | — | low (1–9) | top 10 |
| `/gohighlevel-email-campaign-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `keep` | — | low (1–9) | top 10 |
| `/quicklution-mail-merge-alternative-gmail-google-sheets/` | Mail Merge | `keep` | — | low (1–9) | top 10 |
| `/autocrat-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `keep` | — | low (1–9) | top 10 |
| `/mail-merge-ab-testing-subject-lines-google-sheets/` | Mail Merge | `keep` | — | low (1–9) | top 10 |
| `/crm-export-mail-merge-gmail-google-sheets/` | Mail Merge | `keep` | — | low (1–9) | top 10 |
| `/emerge-mail-merge-alternative-gmail-google-sheets/` | Mail Merge | `keep` | — | low (1–9) | top 10 |
| `/trade-show-follow-up-mail-merge-gmail-google-sheets/` | Mail Merge | `keep` | — | low (1–9) | top 10 |
| `/mail-merge-drip-campaign-sequence-gmail-google-sheets/` | Mail Merge | `keep` | — | low (1–9) | top 10 |
| `/persistiq-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `keep` | — | low (1–9) | top 10 |
| `/close-email-sequences-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `keep` | — | low (1–9) | top 10 |
| `/mail-merge-dashboard-vs-google-sheets-row-status/` | Mail Merge | `keep` | — | low (1–9) | top 10 |
| `/omnisend-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `keep` | — | low (1–9) | top 10 |
| `/volunteer-coordination-mail-merge-gmail-google-sheets/` | Mail Merge | `keep` | — | low (1–9) | top 10 |
| `/webinar-attendee-follow-up-mail-merge-google-sheets/` | Mail Merge | `keep` | — | low (1–9) | top 10 |
| `/schedule-mail-merge-send-later-gmail-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | high (100+) | 21–50 |
| `/mailtrack-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 11–20 |
| `/gmail-mail-merge-without-coding-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | 21–50 |
| `/csv-mail-merge-gmail-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | top 10 |
| `/mixmax-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 11–20 |
| `/klaviyo-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 21–50 |
| `/lemlist-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 21–50 |
| `/sales-outreach-mail-merge-gmail-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | 11–20 |
| `/account-based-marketing-mail-merge-gmail-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | 21–50 |
| `/free-mail-merge-gmail-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | 11–20 |
| `/mail-merge-conditional-content-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | top 10 |
| `/mailshake-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 11–20 |
| `/gmail-mail-merge-google-docs-template-gmail-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | 21–50 |
| `/event-invite-mail-merge-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | top 10 |
| `/client-update-email-mail-merge-agencies/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | top 10 |
| `/bettermerge-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | top 10 |
| `/salesflare-email-campaign-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | top 10 |
| `/apps-script-mail-merge-vs-add-on-gmail-google-sheets/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 11–20 |
| `/aweber-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 21–50 |
| `/instantly-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 21–50 |
| `/hubspot-sequences-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 21–50 |
| `/brevo-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 21–50 |
| `/mail-merge-verify-email-list-before-sending-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | 11–20 |
| `/recruiting-outreach-mail-merge-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | top 10 |
| `/mail-merge-personalization-tags-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | 11–20 |
| `/school-parent-update-mail-merge-gmail-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | top 10 |
| `/mailjet-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 21–50 |
| `/nonprofit-donor-outreach-mail-merge-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | top 10 |
| `/smartlead-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 11–20 |
| `/mail-merge-templates-gmail-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | 11–20 |
| `/gmail-add-on-mail-merge-vs-google-sheets-add-on/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 21–50 |
| `/google-workspace-marketplace-mail-merge-alternative-gmail-sheets/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 11–20 |
| `/customer-onboarding-email-mail-merge-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | top 10 |
| `/sendgrid-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 21–50 |
| `/snovio-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 21–50 |
| `/appointment-reminder-mail-merge-gmail-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | top 10 |
| `/promote-ebook-gmail-mail-merge-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | 21–50 |
| `/outreach-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 11–20 |
| `/customer-feedback-survey-mail-merge-gmail-google-sheets/` | Mail Merge | `merge` | `/mail-merge-from-google-form-responses-gmail-google-sheets/` | medium (10–99) | 21–50 |
| `/nethunt-crm-email-campaign-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | top 10 |
| `/candidate-interview-scheduling-mail-merge-gmail-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | 11–20 |
| `/attio-crm-email-campaign-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 11–20 |
| `/gmelius-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 11–20 |
| `/woodpecker-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 11–20 |
| `/mail-merge-survey-invitations-gmail-google-sheets/` | Mail Merge | `merge` | `/mail-merge-from-google-form-responses-gmail-google-sheets/` | medium (10–99) | 11–20 |
| `/boomerang-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 21–50 |
| `/pipedrive-campaigns-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 11–20 |
| `/real-estate-lead-follow-up-mail-merge-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | top 10 |
| `/right-inbox-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 21–50 |
| `/small-business-email-campaign-mail-merge-gmail/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | 11–20 |
| `/mail-merge-event-reminders-gmail-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | 21–50 |
| `/mail-merge-for-membership-renewals-gmail-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | 11–20 |
| `/mail-merge-tool-migration-to-google-sheets-gmail/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | 21–50 |
| `/mailmodo-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 11–20 |
| `/constant-contact-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 21–50 |
| `/review-request-email-mail-merge-gmail-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | 21–50 |
| `/hunter-campaigns-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 11–20 |
| `/klenty-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 11–20 |
| `/mail-merge-for-ecommerce-order-updates-gmail-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | 11–20 |
| `/mail-merge-html-email-gmail-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | medium (10–99) | 11–20 |
| `/mergemail-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | medium (10–99) | 21–50 |
| `/folk-crm-email-campaign-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | low (1–9) | 11–20 |
| `/mail-merge-follow-up-emails-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | low (1–9) | 21–50 |
| `/mailerlite-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | low (1–9) | 11–20 |
| `/monday-sales-crm-email-campaign-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | low (1–9) | 11–20 |
| `/mail-merge-tracking-gmail-campaigns/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | low (1–9) | 21–50 |
| `/newsletter-from-google-sheets-gmail-mail-merge/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | low (1–9) | 21–50 |
| `/yesware-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | low (1–9) | 11–20 |
| `/quickmail-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | low (1–9) | 21–50 |
| `/abandoned-cart-email-mail-merge-gmail-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | low (1–9) | 11–20 |
| `/dental-patient-recall-mail-merge-gmail-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | low (1–9) | 11–20 |
| `/insightly-email-campaign-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | low (1–9) | 11–20 |
| `/reply-io-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | low (1–9) | 11–20 |
| `/moosend-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | low (1–9) | 51+ |
| `/activecampaign-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | low (1–9) | 21–50 |
| `/pr-pitch-mail-merge-google-sheets-gmail/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | low (1–9) | 11–20 |
| `/property-management-tenant-notice-mail-merge-gmail-google-sheets/` | Mail Merge | `merge` | `/mail-merge-for-gmail-and-sheets/` | low (1–9) | 21–50 |
| `/saleshandy-alternative-gmail-google-sheets-mail-merge/` | Mail Merge | `merge` | `/best-mail-merge-for-gmail-google-sheets/` | low (1–9) | 11–20 |
| `/gmail-mail-merge-from-google-sheets/` | Mail Merge | `redirect` | `/how-to-mail-merge-in-gmail-with-google-sheets/` | medium (10–99) | 21–50 |
| `/icp-fit-scoring-google-sheets-ai/` | Sheets use cases | `improve` | — | high (100+) | 11–20 |
| `/financial-advisor-prospect-research-google-sheets-ai/` | Sheets use cases | `improve` | — | high (100+) | top 10 |
| `/veterinary-clinic-lead-enrichment-google-sheets-ai/` | Sheets use cases | `improve` | — | high (100+) | top 10 |
| `/real-estate-investor-lead-research-google-sheets-ai/` | Sheets use cases | `improve` | — | high (100+) | top 10 |
| `/linkedin-sales-navigator-export-enrichment-google-sheets-ai/` | Sheets use cases | `improve` | — | high (100+) | top 10 |
| `/used-car-dealer-service-lead-enrichment-google-sheets-ai/` | Sheets use cases | `improve` | — | high (100+) | 11–20 |
| `/newsletter-sponsor-prospecting-google-sheets-ai/` | Sheets use cases | `improve` | — | high (100+) | 11–20 |
| `/email-list-company-enrichment-google-sheets-ai/` | Sheets use cases | `improve` | — | medium (10–99) | top 10 |
| `/gpt-for-sheets-for-ecommerce/` | Sheets use cases | `improve` | — | medium (10–99) | 21–50 |
| `/google-sheets-ai-account-research-buyers-guide/` | Sheets use cases | `improve` | — | low (1–9) | top 10 |
| `/gpt-for-sheets-for-b2b-sales/` | Sheets use cases | `improve` | — | low (1–9) | 11–20 |
| `/gpt-for-sheets-for-seo-teams/` | Sheets use cases | `improve` | — | low (1–9) | 21–50 |
| `/cold-email-personalization-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/commercial-insurance-broker-lead-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/commercial-real-estate-tenant-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/consulting-firm-account-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/ecommerce-retailer-vendor-outreach-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/founder-led-b2b-sales-list-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/local-business-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/local-seo-citation-cleanup-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/podcast-sponsor-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/recruiter-vc-portfolio-hiring-trigger-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/wealth-management-prospect-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/account-research-agent-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/conference-speaker-sponsor-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/ecommerce-marketplace-review-mining-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/event-sponsor-lead-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/hubspot-lead-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/property-management-vendor-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/title-escrow-company-lead-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/used-car-inventory-lead-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/auto-dealer-bdc-ai-lead-enrichment-google-sheets/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/bettercontact-alternative-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/crm-stale-lead-reengagement-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/customer-success-expansion-account-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/google-sheets-ai-lead-enrichment-for-financial-advisors/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/intent-signal-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/market-map-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/moving-company-lead-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/perplexity-formulas-account-research-google-sheets/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/website-visitor-lead-enrichment-workflow-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/agency-rfp-prospect-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/domain-to-company-info-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/executive-search-target-company-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/gym-local-lead-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/healthcare-recruiter-facility-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/home-services-franchise-prospecting-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/realtor-sphere-of-influence-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/webinar-attendee-lead-scoring-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/candidate-shortlist-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/ecommerce-retailer-vendor-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/expired-listing-lead-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/find-decision-makers-from-company-list-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/google-sheets-account-research-template-for-b2b-sales/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/multi-location-franchise-prospecting-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/ppc-agency-prospect-audit-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/real-estate-investor-owner-lookup-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/signalhire-alternative-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/staffing-firm-job-order-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/write-personalized-cold-email-lines-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/car-dealer-trade-in-lead-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/classify-support-tickets-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/funding-announcement-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/gpt-for-sheets-for-car-dealers/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/home-services-lead-prospecting-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/medical-practice-lead-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/mortgage-broker-referral-partner-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/pest-control-lead-prospecting-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/staffing-agency-client-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/account-based-marketing-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/auto-dealer-service-lane-lead-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/b2b-saas-account-scoring-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/benefits-broker-employer-lead-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/bombora-alternative-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/business-broker-owner-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/commercial-real-estate-tenant-expansion-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/executive-recruiter-client-target-list-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/insurance-renewal-opportunity-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/law-firm-lead-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/local-business-permit-license-prospecting-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/manufacturing-distributor-lead-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/new-location-expansion-signal-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/ppc-agency-prospect-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/real-estate-agent-follow-up-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/revops-crm-field-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/search-intent-classification-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/seo-client-prospect-prioritization-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/skrapp-alternative-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/staffing-agency-client-lead-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/ai-overview-brand-visibility-audit-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/b2b-sales-podcast-guest-account-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/car-dealer-lease-end-equity-mining-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/dedupe-lead-list-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/email-validation-format-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/enrich-company-domains-from-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/google-sheets-ai-firmographic-enrichment-template/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/landscaping-company-lead-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/medical-device-distributor-prospect-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/multi-location-business-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/proxycurl-alternative-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/real-estate-agent-referral-partner-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/real-estate-team-recruiting-lead-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/seo-agency-link-prospect-qualification-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/webinar-chat-transcript-lead-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/architecture-firm-lead-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/can-mistral-edit-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/cognism-alternative-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/cre-broker-tenant-intent-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/crm-export-account-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/dealer-bdc-no-show-follow-up-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/ecommerce-brand-lead-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/ecommerce-distributor-lead-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/ecommerce-wholesale-buyer-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/event-sponsor-list-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/event-venue-corporate-sales-prospecting-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/fractional-cmo-lead-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/home-service-owner-lead-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/hubspot-crm-contact-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/kaspr-alternative-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/local-seo-client-prospecting-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/marketing-agency-niche-prospect-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/nimbler-alternative-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/property-management-owner-lead-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/real-estate-investor-distressed-property-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/realtor-divorce-probate-lead-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/realtor-fsbo-lead-enrichment-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/restaurant-franchise-prospect-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/salesforce-account-research-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/seo-prospect-audit-template-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/templates/lead-enrichment/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/uplead-alternative-google-sheets-ai/` | Sheets use cases | `keep` | — | low (1–9) | top 10 |
| `/perplexity-for-google-sheets-lead-enrichment/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/b2b-market-map-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/seamless-ai-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/g2-review-mining-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/rocketreach-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/phone-number-formatting-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/hvac-lead-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/procurement-vendor-shortlisting-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/google-sheets-lead-enrichment-template-for-car-dealers/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/b2b-sales-account-research-template-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/private-equity-addon-acquisition-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/claude-for-google-sheets-lead-enrichment/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/funding-news-trigger-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/nonprofit-donor-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 21–50 |
| `/realtor-open-house-follow-up-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/amazon-seller-brand-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 21–50 |
| `/competitor-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 11–20 |
| `/seo-agency-prospect-audit-template-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 21–50 |
| `/nonprofit-grant-prospect-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 21–50 |
| `/amazon-review-mining-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-ecommerce/` | medium (10–99) | 11–20 |
| `/can-deepseek-edit-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/ai-search-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/customer-review-response-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/dropcontact-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/bulk-product-descriptions-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-ecommerce/` | medium (10–99) | top 10 |
| `/event-sponsor-account-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/clearbit-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/google-sheets-ai-sentiment-tagging-for-reviews/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/hunter-io-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/car-dealer-bdc-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/grok-for-google-sheets-lead-enrichment/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/insurance-agency-prospect-list-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/salesforce-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 21–50 |
| `/zoominfo-export-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/construction-bid-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 11–20 |
| `/dealership-inventory-merchandising-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/linkedin-company-list-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/gemini-for-google-sheets-lead-enrichment/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/apollo-csv-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/app-store-review-analysis-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/google-sheets-ai-email-finder-workflow/` | Sheets use cases | `merge` | `/email-list-company-enrichment-google-sheets-ai/` | medium (10–99) | 11–20 |
| `/linkedin-lead-research-google-sheets-ai-upgrade/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 11–20 |
| `/plumbing-company-lead-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/channel-partner-recruiting-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/electrician-lead-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 21–50 |
| `/abm-target-account-list-building-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/car-dealer-trade-in-lead-scoring-google-sheets-ai/` | Sheets use cases | `merge` | `/icp-fit-scoring-google-sheets-ai/` | medium (10–99) | top 10 |
| `/linkedin-lead-list-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 21–50 |
| `/rfp-response-drafting-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/seo-agency-ai-overview-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/claude-formulas-google-sheets-account-research/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 11–20 |
| `/conference-attendee-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 11–20 |
| `/etsy-product-seo-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-seo-teams/` | medium (10–99) | 11–20 |
| `/google-sheets-ai-product-description-generator/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-ecommerce/` | medium (10–99) | top 10 |
| `/google-sheets-ai-data-cleaning-for-crm-imports/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-b2b-sales/` | medium (10–99) | top 10 |
| `/b2b-sales-buying-committee-mapping-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/zendesk-ticket-export-triage-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/dental-practice-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 21–50 |
| `/linkedin-lead-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/product-feedback-prioritization-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-ecommerce/` | medium (10–99) | top 10 |
| `/apollo-export-cleanup-scoring-google-sheets-ai/` | Sheets use cases | `merge` | `/icp-fit-scoring-google-sheets-ai/` | medium (10–99) | 21–50 |
| `/expired-listing-outreach-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-b2b-sales/` | medium (10–99) | top 10 |
| `/inbound-lead-routing-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/local-business-owner-email-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 11–20 |
| `/outbound-personalization-formulas-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/target-account-news-trigger-scoring-google-sheets-ai/` | Sheets use cases | `merge` | `/icp-fit-scoring-google-sheets-ai/` | medium (10–99) | top 10 |
| `/account-tiering-scoring-google-sheets-ai/` | Sheets use cases | `merge` | `/icp-fit-scoring-google-sheets-ai/` | medium (10–99) | top 10 |
| `/logistics-broker-prospect-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/mortgage-broker-referral-list-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/reverse-email-lookup-company-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/zoominfo-export-cleanup-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/channel-partner-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/domain-list-company-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/linkedin-export-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/medspa-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/recruiter-candidate-source-list-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/rfp-vendor-shortlisting-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/bardeen-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/categorize-leads-by-industry-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/commercial-cleaning-lead-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 11–20 |
| `/google-maps-prospect-triage-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/google-sheets-ai-meeting-prep-research-template/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/linkedin-event-attendee-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/small-business-enrichment-tool-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/linkedin-job-changer-lead-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 21–50 |
| `/recruiter-job-order-intake-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/surfe-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/zoominfo-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/ai-lead-enrichment-google-sheets-guide/` | Sheets use cases | `improve` | — | medium (10–99) | 11–20 |
| `/backlink-prospect-qualification-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/competitor-displacement-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/conference-badge-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/google-sheets-lead-enrichment-roi-calculator/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/gpt-for-sheets-for-agencies/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 21–50 |
| `/gym-fitness-studio-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/insurance-agency-lead-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/linkedin-sales-navigator-list-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/msp-prospect-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/podcast-guest-prospect-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/property-owner-outreach-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-b2b-sales/` | medium (10–99) | 21–50 |
| `/smartlead-export-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/summarize-meeting-notes-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/ai-research-agent-google-sheets-lead-enrichment/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 11–20 |
| `/competitor-pricing-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/executive-search-candidate-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/findymail-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/fullenrich-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/podcast-guest-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/sales-call-notes-summarization-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-b2b-sales/` | medium (10–99) | top 10 |
| `/vc-startup-lead-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/car-dealer-service-appointment-reactivation-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/franchise-development-lead-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 21–50 |
| `/hubspot-export-lead-scoring-google-sheets-ai/` | Sheets use cases | `merge` | `/icp-fit-scoring-google-sheets-ai/` | medium (10–99) | 11–20 |
| `/marketplace-seller-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/shopify-competitor-price-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 11–20 |
| `/b2b-event-booth-follow-up-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/job-posting-signal-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/marketplace-seller-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 11–20 |
| `/real-estate-investor-deal-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/saas-review-site-prospect-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/seo-agency-link-prospect-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 11–20 |
| `/solar-installer-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/trade-show-lead-scoring-google-sheets-ai/` | Sheets use cases | `merge` | `/icp-fit-scoring-google-sheets-ai/` | medium (10–99) | top 10 |
| `/amazon-product-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/bulk-meta-title-generator-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-seo-teams/` | medium (10–99) | 21–50 |
| `/csv-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/google-maps-local-business-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/hotel-sales-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/logistics-shipper-list-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/private-equity-deal-sourcing-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/recruiter-client-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/saas-account-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 11–20 |
| `/saas-trial-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/competitor-customer-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/conference-attendee-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/customer-success-account-summaries-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/franchise-sales-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/hr-vendor-evaluation-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/hubspot-export-account-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 11–20 |
| `/law-firm-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/local-business-enrichment-template-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/mortgage-broker-lead-prioritization-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/podcast-sponsor-prospect-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 21–50 |
| `/sales-navigator-export-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/seo-agency-prospect-audit-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 21–50 |
| `/amazon-seller-lead-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 11–20 |
| `/auto-repair-shop-lead-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/bookkeeping-firm-client-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 21–50 |
| `/build-lead-enrichment-agent-google-sheets/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/conference-sponsor-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/construction-subcontractor-vendor-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 11–20 |
| `/ecommerce-marketplace-brand-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 21–50 |
| `/event-planner-vendor-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/lead411-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/orthodontist-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 21–50 |
| `/restaurant-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/sales-operations-pipeline-cleanup-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-b2b-sales/` | medium (10–99) | top 10 |
| `/agency-csv-lead-enrichment-workflow-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/amazon-product-data-cleanup-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-ecommerce/` | medium (10–99) | top 10 |
| `/auto-dealer-fleet-sales-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/car-dealer-inventory-descriptions-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/chatgpt-for-google-sheets-lead-enrichment/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/hubspot-contact-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 21–50 |
| `/persana-ai-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | 11–20 |
| `/saas-channel-partner-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/seo-agency-local-pack-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/trade-show-attendee-list-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/youtube-influencer-outreach-list-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-b2b-sales/` | medium (10–99) | top 10 |
| `/b2b-manufacturing-account-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 11–20 |
| `/b2b-sales-trigger-monitoring-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-b2b-sales/` | medium (10–99) | top 10 |
| `/chiropractic-clinic-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/ecommerce-brand-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/gpt-for-sheets-account-research/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 21–50 |
| `/linkedin-profile-summary-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/msp-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/partner-channel-recruitment-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/saas-free-trial-lead-scoring-google-sheets-ai/` | Sheets use cases | `merge` | `/icp-fit-scoring-google-sheets-ai/` | medium (10–99) | top 10 |
| `/seo-agency-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 21–50 |
| `/shopify-supplier-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/abm-buying-committee-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 21–50 |
| `/claude-formulas-lead-scoring-google-sheets-ai/` | Sheets use cases | `merge` | `/icp-fit-scoring-google-sheets-ai/` | medium (10–99) | top 10 |
| `/crm-lost-deal-winback-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/hubspot-export-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 21–50 |
| `/people-data-labs-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | medium (10–99) | top 10 |
| `/realtor-expired-listing-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/recruiter-outreach-personalization-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-b2b-sales/` | medium (10–99) | top 10 |
| `/salesforce-stale-account-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/shopify-catalog-cleanup-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-ecommerce/` | medium (10–99) | top 10 |
| `/software-agency-prospect-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 11–20 |
| `/domain-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | top 10 |
| `/enrich-so-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 11–20 |
| `/instantly-export-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | medium (10–99) | 21–50 |
| `/intent-plus-tech-stack-account-scoring-google-sheets-ai/` | Sheets use cases | `merge` | `/icp-fit-scoring-google-sheets-ai/` | medium (10–99) | top 10 |
| `/linkedin-creator-sponsor-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/manufacturing-rep-lead-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | 11–20 |
| `/roofing-contractor-lead-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | medium (10–99) | top 10 |
| `/verify-and-clean-emails-in-google-sheets-ai/` | Sheets use cases | `merge` | `/email-list-company-enrichment-google-sheets-ai/` | medium (10–99) | 11–20 |
| `/agency-client-fit-scoring-google-sheets-ai/` | Sheets use cases | `merge` | `/icp-fit-scoring-google-sheets-ai/` | low (1–9) | 11–20 |
| `/agency-reporting-insights-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 11–20 |
| `/conference-attendee-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 11–20 |
| `/gpt-for-sheets-for-local-businesses/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 11–20 |
| `/gpt-for-sheets-for-sales-operations/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-b2b-sales/` | low (1–9) | 11–20 |
| `/recruiter-hiring-manager-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | low (1–9) | 11–20 |
| `/recruiting-agency-candidate-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 11–20 |
| `/6sense-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 11–20 |
| `/accounting-firm-prospect-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | low (1–9) | 11–20 |
| `/b2b-contact-data-cleanup-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 21–50 |
| `/competitor-lead-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | low (1–9) | 11–20 |
| `/cybersecurity-account-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | low (1–9) | 11–20 |
| `/datagma-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 11–20 |
| `/dealership-service-drive-equity-mining-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 21–50 |
| `/lusha-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 21–50 |
| `/commercial-cleaning-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 11–20 |
| `/coresignal-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 11–20 |
| `/crunchbase-export-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 11–20 |
| `/normalize-job-titles-in-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 11–20 |
| `/nymeria-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 11–20 |
| `/realtor-expired-listing-personalization-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 11–20 |
| `/agency-client-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 21–50 |
| `/car-dealership-lead-qualification-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 11–20 |
| `/construction-equipment-dealer-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 51+ |
| `/home-services-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 11–20 |
| `/hubspot-company-domain-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 21–50 |
| `/local-business-directory-cleanup-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 21–50 |
| `/local-business-website-contact-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | low (1–9) | 21–50 |
| `/builtwith-technographic-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 11–20 |
| `/bulk-personalized-emails-google-sheets-ai/` | Sheets use cases | `merge` | `/email-list-company-enrichment-google-sheets-ai/` | low (1–9) | 11–20 |
| `/deduplicate-company-list-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 11–20 |
| `/demandbase-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 11–20 |
| `/ecommerce-supplier-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | low (1–9) | 11–20 |
| `/getprospect-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 21–50 |
| `/seo-agency-link-prospect-prioritization-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 11–20 |
| `/snov-io-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 11–20 |
| `/amazon-seller-competitor-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | low (1–9) | 21–50 |
| `/auto-dealer-service-contract-renewal-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 21–50 |
| `/b2b-sales-job-posting-trigger-account-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | low (1–9) | 11–20 |
| `/company-news-monitoring-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 11–20 |
| `/dealership-unsold-inventory-pricing-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | low (1–9) | 11–20 |
| `/leadiq-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 11–20 |
| `/local-seo-review-gap-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 11–20 |
| `/salesforce-opportunity-multithreading-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-b2b-sales/` | low (1–9) | 21–50 |
| `/shopify-b2b-wholesale-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 11–20 |
| `/web-design-agency-local-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 11–20 |
| `/ai-lead-enrichment-google-sheets/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 21–50 |
| `/apollo-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 21–50 |
| `/crm-contact-cleanup-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 21–50 |
| `/recruiter-job-order-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | low (1–9) | 11–20 |
| `/recruiter-layoff-list-candidate-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 51+ |
| `/seo-agency-ai-search-visibility-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 11–20 |
| `/b2b-sales-renewal-risk-account-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | low (1–9) | 21–50 |
| `/ppc-keyword-cleanup-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-seo-teams/` | low (1–9) | 21–50 |
| `/used-car-dealer-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 11–20 |
| `/website-visitor-lead-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | low (1–9) | 21–50 |
| `/google-maps-lead-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 21–50 |
| `/hubspot-list-prioritization-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-b2b-sales/` | low (1–9) | 21–50 |
| `/leadmagic-alternative-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets/` | low (1–9) | 21–50 |
| `/local-business-owner-contact-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | low (1–9) | 21–50 |
| `/local-lead-gen-agency-prospecting-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 11–20 |
| `/seo-agency-prospect-enrichment-google-sheets-ai/` | Sheets use cases | `merge` | `/ai-lead-enrichment-google-sheets-guide/` | low (1–9) | 21–50 |
| `/seo-agency-technical-audit-prioritization-google-sheets-ai/` | Sheets use cases | `merge` | `/gpt-for-sheets-for-seo-teams/` | low (1–9) | 21–50 |
| `/shopify-plus-prospect-research-google-sheets-ai/` | Sheets use cases | `merge` | `/google-sheets-ai-account-research-buyers-guide/` | low (1–9) | 21–50 |
| `/icp-scoring-formulas-google-sheets-ai/` | Sheets use cases | `noindex` | — | medium (10–99) | top 10 |
| `/apollo-export-enrichment-google-sheets-ai/` | Sheets use cases | `noindex` | — | medium (10–99) | top 10 |
| `/agency-lead-research-google-sheets-ai/` | Sheets use cases | `noindex` | — | medium (10–99) | top 10 |
| `/competitive-intelligence-tracker-google-sheets-ai/` | Sheets use cases | `noindex` | — | medium (10–99) | top 10 |
| `/b2b-sales-account-research-google-sheets-ai/` | Sheets use cases | `noindex` | — | medium (10–99) | top 10 |
| `/cold-email-personalization-from-google-sheets-ai/` | Sheets use cases | `noindex` | — | medium (10–99) | top 10 |
| `/local-business-prospecting-google-sheets-ai/` | Sheets use cases | `noindex` | — | medium (10–99) | top 10 |
| `/seo-keyword-clustering-google-sheets-ai/` | Sheets use cases | `noindex` | — | medium (10–99) | 11–20 |
| `/recruiter-candidate-research-google-sheets-ai/` | Sheets use cases | `noindex` | — | medium (10–99) | top 10 |
| `/ecommerce-product-data-enrichment-google-sheets-ai/` | Sheets use cases | `noindex` | — | medium (10–99) | top 10 |
| `/ai-lead-enrichment-car-dealerships-google-sheets/` | Sheets use cases | `noindex` | — | low (1–9) | 11–20 |
| `/crm-cleanup-deduping-google-sheets-ai/` | Sheets use cases | `noindex` | — | low (1–9) | top 10 |
| `/google-maps-business-enrichment-google-sheets-ai/` | Sheets use cases | `noindex` | — | low (1–9) | top 10 |
| `/real-estate-agent-lead-enrichment-google-sheets-ai/` | Sheets use cases | `redirect` | `/ai-lead-enrichment-real-estate-agents-google-sheets/` | high (100+) | top 10 |
| `/google-sheets-lead-enrichment-template-for-realtors/` | Sheets use cases | `redirect` | `/ai-lead-enrichment-real-estate-agents-google-sheets/` | medium (10–99) | 11–20 |
| `/google-sheets-ai-lead-enrichment-for-realtors/` | Sheets use cases | `redirect` | `/ai-lead-enrichment-real-estate-agents-google-sheets/` | medium (10–99) | 11–20 |

## Implementation guardrails

- Review all `improve` URLs manually before touching lower-signal pages.
- A `merge` row becomes a redirect only after useful unique content is incorporated into the target.
- Validate every target for HTTP 200, indexability, self-canonical, and matching intent.
- Preserve any URL with conversions, qualified referral traffic, meaningful backlinks, or customer-support value even when GSC clicks are zero.
- Do not deploy the whole map at once. Use a reviewed cohort, record its baseline, then measure before expanding.
