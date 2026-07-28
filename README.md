# ThaiCon Website & CMMS Prototype

Bilingual corporate website for Thai Control Engineering Co., Ltd. with an interactive CMMS and preventive-maintenance prototype.

## Routes

- Corporate website: `/thaicon-web-dev/`
- CMMS prototype: `/thaicon-web-dev/#/cmms`

The CMMS currently uses clearly labelled demo data and local React state. It includes the maintenance dashboard, work orders, PM schedule, asset register, customer sites, IoT alarms, reports, the first interactive work-order workflow, and an IoT Monitoring Center for multi-site device health and telemetry.

## IoT Monitoring prototype

- Portfolio overview for 85 sites and 2,985 monitored devices
- Site, gateway, device and signal-health views
- Device telemetry charts and threshold information
- Alarm acknowledgement and work-order simulation
- Search and site-status filters

The GitHub Pages build uses a frontend demo-data adapter. The public review deployment also exposes protected demo API routes; production MQTT ingestion, persistent telemetry storage and device provisioning remain future backend work.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The included GitHub Actions workflow builds and deploys the site to GitHub Pages whenever the `main` branch is updated.
