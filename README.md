# Northstar AI — B2B Growth Copilot

Northstar is a portfolio-grade AI product prototype for B2B operations and sales teams. It turns messy CSV/XLS/XLSX data into an actionable workflow: upload → map → validate → analyze → investigate → act.

## Current MVP
- CSV, XLS and XLSX uploads
- Multiple-file ingestion in one session
- Flexible column recognition for common B2B names
- Data-quality scoring
- Order-value aggregation
- Opportunity Radar
- Chat-style business copilot
- Customer ranking and business summaries
- In-browser data preview
- Deterministic calculations for numerical answers

## Product thesis
B2B teams often have useful data trapped in inconsistent spreadsheets. The highest-value AI experience is not merely answering questions; it is reducing the workflow from manual cleanup and spreadsheet analysis to upload, ask and act.

## Production architecture
User → Copilot Orchestrator → Intent Router → Data Analysis Agent / RAG Agent / Recommendation Agent → Structured Data Store + Vector Store → Evidence-backed response.

The LLM should explain and orchestrate, while deterministic code or database queries perform calculations. This separation reduces hallucination risk.

## Metrics
- Data import success rate
- Automatic mapping rate
- Data-quality pass rate
- Correct-answer rate on evaluation set
- Recommendation acceptance rate
- Time-to-insight
- Median response latency
- Cost per AI interaction

## Interview talking points
1. Problem: spreadsheet-heavy B2B teams lose time cleaning and interpreting data.
2. User: sales and operations teams that need fast answers without becoming analysts.
3. MVP: reliable ingestion and evidence-backed analysis before autonomous actions.
4. Trade-off: deterministic calculations for facts; AI for interpretation and workflow.
5. Risks: schema ambiguity, bad data, hallucination, privacy, latency and token cost.
6. Experiment: measure whether opportunity recommendations actually change user action.

## Disclaimer
This is an independent portfolio project and is not affiliated with or endorsed by IndiaMART.


## GitHub Pages

This repository is configured for GitHub Pages deployment through GitHub Actions. GitHub's recommended Pages workflow publishes the static site from `main` on every push.

### Enable the site once

1. Open **Settings → Pages** in this repository.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Pushes to `main` will then deploy the site automatically.
4. Open **Actions** to monitor the deployment.

Expected site URL:

https://gamingzonehigh-boop.github.io/northstar-crm/

The MVP is fully client-side, so CSV/XLS/XLSX parsing happens in the browser. No API key is required for the current demo.

> GitHub Pages is static hosting. The current MVP therefore uses deterministic in-browser analysis rather than a server-side LLM. A future agent/RAG backend should be deployed separately and connected through a secure API.
