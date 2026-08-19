import { useEffect, useState } from "react";
import type { FormEvent } from "react";

type Language = "th" | "en";

const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const companyIdentity = {
  english: "Thai Control Engineering",
  thai: "ไทย คอนโทรล เอ็นจิเนียริ่ง จำกัด",
};

const content = {
  th: {
    nav: [
      ["หน้าแรก", "home"],
      ["บริการ", "services"],
      ["ผลงาน", "projects"],
      ["ติดต่อเรา", "contact"],
    ],
    eyebrow: "SMART INDUSTRIAL ENGINEERING",
    headline:
      "ผู้นำโซลูชันวิศวกรรมระบบปรับอากาศ ควบคุมอัตโนมัติ และ IoT ประหยัดพลังงานด้วย AI สำหรับอุตสาหกรรม",
    support:
      "ออกแบบ ดูแล และเชื่อมโยงระบบโรงงาน เพื่อประสิทธิภาพที่วัดผลได้",
    primaryCta: "ปรึกษาวิศวกรฟรี",
    secondaryCta: "ดูบริการของเรา",
    cmmsLogin: "CMMS Login",
    efficiency: "ตัวอย่างข้อมูลจากระบบ",
    monitored: "เครื่องจักรในระบบ",
    serviceSites: "ไซต์งานที่ให้บริการ",
    years: "ปีแห่งประสบการณ์",
    servicesEyebrow: "OUR SERVICES",
    servicesTitle: "โซลูชันที่เชื่อมงานวิศวกรรมเข้ากับข้อมูล",
    servicesIntro:
      "ตั้งแต่งานบำรุงรักษาหน้างาน ระบบควบคุมอัตโนมัติ ไปจนถึงการวิเคราะห์พลังงานด้วย AI",
    services: [
      {
        number: "01",
        title: "Engineering Services",
        thai: "งานวิศวกรรมระบบ",
        description:
          "PM ระบบปรับอากาศและ Clean room พร้อมออกแบบ ติดตั้ง และปรับปรุงระบบคอนโทรลอัตโนมัติ",
        tags: ["HVAC PM", "Clean Room", "Automation"],
      },
      {
        number: "02",
        title: "Smart IoT & AI Energy",
        thai: "แพลตฟอร์มเทคโนโลยี",
        description:
          "ติดตามพลังงาน อุณหภูมิ และความชื้นแบบ Real-time พร้อมแจ้งเตือนและวิเคราะห์ความผิดปกติ",
        tags: ["IoT Cloud", "Predictive", "Analytics"],
      },
      {
        number: "03",
        title: "Green Technology",
        thai: "สินค้าเทคโนโลยีประหยัดพลังงาน",
        description:
          "คัดสรรอุปกรณ์และโซลูชันที่ช่วยเพิ่มประสิทธิภาพ ลดพลังงาน และลดการใช้ทรัพยากร",
        tags: ["Efficiency", "Products", "Sustainability"],
      },
    ],
    explore: "ดูรายละเอียด",
    platformEyebrow: "SMART IOT & AI ENERGY PLATFORM",
    platformTitle: "เห็นข้อมูลก่อนปัญหาเกิด ตัดสินใจได้ก่อนพลังงานสูญเปล่า",
    platformIntro:
      "ศูนย์กลางข้อมูลระบบอาคารและโรงงาน บันทึกค่าตลอด 24 ชั่วโมง แจ้งเตือนความผิดปกติ และช่วยวางแผนบำรุงรักษาเชิงคาดการณ์",
    platformPoints: [
      ["Real-time Monitoring", "พลังงาน อุณหภูมิ ความชื้น และสถานะอุปกรณ์"],
      ["Predictive Maintenance", "วิเคราะห์แนวโน้มการเสื่อมสภาพก่อนเครื่องหยุด"],
      ["Energy Analytics", "ค้นหาจุดสูญเสียและติดตามผลการประหยัดพลังงาน"],
    ],
    dashboardLive: "LIVE SYSTEM",
    dashboardEnergy: "ENERGY TODAY",
    dashboardTemp: "AVG. TEMPERATURE",
    dashboardHealth: "SYSTEM HEALTH",
    dashboardAlert: "ไม่พบสัญญาณผิดปกติ",
    projectsEyebrow: "PROJECTS & REFERENCES",
    projectsTitle: "ประสบการณ์ที่สร้างความเชื่อมั่นในทุกไซต์งาน",
    projectsIntro:
      "ดูแลระบบที่ต้องการความต่อเนื่องและความแม่นยำสำหรับโรงพยาบาล มหาวิทยาลัย คลินิก และสถานประกอบการทั่วประเทศไทย",
    projectTypes: [
      {
        title: "Clean Room Reliability",
        description:
          "ควบคุมอุณหภูมิ ความชื้น และแรงดัน พร้อมปรับระบบให้ทำงานตามมาตรฐานที่เกี่ยวข้อง",
        outcome: "Environmental control",
      },
      {
        title: "HVAC & Automation PM",
        description:
          "ตรวจสอบ บำรุงรักษา และแก้ไขระบบควบคุมเพื่อลดความเสี่ยงจากการหยุดทำงาน",
        outcome: "Operational continuity",
      },
      {
        title: "IoT Energy Intelligence",
        description:
          "เชื่อมต่อข้อมูลหน้างานสู่ Cloud Dashboard เพื่อแจ้งเตือน วิเคราะห์ และจัดทำรายงาน",
        outcome: "Measurable efficiency",
      },
    ],
    trusted: "ได้รับความไว้วางใจจากองค์กรชั้นนำทั่วประเทศไทย",
    contactEyebrow: "CONTACT OUR ENGINEERS",
    contactTitle: "เริ่มต้นแก้ปัญหาระบบของคุณกับทีมวิศวกร ThaiCon",
    contactIntro:
      "แจ้งข้อมูลเบื้องต้น ทีมงานจะติดต่อกลับเพื่อประเมินหน้างานและแนะนำแนวทางที่เหมาะสม",
    hotlineLabel: "สายด่วนวิศวกร",
    emailLabel: "อีเมล",
    lineLabel: "LINE OA",
    lineHint: "ขอ QR Code จากทีมงาน",
    addressLabel: "สำนักงานใหญ่",
    address:
      "2 ซอยนักกีฬาแหลมทอง 4 แยก 1-1 แขวงทับช้าง เขตสะพานสูง กรุงเทพมหานคร 10250",
    mapLabel: "เปิดแผนที่",
    formTitle: "ขอคำปรึกษาและใบเสนอราคา",
    formIntro: "กรอกข้อมูลเพื่อเตรียมข้อความส่งถึงทีมงานผ่านอีเมล",
    fields: {
      name: "ชื่อ–นามสกุล",
      company: "บริษัท / หน่วยงาน",
      phone: "เบอร์โทรศัพท์",
      email: "อีเมล",
      interest: "บริการที่สนใจ",
      detail: "รายละเอียดเบื้องต้น",
    },
    interests: [
      "Engineering Services",
      "Smart IoT & AI Energy",
      "Green Technology Products",
      "ขอให้วิศวกรช่วยประเมิน",
    ],
    choose: "เลือกบริการ",
    submit: "เตรียมอีเมลถึงทีมงาน",
    mailNote: "ระบบจะเปิดโปรแกรมอีเมลของคุณ โดยยังไม่ส่งข้อความอัตโนมัติ",
    footerTagline:
      "Engineering • Automation • IoT • AI Energy สำหรับระบบอุตสาหกรรมที่มีประสิทธิภาพ",
    companyName: companyIdentity.thai,
    copyright: "สงวนลิขสิทธิ์",
  },
  en: {
    nav: [
      ["Home", "home"],
      ["Services", "services"],
      ["Projects", "projects"],
      ["Contact", "contact"],
    ],
    eyebrow: "SMART INDUSTRIAL ENGINEERING",
    headline:
      "Industrial HVAC, Automation and AI-Powered Energy IoT Solutions",
    support:
      "We design, maintain and connect industrial systems for measurable efficiency.",
    primaryCta: "Consult an engineer",
    secondaryCta: "Explore services",
    cmmsLogin: "CMMS Login",
    efficiency: "System data preview",
    monitored: "Connected machines",
    serviceSites: "Service sites",
    years: "Years of experience",
    servicesEyebrow: "OUR SERVICES",
    servicesTitle: "Engineering expertise, connected by data",
    servicesIntro:
      "From field maintenance and industrial controls to AI-powered energy analytics.",
    services: [
      {
        number: "01",
        title: "Engineering Services",
        thai: "HVAC & automation engineering",
        description:
          "Preventive maintenance for HVAC and clean rooms, plus control and automation system design and installation.",
        tags: ["HVAC PM", "Clean Room", "Automation"],
      },
      {
        number: "02",
        title: "Smart IoT & AI Energy",
        thai: "Real-time technology platform",
        description:
          "Monitor energy, temperature and humidity in real time with intelligent alerts and anomaly analysis.",
        tags: ["IoT Cloud", "Predictive", "Analytics"],
      },
      {
        number: "03",
        title: "Green Technology",
        thai: "Energy-saving products",
        description:
          "Selected equipment and solutions that improve performance while reducing energy and resource consumption.",
        tags: ["Efficiency", "Products", "Sustainability"],
      },
    ],
    explore: "View details",
    platformEyebrow: "SMART IOT & AI ENERGY PLATFORM",
    platformTitle: "See issues earlier. Act before energy is wasted.",
    platformIntro:
      "A 24/7 operational data hub that records building and plant conditions, detects anomalies and supports predictive maintenance planning.",
    platformPoints: [
      ["Real-time Monitoring", "Energy, temperature, humidity and equipment status"],
      ["Predictive Maintenance", "Identify degradation trends before downtime"],
      ["Energy Analytics", "Find losses and verify energy-saving outcomes"],
    ],
    dashboardLive: "LIVE SYSTEM",
    dashboardEnergy: "ENERGY TODAY",
    dashboardTemp: "AVG. TEMPERATURE",
    dashboardHealth: "SYSTEM HEALTH",
    dashboardAlert: "No abnormal signals detected",
    projectsEyebrow: "PROJECTS & REFERENCES",
    projectsTitle: "Experience that earns confidence at every site",
    projectsIntro:
      "Supporting critical, precision-driven environments for hospitals, universities, clinics and facilities across Thailand.",
    projectTypes: [
      {
        title: "Clean Room Reliability",
        description:
          "Temperature, humidity and pressure control with system tuning to meet relevant environmental standards.",
        outcome: "Environmental control",
      },
      {
        title: "HVAC & Automation PM",
        description:
          "Inspection, preventive maintenance and control-system troubleshooting to reduce operational risk.",
        outcome: "Operational continuity",
      },
      {
        title: "IoT Energy Intelligence",
        description:
          "Connect field data to a cloud dashboard for alerts, analysis and reporting.",
        outcome: "Measurable efficiency",
      },
    ],
    trusted: "Trusted by leading organizations across Thailand",
    contactEyebrow: "CONTACT OUR ENGINEERS",
    contactTitle: "Start solving your system challenges with ThaiCon engineers",
    contactIntro:
      "Share the essentials and our team will contact you to assess the site and recommend a practical approach.",
    hotlineLabel: "Engineer hotline",
    emailLabel: "Email",
    lineLabel: "LINE OA",
    lineHint: "Request the official QR code",
    addressLabel: "Head office",
    address:
      "2 Soi Nakkila Laem Thong 4 Yak 1-1, Thap Chang, Saphan Sung, Bangkok 10250, Thailand",
    mapLabel: "Open map",
    formTitle: "Request a consultation or quotation",
    formIntro: "Complete the form to prepare an email to our engineering team.",
    fields: {
      name: "Full name",
      company: "Company / organization",
      phone: "Phone number",
      email: "Email",
      interest: "Service of interest",
      detail: "Project details",
    },
    interests: [
      "Engineering Services",
      "Smart IoT & AI Energy",
      "Green Technology Products",
      "Engineer assessment",
    ],
    choose: "Select a service",
    submit: "Prepare email to our team",
    mailNote: "Your email app will open. Nothing is sent automatically.",
    footerTagline:
      "Engineering • Automation • IoT • AI Energy for efficient industrial systems",
    companyName: companyIdentity.english,
    copyright: "All rights reserved",
  },
} as const;

const clients = [
  ["/clients/thammasat.png", "Thammasat University"],
  ["/clients/nopparat.png", "Nopparat Rajathanee Hospital"],
  ["/clients/phyathai-2.png", "Phyathai 2 Hospital"],
  ["/clients/phyathai-3.png", "Phyathai 3 Hospital"],
  ["/clients/phyathai-phaholyothin.png", "Phyathai Phaholyothin Hospital"],
  ["/clients/masterwork.png", "Masterwork Clinic"],
  ["/clients/klang-hospital.png", "Klang Hospital"],
  ["/clients/bujeong.png", "Bujeong Surgery Center"],
  ["/clients/sirindhorn.png", "Sirindhorn Hospital"],
  ["/clients/tharntharee.png", "Tharntharee Clinic"],
  ["/clients/client-royal.png", "Client reference"],
  ["/clients/client-government.png", "Government client reference"],
] as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("th");
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = content[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject =
      language === "th"
        ? `ขอคำปรึกษาระบบจาก ${form.get("company") || form.get("name")}`
        : `Engineering consultation from ${form.get("company") || form.get("name")}`;
    const body = [
      `${copy.fields.name}: ${form.get("name")}`,
      `${copy.fields.company}: ${form.get("company")}`,
      `${copy.fields.phone}: ${form.get("phone")}`,
      `${copy.fields.email}: ${form.get("email")}`,
      `${copy.fields.interest}: ${form.get("interest")}`,
      "",
      `${copy.fields.detail}:`,
      `${form.get("detail")}`,
    ].join("\n");

    window.location.href = `mailto:tce.thaicontrol@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main id="home">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="ThaiCon home">
            <img src={publicAsset("/brand/thaicon-logo-transparent.png")} alt="" />
            <span className="brand-lockup">
              <strong>ThaiCon</strong>
              <small>{copy.companyName}</small>
            </span>
          </a>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
            {copy.nav.map(([label, target]) => (
              <a key={target} href={`#${target}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="cmms-nav-link"
              href="#/cmms"
              onClick={() => setMenuOpen(false)}
            >
              {copy.cmmsLogin}
            </a>
          </nav>

          <div className="header-actions">
            <div className="language-switcher" aria-label="Select language">
              {(["th", "en"] as Language[]).map((item) => (
                <button
                  className={language === item ? "active" : ""}
                  key={item}
                  onClick={() => setLanguage(item)}
                  type="button"
                  aria-pressed={language === item}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              className={`menu-button ${menuOpen ? "active" : ""}`}
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="blueprint blueprint-one" />
        <div className="blueprint blueprint-two" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1 id="hero-title">{copy.headline}</h1>
            <p className="hero-support">{copy.support}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                {copy.primaryCta}
              </a>
              <a className="button button-secondary" href="#services">
                {copy.secondaryCta}
              </a>
            </div>
            <p className="trust-line">
              <span>Engineering</span>
              <i />
              <span>IoT</span>
              <i />
              <span>AI Energy</span>
            </p>
          </div>

          <div className="hero-visual" aria-label="Industrial HVAC and automation system">
            <img
              src={publicAsset("/images/hero-hvac-control.png")}
              alt="Industrial HVAC ducts and automation control cabinet"
            />
            <div className="iot-node node-one" />
            <div className="iot-node node-two" />
            <div className="energy-card">
              <div>
                <span>{copy.efficiency}</span>
                <strong>IoT DATA</strong>
              </div>
              <div className="efficiency-ring" aria-hidden="true">
                <span>AI</span>
              </div>
              <p>
                REAL-TIME <b>MONITORING</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Company experience">
        <div className="proof-item">
          <strong>10+</strong>
          <span>{copy.years}</span>
        </div>
        <div className="proof-item">
          <strong>85+</strong>
          <span>{copy.serviceSites}</span>
        </div>
        <div className="proof-item">
          <strong>2,985</strong>
          <span>{copy.monitored}</span>
        </div>
        <div className="proof-response">
          <span className="status-dot" />
          <p>
            ONLINE SUPPORT
            <strong>24 HOURS</strong>
          </p>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{copy.servicesEyebrow}</p>
            <h2>{copy.servicesTitle}</h2>
          </div>
          <p>{copy.servicesIntro}</p>
        </div>

        <div className="services-grid">
          {copy.services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-number">{service.number}</div>
              <p className="service-kicker">{service.thai}</p>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="tag-list">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a href="#contact">
                {copy.explore}
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="platform-section">
        <div className="platform-inner section">
          <div className="platform-copy">
            <p className="eyebrow">{copy.platformEyebrow}</p>
            <h2>{copy.platformTitle}</h2>
            <p className="platform-intro">{copy.platformIntro}</p>
            <div className="platform-points">
              {copy.platformPoints.map(([title, description], index) => (
                <div className="platform-point" key={title}>
                  <span>0{index + 1}</span>
                  <p>
                    <strong>{title}</strong>
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard" aria-label="IoT energy dashboard preview">
            <div className="dashboard-top">
              <div>
                <i className="status-dot" />
                <span>{copy.dashboardLive}</span>
              </div>
              <strong>THAICON CLOUD</strong>
            </div>
            <div className="dashboard-metrics">
              <article>
                <span>{copy.dashboardEnergy}</span>
                <strong>428.6 <small>kWh</small></strong>
                <em>−12.4%</em>
              </article>
              <article>
                <span>{copy.dashboardTemp}</span>
                <strong>24.6 <small>°C</small></strong>
                <em className="neutral">Stable</em>
              </article>
              <article>
                <span>{copy.dashboardHealth}</span>
                <strong>98 <small>%</small></strong>
                <em>Excellent</em>
              </article>
            </div>
            <div className="energy-chart">
              <div className="chart-heading">
                <span>ENERGY CONSUMPTION</span>
                <small>24 HOURS</small>
              </div>
              <div className="chart-bars" aria-hidden="true">
                {[31, 38, 45, 40, 53, 66, 78, 71, 62, 67, 59, 48, 43, 35].map(
                  (height, index) => (
                    <i
                      key={`${height}-${index}`}
                      style={{ height: `${height}%` }}
                    />
                  ),
                )}
              </div>
              <div className="chart-axis">
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>24:00</span>
              </div>
            </div>
            <div className="dashboard-alert">
              <span className="status-dot" />
              {copy.dashboardAlert}
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section projects-inner">
          <div className="projects-heading">
            <p className="eyebrow">{copy.projectsEyebrow}</p>
            <h2>{copy.projectsTitle}</h2>
            <p>{copy.projectsIntro}</p>
          </div>

          <div className="project-types">
            {copy.projectTypes.map((project, index) => (
              <article key={project.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <strong>{project.outcome}</strong>
                </div>
              </article>
            ))}
          </div>

          <div className="clients-block">
            <p>{copy.trusted}</p>
            <div className="client-grid">
              {clients.map(([src, alt]) => (
                <div className="client-logo" key={src}>
                  <img src={publicAsset(src)} alt={alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section contact-inner">
          <div className="contact-heading">
            <p className="eyebrow">{copy.contactEyebrow}</p>
            <h2>{copy.contactTitle}</h2>
            <p>{copy.contactIntro}</p>
          </div>

          <div className="contact-grid">
            <div className="contact-details">
              <div className="contact-channels">
                <a href="tel:0655014478" className="contact-channel">
                  <span>01</span>
                  <p>
                    <small>{copy.hotlineLabel}</small>
                    <strong>065-501-4478</strong>
                    <em>02-100-4648</em>
                  </p>
                </a>
                <a href="mailto:tce.thaicontrol@gmail.com" className="contact-channel">
                  <span>02</span>
                  <p>
                    <small>{copy.emailLabel}</small>
                    <strong>tce.thaicontrol@gmail.com</strong>
                  </p>
                </a>
                <a href="#contact-form" className="contact-channel">
                  <span>03</span>
                  <p>
                    <small>{copy.lineLabel}</small>
                    <strong>{copy.lineHint}</strong>
                  </p>
                </a>
              </div>

              <div className="address-card">
                <div>
                  <small>{copy.addressLabel}</small>
                  <p>{copy.address}</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=2%20Soi%20Nakkila%20Laem%20Thong%204%20Yak%201-1%20Thap%20Chang%20Saphan%20Sung%20Bangkok%2010250"
                  target="_blank"
                  rel="noreferrer"
                >
                  {copy.mapLabel} ↗
                </a>
              </div>

              <div className="map-frame">
                <iframe
                  title="Thai Control Engineering location"
                  src="https://www.google.com/maps?q=2%20Soi%20Nakkila%20Laem%20Thong%204%20Yak%201-1%20Thap%20Chang%20Saphan%20Sung%20Bangkok%2010250&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading">
                <span>THAICON ENGINEERING</span>
                <h3>{copy.formTitle}</h3>
                <p>{copy.formIntro}</p>
              </div>

              <div className="form-row">
                <label>
                  {copy.fields.name}
                  <input name="name" autoComplete="name" required />
                </label>
                <label>
                  {copy.fields.company}
                  <input name="company" autoComplete="organization" required />
                </label>
              </div>
              <div className="form-row">
                <label>
                  {copy.fields.phone}
                  <input name="phone" type="tel" autoComplete="tel" required />
                </label>
                <label>
                  {copy.fields.email}
                  <input name="email" type="email" autoComplete="email" required />
                </label>
              </div>
              <label>
                {copy.fields.interest}
                <select name="interest" defaultValue="" required>
                  <option value="" disabled>
                    {copy.choose}
                  </option>
                  {copy.interests.map((interest) => (
                    <option value={interest} key={interest}>
                      {interest}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                {copy.fields.detail}
                <textarea name="detail" rows={5} required />
              </label>
              <button type="submit" className="button button-primary form-submit">
                {copy.submit}
                <span aria-hidden="true">→</span>
              </button>
              <p className="form-note">{copy.mailNote}</p>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <img src={publicAsset("/brand/thaicon-logo-transparent.png")} alt="" />
              <span className="brand-lockup">
                <strong>ThaiCon</strong>
                <small>Thai Control Engineering</small>
              </span>
            </a>
            <p>{copy.footerTagline}</p>
          </div>
          <div className="footer-contact">
            <div className="footer-company-name">
              <strong>{companyIdentity.english}</strong>
              <span>{companyIdentity.thai}</span>
            </div>
            <a href="tel:0655014478">065-501-4478</a>
            <a href="mailto:tce.thaicontrol@gmail.com">tce.thaicontrol@gmail.com</a>
          </div>
          <div className="footer-bottom">
            <span>© 2021–2026 ThaiCon. {copy.copyright}.</span>
            <span>Tax ID 0105564071807</span>
          </div>
        </div>
      </footer>

      <div className="mobile-contact-bar">
        <a href="tel:0655014478">{copy.hotlineLabel}</a>
        <a href="#contact-form">{copy.primaryCta}</a>
      </div>
    </main>
  );
}
