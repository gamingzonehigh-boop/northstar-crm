# Product Requirements — Northstar AI

## Problem
B2B operators receive business data in inconsistent spreadsheets. Before they can make decisions, they manually clean columns, reconcile records, calculate metrics and search for patterns.

## Goal
Reduce the time from raw business data to a trustworthy decision.

## Primary persona
B2B Operations or Sales Manager who is comfortable with spreadsheets but does not want to write SQL.

## Core user journey
1. Upload one or more business files.
2. Detect and normalize the schema.
3. Show validation warnings before analysis.
4. Ask a business question in natural language.
5. Route the question to the appropriate data or knowledge tool.
6. Return an answer with evidence and assumptions.
7. Suggest a next action.
8. Capture feedback for evaluation.

## MVP acceptance criteria
- Accept CSV, XLS and XLSX.
- Never silently discard rows.
- Surface unsupported or ambiguous columns.
- Calculate financial metrics from structured data.
- Clearly distinguish calculated facts from AI recommendations.
- Provide human review for low-confidence mappings.

## Priority backlog
### P0
- Robust spreadsheet ingestion
- Schema mapping and validation
- Deterministic analytics
- Copilot chat
- Opportunity detection
- Error states

### P1
- RAG over business definitions and SOPs
- Natural-language-to-SQL
- Recommendation feedback
- Evaluation dashboard
- Saved analyses

### P2
- Agentic actions
- CRM integrations
- Scheduled opportunity alerts
- Role-based access
- Multi-tenant architecture

## Key trade-offs
LLM vs deterministic code: calculations must be deterministic; the model explains and orchestrates.

Breadth vs reliability: start with high-confidence analytical intents instead of claiming to answer everything.

Automation vs control: recommendations should require user confirmation before external actions.

## Evaluation plan
Build a benchmark of factual aggregation, filtering, ranking, missing-data analysis, trend analysis and ambiguous questions. Score factual correctness, evidence coverage, instruction following, hallucination rate, latency and cost.
