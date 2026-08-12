# ThaiCon Website & CMMS Prototype

Bilingual corporate website for Thai Control Engineering Co., Ltd. with an interactive CMMS and preventive-maintenance prototype.

## Routes

- Corporate website: `/thaicon-web-dev/`
- CMMS แยกพัฒนาใน repository `champln/thaicon-cmms`
- เว็บไซต์บริษัทเชื่อมไปยังระบบ CMMS public ผ่านปุ่ม `CMMS Login`

The corporate site is intentionally independent from the operational system, so each product can be deployed and maintained without affecting the other.

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
