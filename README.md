# ThaiCon Website & CMMS Prototype

Bilingual corporate website for Thai Control Engineering Co., Ltd. with an interactive CMMS and preventive-maintenance prototype.

## Routes

- Corporate website: `/`

The CMMS currently uses clearly labelled demo data and local React state. It includes the maintenance dashboard, work orders, PM schedule, asset register, customer sites, IoT alarms, reports, the first interactive work-order workflow, and an IoT Monitoring Center for multi-site device health and telemetry.

## IoT Monitoring prototype

- Portfolio overview for 85 sites and 2,985 monitored devices
- Site, gateway, device and signal-health views
- Device telemetry charts and threshold information
- Alarm acknowledgement and work-order simulation
- Search and site-status filters

The public build uses a frontend demo-data adapter. The public review deployment also exposes protected demo API routes; production MQTT ingestion, persistent telemetry storage and device provisioning remain future backend work.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deploy to Cloudflare

The site is served as static assets by a Cloudflare Worker (`wrangler.jsonc`, output from `./dist`).

Manual deploy (asks you to log in to Cloudflare the first time):

```bash
npx wrangler login
npm run deploy
```

Automatic deploy: `.github/workflows/deploy-cloudflare.yml` builds and deploys on every push to `main`. Add these repository secrets in GitHub (Settings → Secrets and variables → Actions):

- `CLOUDFLARE_API_TOKEN` — token created from the "Edit Cloudflare Workers" template
- `CLOUDFLARE_ACCOUNT_ID` — shown on the Cloudflare dashboard

After the first deploy, attach your domain in Cloudflare: Workers & Pages → `thaicon-web` → Settings → Domains & Routes → Add → Custom domain.
