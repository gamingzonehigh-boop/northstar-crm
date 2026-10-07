# AI Evaluation Plan

## Benchmark
The product should be evaluated against a fixed set of questions and expected answers before each release.

| Test | Expected behaviour |
|---|---|
| Total order value | Exact deterministic sum |
| Top customers | Correct ranking by order value |
| Missing fields | Correct row counts |
| Unsupported column | Explicitly flagged |
| Ambiguous question | Ask for clarification or state assumptions |
| Recommendation | Separate evidence from inference |

## Quality gates
- Numerical accuracy: 100% on deterministic benchmark queries
- No fabricated source rows
- Missing-data warnings visible
- Low-confidence schema mappings require review
- AI recommendations must identify their evidence

## Why this matters
A convincing demo can still be an unreliable product. Northstar treats evaluation as a product feature, not a final QA step.
